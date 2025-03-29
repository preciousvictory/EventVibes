import { useNavigate } from "react-router-dom";
import { ArrowLeftLongIcon, Ellipse, FilterIcon } from "../../assets/icons"
import RoundRectGradient from "../../components/ui/RoundRectGradient"
import SearchInput from "../../components/ui/SearchInput";

const AIPoweredSearch = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="flex justify-center items-start relative min-h-screen overflow-hidden">
            <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
                <Ellipse />
            </div>

            <div className="flex flex-col w-full">
                <div className="flex flex-row items-center justify-between pt-5 pb-4 px-20 border-b border-[#222222] border-[1px]">
                    <div onClick={goBack} className="cursor-pointer">
                        <RoundRectGradient>
                            <ArrowLeftLongIcon />
                        </RoundRectGradient>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center h-full w-full">
                    <div className=" ">
                        <div className="text-center pb-6 p-10 max-w-[500px] flex flex-col items-center">
                            <h2 className="text-3xl font-bold mb-2 text-white">Upload Event <span className="text-[#721D89]">Media</span></h2>
                            <p className="text-[var(--grey2)] text-sm ">Share your memories from the event. All media will be stored on decentralized networks for permanent access.</p>
                        </div>

                        <SearchInput placeholder="AI Search" />
                    </div>

                    <div className="flex items-center justify-between space-x-2 mb-4">
                        <div className="flex flex-col items-start">
                            <h3 className="text-2xl font-semibold text-left">Search <span className="text-[var(--navItemColorHover)]">Results</span></h3>
                            <p className="text-[var(--gray)] text-md">Showing results </p>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-1 rounded-lg p-2 bg-[var(--inputColor)] cursor-pointer">
                            <FilterIcon />
                            <span>Filter</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AIPoweredSearch