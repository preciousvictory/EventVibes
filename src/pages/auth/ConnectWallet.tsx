import { useEffect } from "react";
import { Wallet } from "../../assets/icons";
import { EventVibesLogo } from "../../assets/Logo";
import GradientLayout from "../../components/GradientLayout";
import ZkLoginButton from "./zkLoginButton";
import { addressEllipsis, ConnectButton, useWallet } from "@suiet/wallet-kit";
import { useNavigate } from "react-router-dom";

export default function ConnectWallet() {
    const wallet = useWallet();
    const navigate = useNavigate()
    
    const handleConnectUser = (wallet: string) => {
        console.log(`Connected Account: ${wallet}`);
    }

    // Log the connected account when wallet is available
    useEffect(() => {
        if (wallet.connected && wallet.account?.address) {
            console.log(`Connected Account: ${addressEllipsis(wallet.account.address)}`);
            navigate('/get-started')
        }
    }, [wallet.connected, wallet.account?.address]);

    const classname = "w-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 shadow-black/75 shadow-xl hover:shadow-lg transition-shadow px-4 py-3 cursor-pointer inline-flex text-center items-center justify-center whitespace-nowrap rounded-full text-sm font-regular ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 gap-2"

    return (
        <GradientLayout>
            <div className="mb-6">
                <EventVibesLogo />
            </div>
            <div className="w-full">
            <ConnectButton children={
                <div className={classname}>
                    <Wallet />
                    <p>Select Sui Wallet </p>
                </div>
            } onConnectSuccess={(wallet) => handleConnectUser(wallet)}/>
            </div>
            <p className="text-[#BDBDBD] text-sm mt-2">
                Don't have a Sui wallet yet?{" "}
                <a href="#" className="text-[var(--primary2)]">
                    Create One
                </a>
            </p>
            <div className="flex items-center my-4">
                <span className="bg-[var(--gray)] max-w-30 h-[1px]"> </span>
                <span className="text-[var(--gray)] text-xs px-2.5 whitespace-nowrap ">
                    Or connect with
                </span>
                <span className="bg-[var(--gray)] max-w-30 h-[1px]"> </span>
            </div>

            {/* {Sign in with Google} */}
            <ZkLoginButton />
        </GradientLayout>
    );
}