import ShowMap from "../../../Map/ShowMap";

const CovidMap = () => {
    return (
        <figure className="map p-1 rounded-md shadow-2xl bg-red-primary bg-opacity-20  h-[450px] lg:h-[700px] mt-10">
            <ShowMap />
        </figure>
    );
};

export default CovidMap;
