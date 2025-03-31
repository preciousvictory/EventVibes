'use client'

import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { getExtendedEphemeralPublicKey, jwtToAddress } from '@mysten/sui/zklogin';
import axios from 'axios';
import { ZkProofResult } from '../../types';
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { getSessionData } from '../../lib/zkLoginUtils';

interface SaltResponse {
    salt: string;
}

export default function ZkLoginCallback() {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [_userAddress, setUserAddress] = useState<string | null>(null);
    const navigate = useNavigate();
    const FULLNODE_URL = import.meta.env.VITE_FULLNODE_URL;
    const PROVER_URL = import.meta.env.VITE_PROVER_URL;
    const VITE_SALT_API_URL = import.meta.env.VITE_SALT_API_URL

    if (!FULLNODE_URL || !PROVER_URL) {
        throw new Error("Missing required environment variables");
    }

    // Step 3: Handle OAuth callback and generate user address
    const handleOAuthCallback = useCallback(async () => {
        try {
            const urlParams = new URLSearchParams(window.location.hash.substring(1));
            const idToken = urlParams.get('id_token');
            if (!idToken) throw new Error('No ID token found');

            const sessionData = getSessionData();
            if (!sessionData) throw new Error('Session data not found');

            // const jwtPayload = jwtDecode(id_token);

            const decodedJwt = jwtDecode(idToken);
            if (!decodedJwt.sub) throw new Error('Missing sub claim');

            const zkLoginUserAddress = jwtToAddress(idToken, sessionData.randomness);
            // console.log(zkLoginUserAddress);

            setUserAddress(zkLoginUserAddress);

            return zkLoginUserAddress
        } catch (error) {
            console.error('Callback failed:', error);
            setError(error instanceof Error ? error.message : 'Login failed');
            return null;
        }
    }, []);

    const getSalt = useCallback(async (jwtToken: string): Promise<string> => {
        try {
            if (!jwtToken) {
                throw new Error('JWT token is required');
            }

            const response = await fetch(VITE_SALT_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: jwtToken
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(
                    errorData.message ||
                    `Failed to fetch salt: ${response.statusText}`
                );
            }

            const data: SaltResponse = await response.json();

            if (!data?.salt) {
                throw new Error('Invalid salt response format');
            }

            return data.salt;
        } catch (error) {
            console.error('Error in getSalt callback:', error);
            throw error;
        }
    }, []);


    // Step 4: Fetch ZK Proof
    const fetchZkProof = useCallback(async (jwt: string): Promise<ZkProofResult> => {
        setIsLoading(true);
        setError(null);

        try {
            const sessionData = getSessionData();
            if (!sessionData) {
                throw new Error('Session data not found');
            }

            const secretKeyBytes = sessionData.ephemeralKeyPair

            // Create the keypair from the properly formatted secret key
            const ephemeralKeyPair = Ed25519Keypair.fromSecretKey(secretKeyBytes);

            const extendedEphemeralPublicKey = getExtendedEphemeralPublicKey(
                ephemeralKeyPair.getPublicKey()
            );

            const salt = await getSalt(jwt);

            const response = await axios.post(
                PROVER_URL,
                {
                    jwt,
                    extendedEphemeralPublicKey,
                    maxEpoch: sessionData.maxEpoch,
                    jwtRandomness: sessionData.randomness,
                    salt: salt,
                    keyClaimName: "sub",
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            return {
                proof: response.data,
                ephemeralKeyPair,
                maxEpoch: sessionData.maxEpoch,
                jwt,
            };
        } catch (error) {
            console.error('Failed to fetch ZK proof:', error);
            setError('Failed to generate zero-knowledge proof');
            throw error;
        } finally {
            setIsLoading(false);
        }
    }, [getSessionData]);

    // Step 5: Complete zkLogin flow
    const completeZkLoginFlow = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);

            if (window.location.hash.includes('id_token')) {
                const address = await handleOAuthCallback();
                if (!address) throw new Error('Failed to process login');

                const urlParams = new URLSearchParams(window.location.hash.substring(1));
                const idToken = urlParams.get('id_token');
                if (!idToken) throw new Error('No ID token found');

                const zkProof = await fetchZkProof(idToken);
                console.log('ZK Proof obtained:', zkProof);
                navigate('/events');
            } else {
                navigate('/login');
            }
        } catch (error) {
            console.error('ZKLogin flow failed:', error);
            setError(error instanceof Error ? error.message : 'Login failed');
        } finally {
            setIsLoading(false);
        }
    }, [handleOAuthCallback, fetchZkProof, navigate]);

    useEffect(() => {
        if (window.location.hash.includes('id_token')) {
            completeZkLoginFlow();
        }
    }, [completeZkLoginFlow]);

    if (isLoading) {
        return <div>Processing login...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return null;
}

