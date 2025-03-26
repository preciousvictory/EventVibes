import { Ellipse } from "@/assests/icons";

const GradientBG = () => {
    return (
        <div className="flex">
            <div className="absolute top-0 left-0">
                <Ellipse />
            </div>
            <div className="absolute top-0 right-0">
                <Ellipse />
            </div>
            <div className="absolute bottom-0 ">
                <Ellipse />
            </div>
        </div>
    )
}

export default GradientBG;