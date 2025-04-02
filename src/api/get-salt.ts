import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

// Import shared types
import { SaltRequest, SaltResponse } from '../types';

export default async function getSaltHandler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { token } = req.body as SaltRequest;

    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }

    // Call Mysten Labs API
    const response = await axios.post<SaltResponse>(
      'https://salt.api.mystenlabs.com/get_salt',
      { token }
    );

    // Return the salt to the frontend
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in get-salt API:', error);
    
    if (axios.isAxiosError(error)) {
      return res.status(error.response?.status || 500).json({
        error: error.response?.data?.message || 'Failed to fetch salt'
      });
    }
    
    return res.status(500).json({ error: 'Internal server error' });
  }
}