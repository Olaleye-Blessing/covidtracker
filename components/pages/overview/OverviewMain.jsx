import OverviewForm from "./OverviewForm";
import OverviewList from "./OverviewList";
import DisplayWorldMap from "../../Map/DisplayWorldMap";

const OverviewMain = ({
    handleSetSearchData,
    data,
    handleSearchCountryDetail,
}) => {
    return (
        // <section className="bg-black bg-opacity-10 mt-7">
        <section className="bg-opacity-10 mt-7 md:flex">
            {/* <section className="max-w-md md:max-w-xs md:flex-grow-0"> */}
            <section className="md:max-w-xs md:flex-grow-0">
                <OverviewForm
                    handleSetSearchData={handleSetSearchData}
                    handleSearchCountryDetail={handleSearchCountryDetail}
                    data={data}
                />
                <OverviewList
                    data={data}
                    handleCountryClicked={handleSetSearchData}
                    handleSearchCountryDetail={handleSearchCountryDetail}
                />
            </section>
            <section className="flex-grow mt-10 md:mt-0 ml-4 overflow-hidden">
                <DisplayWorldMap
                    handleSearchCountryDetail={handleSearchCountryDetail}
                />
            </section>
        </section>
    );
};

export default OverviewMain;
