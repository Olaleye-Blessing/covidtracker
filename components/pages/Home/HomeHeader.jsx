import Image from "next/image";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import headerBg from "./../../../assests/svg/girl.svg";

const HomeHeader = () => {
    return (
        <header className="px-4 pt-8 sm:px-6 lg:px-28 md:flex items-center justify-center">
            <div>
                <div className="badge">
                    {" "}
                    <figure className="mr-1 text-base">
                        <AiOutlineExclamationCircle />
                    </figure>{" "}
                    <span>COVID-19 Alert</span>
                </div>
                <h1>
                    <span className="block">Stay Home</span>
                    <span className="block -mt-1">Stay Safe</span>
                </h1>
                <p className="max-w-sm mb-2 md:max-w-md">
                    Corona disease(COVID-19) is an infectious disease casued by
                    a new virus. The 2019 novel corona virus (2019-nCov),
                    officially named as COVID-19 pandemic by the WHO, has spread
                    to more than 180 countries including China
                </p>
                <p>Stay At Home Quarantine To Stop Corona Virus</p>
            </div>
            <figure className="hidden md:flex items-center justify-center max-w-lg md:w-2/4 lg:w-11/12 lg:max-w-2xl ">
                <Image
                    src={headerBg}
                    width={400}
                    height={400}
                    layout="intrinsic"
                    // layout="responsive"
                    className="w-full"
                />
            </figure>
        </header>
    );
};

export default HomeHeader;
