import { RiVirusLine, RiVirusFill } from "react-icons/ri";

const HomeLogo = () => {
    return (
        <div className="flex items-center justify-start">
            <figure className="pt-1 mr-1">
                <RiVirusFill className="text-red-primary text-lg" />
            </figure>
            <div className="text-xl">
                <span className="text-red-primary">n</span>
                <span>Cov</span>
            </div>
        </div>
    );
};

export default HomeLogo;
