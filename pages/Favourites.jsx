import { useAppContext } from "../context/appContext";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const Favourites = () => {
    let { favouriteRegions, regionsWithFlag } = useAppContext();

    const [multipleSelected, setMultipleSelected] = useState(false);
    let { single, multiple } = favouriteRegions;
    // console.log({ single, multiple });

    if (!single && !multiple) {
        return null;
    }

    if (single.length === 0 && multiple.length === 0) {
        return (
            <header>
                <h1>No Favourite Region</h1>
            </header>
        );
    }

    return (
        <>
            {/* <div> */}
            <header className="">
                <div className="flex items-center justify-center mt-3">
                    <button
                        className={`rounded-tl-md rounded-bl-md transition duration-200 px-4 shadow-inner py-2 pb-3 ${
                            !multipleSelected
                                ? "bg-blue text-white hover:bg-opacity-60"
                                : "bg-blue-light text-black"
                        }`}
                    >
                        single
                    </button>
                    <button className="hover:bg-blue-lighter text-black rounded-2 px-4 shadow-inner pt-2 pb-3">
                        multiple
                    </button>
                </div>
            </header>
            {/* </div> */}

            <main>
                <section className="border border-red">
                    {single.length === 0 ? (
                        <div>No Favourite</div>
                    ) : (
                        single.map((region) => {
                            console.log(region);
                            return <li>yes</li>;
                        })
                    )}
                </section>
            </main>
        </>
    );
};

export default Favourites;
