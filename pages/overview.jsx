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

    useEffect(() => {
        if (data === null) {
            return;
        }
        console.log("changed....");
        setSearchCountryDetail(data[0]);
    }, [data]);

    if (loading) {
        return (
            <div>
                <Spinner />
            </div>
        );
    }

    if (error) {
        return <div className="text-red text-center">{error}</div>;
    }

    const handleSearchCountryDetail = (clickedValue) => {
        if (!clickedValue) clickedValue = searchData;

        // console.log(data);
        let searched = [...data].find(
            ({ country }) =>
                country.toLowerCase() === clickedValue.toLowerCase()
        );
        // console.log(searched);
        if (!searched) return;
        setSearchCountryDetail(searched);
    };

    return (
        <div className="mb-10 xl:flex">
            <main className="px-4 pt-8 sm:px-6 xl:w-full">
                <OverviewHeader searchCountryDetail={searchCountryDetail} />
                <OverviewMain
                    data={data}
                    handleSetSearchData={(country) => setSearchData(country)}
                    searchData={searchData}
                    handleSearchCountryDetail={handleSearchCountryDetail}
                />
            </main>
            <aside className="px-4 pt-8 sm:px-6 lg:px-28 sm:flex sm:items-start xl:block xl:px-4 xl:w-full xl:max-w-max">
                <OverviewRecovery searchCountryDetail={searchCountryDetail} />
                <OverviewTopThree data={data} />
            </aside>
        </div>
    );
};

export default Overview;
