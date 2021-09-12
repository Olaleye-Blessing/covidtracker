import Head from "next/head";

import CovidBanner from "../components/pages/Home/CovidBanner";
import CovidHistory from "../components/pages/Home/CovidHistory";
import CovidContagion from "../components/pages/Home/CovidContagion";
import CovidThreat from "../components/pages/Home/CovidThreat";
import CovidPrevention from "../components/pages/Home/CovidPrevention";
import HomeHeader from "../components/pages/Home/HomeHeader";
import CovidTest from "../components/pages/Home/CovidTest";
import { useEffect, useState } from "react";

const Home = () => {
    // https://restcountries.eu/rest/v2/all
    const [worldInfo, setWorldInfo] = useState({
        loading: true,
        error: null,
        data: null,
    });

    const [countriesData, setCountriesData] = useState({
        loading: true,
        error: null,
        data: null,
    });

    const fetchWorldData = async (signal) => {
        try {
            let req = await fetch("https://disease.sh/v3/covid-19/all", {
                signal,
            });
            let res = await req.json();
            if (!req.ok) throw res;
            setWorldInfo({ loading: false, error: null, data: res });
        } catch (error) {
            if (error.name !== "AbortError") {
                setWorldInfo({
                    data: null,
                    error: error.message || error,
                    loading: false,
                });
            }
        }
    };

    const fetchCountriesData = async (signal) => {
        setCountriesData({ ...countriesData, loading: true });
        let allCountriesUrl = `https://restcountries.eu/rest/v2/all`,
            worldCovidInfo = `https://disease.sh/v3/covid-19/all`;
        try {
        } catch (error) {}
    };

    useEffect(() => {
        let abortFetch = new AbortController();
        let signal = abortFetch.signal;
        fetchWorldData(signal);
        return () => abortFetch.abort();
    }, []);

    return (
        <>
            <Head></Head>
            <main className="home_bg_top ">
                <HomeHeader />
                <CovidBanner {...worldInfo} />
                <CovidHistory />
                <CovidContagion />
                <CovidThreat />
                <CovidPrevention />
                <CovidTest />
            </main>
        </>
    );
};

export default Home;
