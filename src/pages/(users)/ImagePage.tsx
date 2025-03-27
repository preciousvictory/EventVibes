import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ArrowLeftLongIcon, ArrowRightIcon, DownloadIcon, LoveIcon, ShareIcon } from "../../assets/icons"
import CircleBoxGradient from "../../components/ui/CircleBoxGradient";
import RoundRectGradient from "../../components/ui/roundRectGradient";
import { cleanString } from "./SeeMoreEvents";

const ImagePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { imageUrl, photosList, currentImage } = location.state || {};

    const goBack = () => {
        navigate(-1); // Equivalent to hitting the back button
    };

    const handleNextImage = () => {
        const path = `/images?q=${cleanString(photosList[currentImage].name)}`;
        let newImageId = currentImage + 1;
        const photo = photosList[newImageId];

        if (newImageId = photosList.length) {
            newImageId = 0;
        }

        navigate(path, {
            state: {
                imageUrl: photo.image,
                id: photo.id,
                photosList: photosList,
                currentImage: newImageId
            }
        });
    };

    const handlePrevImage = () => {
        const path = `/images?q=${cleanString(photosList[currentImage].name)}`;
        let newImageId = currentImage - 1;
        const photo = photosList[newImageId];

        if (newImageId = 0) {
            newImageId = photosList.length - 1;
        }

        navigate(path, {
            state: {
                imageUrl: photo.image,
                id: photo.id,
                photosList: photosList,
                currentImage: newImageId
            }
        });
    };

    return (
        <div>
            <div className="flex flex-row items-center justify-between pt-7 pb-4 px-20 border-b border-[#222222] border-[1px]">
                <RoundRectGradient>
                    <div onClick={() => goBack()}>
                        <ArrowLeftLongIcon />
                    </div>
                </RoundRectGradient>


                <div className="flex flex-row gap-2 items-center justify-end">
                    <div className="w-10 h-10 bg-[#37373766] rounded-full flex items-center justify-center">
                        <CircleBoxGradient className="w-10 h-10 bg-[#373737] rounded-full ">
                            <LoveIcon />
                        </CircleBoxGradient>
                    </div>
                    <div className="w-10 h-10 bg-[#37373766] rounded-full flex items-center justify-center">
                        <CircleBoxGradient className="w-10 h-10 bg-[#373737] rounded-full ">
                            <DownloadIcon />
                        </CircleBoxGradient>
                    </div>
                    <div className="w-10 h-10 bg-[#37373766] rounded-full flex items-center justify-center">
                        <CircleBoxGradient className="w-10 h-10 bg-[#373737] rounded-full ">
                            <ShareIcon />
                        </CircleBoxGradient>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between px-20 py-10 gap-6">
                <div onClick={() => handlePrevImage()} className="cursor-pointer">
                    <RoundRectGradient>
                        <ArrowLeftIcon />
                    </RoundRectGradient>
                </div>

                <div className="w-[50%] h-[60vh] object-contain">
                    <img src={imageUrl} alt={photosList[0].name} />
                </div>

                <div onClick={() => handleNextImage()}  className="cursor-pointer">
                    <RoundRectGradient>
                        <ArrowRightIcon />
                    </RoundRectGradient>
                </div>

            </div>
        </div>
    )
}

export default ImagePage