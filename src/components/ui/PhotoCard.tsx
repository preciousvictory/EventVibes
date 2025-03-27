import { LoveIcon } from "../../assets/icons"
import { PhotoView } from "../../data"

export const PhotoCard = ({ photo }: { photo: PhotoView }) => {
    

    return (
        <div className="relative rounded-2xl overflow-hidden aspect-square h-full w-full cursor-pointer shadow-lg hover:shadow-lg transition-shadow" style={{ '--tw-shadow-color': '#3F024F52' } as React.CSSProperties}>
            <div className="relative h-full w-full" >
                <img
                    src={photo.image}
                    alt={photo.name}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Gradient footer */}
            <div className="absolute bottom-0 w-full h-[30%] flex flex-row bg-gradient-to-t from-[var(--secondary)] to-transparent via-[var(--secondary)] via-20% p-3 items-center justify-between">
                <div className="flex flex-col text-left">
                    <h4 className="text-lg font-medium text-white">{photo.name}</h4>
                    <p className="text-sm text-white/80">From: {photo.creator}</p>
                </div>

                <div className="flex items-center space-x-1 text-sm text-white/60">
                    <LoveIcon />
                    <span>43</span>
                </div>
            </div>
        </div>
    )
}