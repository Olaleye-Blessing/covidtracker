import Head from "next/head";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import SingleSelectSearch from "../components/Form/SelectSearch/SingleSelectSearch";
import { VscCompareChanges } from "react-icons/vsc";

import { continents } from "../utility/listOfContinents";
import Map from "../components/Map/Map";
import Spinner from "../components/Spinner";
import fetchMultipleData from "../utility/fetchMultipleData";
import determineRegionUrl from "../utility/determineRegionUrlPath";
import worldWideLabelAndOption from "../utility/worldWideLabelAndOption";
import fetchSingleData from "../utility/fetchSingleData";
import filterValidRegionResult from "../utility/filterValidRegionResult";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { GiConsoleController } from "react-icons/gi";
import {
    multipleFavoriteFound,
    multipleFavorites,
} from "../utility/favourites/multipleFavorites";
import {
    singleFavourite,
    singleFavouriteFound,
} from "../utility/favourites/singleFavourite";
import { useAppContext } from "../context/appContext";
import Modal from "../components/Modal/Modal";

// export const getStaticProps = async () => {
//     try {
//         let allCountriesUrl = `https://restcountries.eu/rest/v2/all`,
//             worldCovidInfo = `https://disease.sh/v3/covid-19/all`;

//         let results = await Promise.all([
//             fetch(allCountriesUrl),
//             fetch(worldCovidInfo),
//         ]).then((responses) => Promise.all(responses.map((r) => r.json())));

//         let [countries, worldInfo] = results;

//         return {
//             props: {
//                 countries,
//                 worldInfo,
//             },
//         };
//     } catch (error) {
//         console.log(error);
//         return {
//             props: {
//                 error,
//             },
//         };
//     }
// };

