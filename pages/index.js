import Head from "next/head";
import { useEffect, useState } from "react";

import SingleSelectSearch from "../components/Form/SelectSearch/SingleSelectSearch";
import { VscCompareChanges } from "react-icons/vsc";

import { continents } from "../utility/listOfContinents";
import Map from "../components/Map/Map";
import Spinner from "../components/Spinner";
import fetchMultipleData from "../utility/fetchMultipleData";
import determineRegionUrl from "../utility/determineRegionUrlPath";
import worldWideLabelAndOption from "../utility/worldWideLabelAndOption";
import fetchSingleData from "../utility/fetchSingleData";

export const getStaticProps = async () => {
    try {
        let allCountriesUrl = `https://restcountries.eu/rest/v2/all`,
            worldCovidInfo = `https://disease.sh/v3/covid-19/all`;

        let results = await Promise.all([
            fetch(allCountriesUrl),
            fetch(worldCovidInfo),
        ]).then((responses) => Promise.all(responses.map((r) => r.json())));

        let [countries, worldInfo] = results;

        return {
            props: {
                countries,
                worldInfo,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                error,
            },
        };
    }
};

const Home = ({ countries, worldInfo }) => {
    const [regionLoading, setRegionLoading] = useState(false);
    const [regionError, setRegionError] = useState(null);
    const [searchedValue, setSearchedValue] = useState({ value: "World" });
    const [multipleSelected, setMultipleSelected] = useState(false);

    // data to display
    // null for initial load
    // undefined for not found data
    const [regionData, setRegionData] = useState(null);

    countries = countries.map(({ name, flag }) => ({
        value: name,
        label: name,
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
            options: [...countries],
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
                let { success, err } = await fetchMultipleData(urls);
                setRegionDetails(success);
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
    }, [multipleSelected]);

    return (
        <>
            <Head></Head>
            <main className="px-4 mt-7 ">
                <section className="mx-auto flex justify-center">
                    <div className="flex  items-center justify-center text-lg mr-1">
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
        </>
    );
};

export default Home;
