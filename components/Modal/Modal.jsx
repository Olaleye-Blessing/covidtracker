import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAppContext } from "../../context/appContext";
import ModalHeader from "./ModalHeader/ModalHeader";

const Modal = ({ onClick, setSearchedValue, setMultipleSelected }) => {
    let { favouriteRegions, regionsWithFlag } = useAppContext();
    let [WorldWide, Continents, Countries] = regionsWithFlag;
    let countriesList = Countries.options;
    // let continentsList = Continents.options;
    let worldWideImage = WorldWide.options[0].icon;
    let { single, multiple } = favouriteRegions;

    const [favouriteMode, setFavouriteMode] = useState("single");

    const switchFavouriteMode = (mode) => {
        setFavouriteMode(mode);
    };

    const handleFavouriteClicked = (val) => {
        if (favouriteMode === "multiple") {
            setSearchedValue(val);
            setMultipleSelected(true);
        } else {
            setSearchedValue(val);
            setMultipleSelected(false);
        }
        // setMultipleSelected(favouriteMode === "multiple");
        // setSearchedValue(val);
        onClick();
    };

    single = single.map((region) => {
        let { cathegory, value } = region;
        if (cathegory === "country") {
            return countriesList.find((co) => co.value === value);
        }
        if (value === "World") {
            return { value, icon: worldWideImage };
        }
        return region;
    });

    return (
        <div className="fixed inset-0 h-screen px-3 py-16 bg-black bg-opacity-30 flex items-start justify-center">
            <div className="bg-black bg-opacity-90 h-full w-full max-w-xl">
                <button
                    onClick={onClick}
                    className="bg-red bg-opacity-30 text-red text-3xl rounded-full block ml-auto -mr-3 -mt-3"
                >
                    <AiOutlineClose />
                </button>
                <header className="mb-4">
                    <h1 className="text-xl text-center font-bold text-blue">
                        Favourites
                    </h1>
                </header>
                <div>
                    <ModalHeader
                        switchFavouriteMode={switchFavouriteMode}
                        favouriteMode={favouriteMode}
                    />
                    <section className="mt-5 px-2">
                        {single.length === 0 && multiple.length === 0 ? (
                            <div className="text-red text-center pt-5">
                                You Have No Favourite region
                            </div>
                        ) : favouriteMode === "single" ? (
                            <ul className="flex flex-wrap gap-x-5 gap-y-3 items-center justify-center">
                                {single.map((region) => {
                                    let { value, cathegory, flag, icon } =
                                        region;
                                    return (
                                        <li
                                            key={value}
                                            className="text-lg shadow-lg"
                                        >
                                            <button
                                                className="transition duration-300 flex items-center justify-start gap-2 bg-opacity-70 px-3 py-1 text-blue hover:shadow-lg hover:bg-blue-light border rounded-md"
                                                onClick={(e) => {
                                                    handleFavouriteClicked({
                                                        value,
                                                        cathegory,
                                                    });
                                                }}
                                            >
                                                {flag && (
                                                    <figure>
                                                        <Image
                                                            src={flag}
                                                            width={20}
                                                            height={15}
                                                        />
                                                    </figure>
                                                )}
                                                {icon && (
                                                    <figure>{icon}</figure>
                                                )}
                                                <span>{value}</span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <ul className="flex flex-wrap gap-x-5 gap-y-3 items-center justify-center">
                                {multiple.map((regions, i) => {
                                    return (
                                        <li key={i} className="">
                                            <button
                                                className="flex gap-2 transition duration-300 bg-opacity-70 px-3 py-1 text-blue hover:shadow-lg hover:bg-blue-light border rounded-md"
                                                onClick={() => {
                                                    handleFavouriteClicked(
                                                        regions
                                                    );
                                                }}
                                            >
                                                {regions.map(
                                                    (region, i, regions) => {
                                                        let {
                                                            flag,
                                                            value,
                                                            icon,
                                                        } = region;

                                                        return (
                                                            <div
                                                                key={value}
                                                                className="flex items-center justify-center gap-x-1"
                                                            >
                                                                {flag && (
                                                                    <span>
                                                                        <Image
                                                                            src={
                                                                                flag
                                                                            }
                                                                            width={
                                                                                20
                                                                            }
                                                                            height={
                                                                                15
                                                                            }
                                                                        />
                                                                    </span>
                                                                )}
                                                                <span>
                                                                    {value}{" "}
                                                                </span>
                                                                {i !==
                                                                    regions.length -
                                                                        1 && (
                                                                    <span>
                                                                        Vs{" "}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Modal;
