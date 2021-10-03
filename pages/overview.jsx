import Head from "next/head";
import { useEffect, useState } from "react";
import OverviewHeader from "../components/pages/overview/OverviewHeader";
import OverviewMain from "../components/pages/overview/OverviewMain";
import OverviewRecovery from "../components/pages/overview/OverviewRecovery";
import OverviewTopThree from "../components/pages/overview/OverviewTopThree";
import { useAppContext } from "../context/appContext";
import Spinner from "./../components/Spinner";

const Overview = () => {
    let {
        covidData: { loading, error, data },
    } = useAppContext();

    const [searchData, setSearchData] = useState("");
    const [searchCountryDetail, setSearchCountryDetail] = useState(null);

    const [mapCoords, setMapCoords] = useState([21.5, -80]);
    // const [mapCoords, setMapCoords] = useState([51.505, -0.09]);
    const [mapZoom, setMapZoom] = useState(5);

    useEffect(() => {
        if (data === null) {
            return;
        }
        console.log("changed....");
        setSearchCountryDetail(data[0]);
    }, [data]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    if (error) {
        return <div className="text-red text-center">{error}</div>;
    }

    const handleSearchCountryDetail = (clickedValue) => {
        if (!clickedValue) clickedValue = searchData;

        let searched = [...data].find(
            ({ country }) =>
                country.toLowerCase() === clickedValue.toLowerCase()
        );

        if (!searched) return;
        setSearchCountryDetail(searched);
        let {
            countryInfo: { lat, long },
        } = searched;
        setMapCoords([lat, long]);
        setMapZoom(4);
    };

    return (
        <>
            <Head>
                <title>Overview || COVID TRACKER</title>
            </Head>
            <div className="mb-10 xl:flex">
                <main className="px-4 pt-8 sm:px-6 xl:w-full flex flex-col xl:sticky xl:top-0 xl:left-0 xl:self-start">
                    <OverviewHeader searchCountryDetail={searchCountryDetail} />
                    <OverviewMain
                        data={data}
                        handleSetSearchData={(country) =>
                            setSearchData(country)
                        }
                        searchData={searchData}
                        handleSearchCountryDetail={handleSearchCountryDetail}
                        mapCoords={mapCoords}
                        mapZoom={mapZoom}
                    />
                </main>
                <aside className="px-4 pt-8 sm:px-6 lg:px-28 sm:flex sm:items-start xl:block xl:px-4 xl:w-full xl:max-w-max">
                    <OverviewRecovery
                        searchCountryDetail={searchCountryDetail}
                    />
                    <OverviewTopThree data={data} />
                </aside>
            </div>
        </>
    );
};

export default Overview;
