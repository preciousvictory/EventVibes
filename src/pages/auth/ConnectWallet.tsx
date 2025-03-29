import { Wallet } from "../../assets/icons";
import { EventVibesLogo } from "../../assets/Logo";
import GradientLayout from "../../components/GradientLayout";
import AnimatedButton from "../../components/ui/Button";
import ZkLoginButton from "./zkLogin";

export default function ConnectWallet() {
    return (
        <GradientLayout>
            <div className="mb-6">
            <EventVibesLogo />
            </div>
            <AnimatedButton
                variant="primary"
                icon={<Wallet />}
                className="w-full shadow-black/75 shadow-xl hover:shadow-lg transition-shadow"
            >
                Select Sui Wallet
            </AnimatedButton>
            <p className="text-[#BDBDBD] text-sm mt-2">
                Don't have a Sui wallet yet?{" "}
                <a href="#" className="text-[var(--primary2)]">
                    Create One
                </a>
            </p>
            <div className="flex items-center my-4">
                <hr className="flex-grow border-[var(--gray)] border-2 w-1/3" />
                <span className="text-[var(--gray)] text-xs px-2.5 whitespace-nowrap ">
                    Or connect with
                </span>
                <hr className="flex-grow border-[var(--gray)] border-2" />
            </div>
            <ZkLoginButton />
        </GradientLayout>
    );
}
