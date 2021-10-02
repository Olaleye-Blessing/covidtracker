import OverviewForm from "./OverviewForm";
import OverviewList from "./OverviewList";
import ShowMap from "../../Map/ShowMap";

const OverviewMain = ({
    handleSetSearchData,
    data,
    handleSearchCountryDetail,
    mapCoords,
    mapZoom,
}) => {
    return (
        <section className="bg-opacity-10 mt-7 md:flex md:h-full">
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
                <figure className="map h-[450px] p-1 rounded-md shadow-2xl">
                    <ShowMap mapCoords={mapCoords} mapZoom={mapZoom} />
                </figure>
            </section>
        </section>
    );
};

export default OverviewMain;