// const Statistics = ({ countries, worldInfo }) => {
const Statistics = () => {
    let {
        favouriteRegions,
        setFavouriteRegions,
        setRegionsWithFlag,
        covidData: { loading, error, data },
    } = useAppContext();

    const [regionLoading, setRegionLoading] = useState(false);
    const [regionError, setRegionError] = useState(null);
    const [searchedValue, setSearchedValue] = useState({ value: "World" });
    const [multipleSelected, setMultipleSelected] = useState(false);

    // visually show favorite regions
    const [isFavouriteClass, setIsFavouriteClass] = useState("");

    const [showModal, setShowModal] = useState(false);

    const toggleModal = (show) => {
        setShowModal(show);
    };

    // data to display
    // null for initial load
    // undefined for not found data
    const [regionData, setRegionData] = useState(null);

    // countries = countries.map(({ name, flag }) => ({
    //     value: name,
    //     label: name,
    //     flag,
    //     cathegory: "country",
    // }));

    // let items = [
    //     worldWideLabelAndOption,
    //     {
    //         label: "Continents",
    //         options: [...continents],
    //     },
    //     {
    //         label: "Countries",
    //         options: [...countries],
    //     },
    // ];

    let countries = data
        ?.slice(1)
        .map(({ country, countryInfo: { flag } }) => ({
            value: country,
            label: country,
            flag,
            cathegory: "country",
        }));

    let items = [
        worldWideLabelAndOption,
        {
            label: "Continents",
            options: [...continents],
        },
        {
            label: "Countries",
            options: countries && [...countries],
        },
    ];

    // set all detials related to region at once
    const setRegionDetails = (
        data = undefined,
        loading = false,
        err = null
    ) => {
        setRegionLoading(loading);
        setRegionError(err);
        setRegionData(data);
    };

    const toggleMultiple = (e) => {
        setMultipleSelected((prev) => !prev);
        setRegionData(null);
    };

    useEffect(() => {
        if (!data) return;
        setRegionsWithFlag(items);
    }, [data]);

    useEffect(() => {
        // this is for initial load
        if (searchedValue === "" && regionData === null) {
            setRegionDetails(worldInfo, false, null);
            return;
        }

        setRegionLoading(true);

        let regionAbort = new AbortController();
        let regionSignal = regionAbort.signal;

        if (multipleSelected) {
            let url = new URL(`https://disease.sh/v3/covid-19/`);

            let urls = searchedValue.map(
                (dat) => `${url}${determineRegionUrl(dat)}`
            );

            let fetchingMultiple = async () => {
                // get all responses for searched regions
                let { responses } = await fetchMultipleData(urls);

                // get names of searched region
                let names = searchedValue.map(({ value }) => value);

                // seperate valid responses from invalid ones
                let { valid, invalid } = filterValidRegionResult(
                    names,
                    responses
                );

                // this is for result not found
                invalid.forEach((err) => toast.error(err));

                // show valid responses
                setRegionDetails(valid);
            };
            fetchingMultiple();
        } else {
            const fetchRegionData = async () => {
                let url = new URL(`https://disease.sh/v3/covid-19/`);

                url.pathname += determineRegionUrl(searchedValue);

                setRegionLoading(true);
                setRegionError(false);

                try {
                    let data = await fetchSingleData(url, regionSignal);
                    setRegionDetails(data);
                } catch (error) {
                    setRegionDetails(null, false, error.message);
                }
            };

            fetchRegionData();
        }
        return () => regionAbort.abort();
    }, [searchedValue]);

    // show an info instead of map when comparison button is clicked
    useEffect(() => {
        setRegionError("search/compare for detail(s)...");
        setIsFavouriteClass(false);
    }, [multipleSelected]);

    useEffect(() => {
        let { single, multiple } = favouriteRegions;
        if (multipleSelected) {
            if (!multiple) {
                setIsFavouriteClass(false);
                return;
            }
            let checkIfItIsFavourite = multipleFavoriteFound(
                searchedValue,
                multiple
            ).found;
            setIsFavouriteClass(!(checkIfItIsFavourite === -1));
        } else {
            if (!single) {
                setIsFavouriteClass(false);
                return;
            }
            let checkIfItIsFavourite = singleFavouriteFound(
                searchedValue,
                single
            ).found;
            setIsFavouriteClass(!(checkIfItIsFavourite === -1));
        }
    }, [favouriteRegions, searchedValue]);

    const handleFavourite = () => {
        let { single, multiple } = favouriteRegions;
        if (multipleSelected) {
            multiple = multipleFavorites(searchedValue, multiple);
        } else {
            single = singleFavourite(searchedValue, single);
        }
        setFavouriteRegions({ single, multiple });
        localStorage.setItem(
            "favouriteRegions",
            JSON.stringify({ single, multiple })
        );
    };

    let enableFavourite = regionData && regionData.length !== 0;

    // return null;
    // console.log(searchedValue);
    return (
        <>
            <Head>
                <title>Statistics || COVID TRACKER</title>
            </Head>
            <main className="px-4 mt-7 mb-24">
                <section className="mx-auto flex justify-center">
                    <div className="flex items-center justify-center text-lg mr-1">
                        <button
                            className={`text-lg ${
                                multipleSelected &&
                                "text-blue transform rotate-45"
                            } hover:text-blue-lighter transition`}
                            title="click to compare two and/or countries"
                            onClick={toggleMultiple}
                        >
                            <VscCompareChanges />
                        </button>
                    </div>
                    <SingleSelectSearch
                        items={items}
                        searchedValue={searchedValue}
                        setSearchedValue={setSearchedValue}
                        regionData={regionData}
                        multipleSelected={multipleSelected}
                    />
                    <div className="flex items-center justify-center text-lg ml-1">
                        <button
                            className={`text-lg transition ${
                                enableFavourite
                                    ? "hover:text-blue-lighter"
                                    : "cursor-not-allowed text-opacity-10 text-red"
                            }`}
                            onClick={handleFavourite}
                        >
                            {isFavouriteClass ? (
                                <AiFillStar className=" text-blue" />
                            ) : (
                                <AiOutlineStar />
                            )}
                        </button>
                    </div>
                </section>

                {/* display loading/error/map */}
                <section className="mt-8">
                    {regionLoading ? (
                        <Spinner />
                    ) : regionError ? (
                        <div className="text-center">{regionError}</div>
                    ) : (
                        regionData && (
                            <figure>
                                <Map
                                    data={regionData}
                                    multipleSelected={multipleSelected}
                                />
                            </figure>
                        )
                    )}
                </section>
            </main>
            <div className="fixed bottom-0 left-3">
                <button
                    className="text-blue hover:text-blue-lighter transition-all duration-200"
                    onClick={() => {
                        toggleModal(true);
                    }}
                >
                    <AiFillStar className="text-3xl" />
                </button>
            </div>
            {showModal && (
                <Modal
                    onClick={() => toggleModal(false)}
                    setSearchedValue={setSearchedValue}
                    setMultipleSelected={setMultipleSelected}
                />
            )}
        </>
    );
};

export default Statistics;
