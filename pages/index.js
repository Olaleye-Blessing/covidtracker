import Head from "next/head";
import { useEffect, useState } from "react";

import SingleSelectSearch from "../components/Form/SelectSearch/SingleSelectSearch";
import { BiWorld } from "react-icons/bi";

import { continents } from "../utility/listOfContinents";
import Map from "../components/Map/Map";
import Spinner from "../components/Spinner";

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
    // console.log(error);
    // console.log(countries, worldInfo);

    const [regionLoading, setRegionLoading] = useState(false);
    const [regionError, setRegionError] = useState(null);
    const [regionData, setRegionData] = useState(null); // data to display

    countries = countries.map(({ name, flag }) => ({
        value: name,
        label: name,
        flag,
        cathegory: "country",
    }));

    let items = [
        {
            label: "Worldwide",
            options: [
                {
                    label: "World",
                    "value": "World",
                    icon: <BiWorld className="text-blue text-xl" />,
                },
            ],
        },
        {
            label: "Continents",
            options: [...continents],
        },
        {
            label: "Countries",
            options: [...countries],
        },
    ];

    // const [searchedValue, setSearchedValue] = useState(null);
    const [searchedValue, setSearchedValue] = useState({ value: "World" });

    // set all detials related to region at once
    const setRegionDetails = (data = null, loading = false, err = null) => {
        setRegionLoading(loading);
        setRegionError(err);
        setRegionData(data);
    };

    useEffect(() => {
        if (!regionData) {
            setRegionData(worldInfo);
            return;
        }

        let regionAbort = new AbortController();
        let regionSignal = regionAbort.signal;

        const fetchRegionData = async () => {
            let url = new URL(`https://disease.sh/v3/covid-19/`);
            let { value, cathegory } = searchedValue;

            if (value === "World") {
                url.pathname += `all`;
            } else if (cathegory === "continent") {
                url.pathname += `continents/${value}`;
            } else if (cathegory === "country") {
                url.pathname += `countries/${value}`;
            }

            // setRegionLoading(true);
            setRegionDetails(null, true);

            try {
                let req = await fetch(url, { signal: regionSignal });
                let data = await req.json();
                setRegionDetails(data);
            } catch (error) {
                console.log(error);
                if (error.name !== "AbortError") {
                    setRegionDetails(null, false, error.message);
                } else {
                    console.log("Aborted");
                }
            }
        };

        fetchRegionData();
        return () => regionAbort.abort();
    }, [searchedValue]);

    return (
        <>
            <Head></Head>
            <main className="px-4">
                <SingleSelectSearch
                    items={items}
                    searchedValue={searchedValue}
                    setSearchedValue={setSearchedValue}
                    defaultValue=""
                />

                {regionLoading && <Spinner margin="mt-8" />}
                {regionError && <div>Error...</div>}
                {regionData && (
                    <div>
                        <Map data={regionData} />
                    </div>
                )}
            </main>
        </>
    );
};

export default Home;
