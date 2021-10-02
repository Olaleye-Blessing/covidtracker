// import { WorldMap } from "react-svg-worldmap";
import { useAppContext } from "../../context/appContext";
import Spinner from "../Spinner";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { showCirclesOnMap } from "../../utility/Map/showCirclesOnMap";

function SetViewOnClick({ coords, zoom }) {
    const map = useMap();
    // map.setView(coords, map.getZoom());
    map.setView(coords, zoom);

    return null;
}

const DisplayWorldMap = ({ mapCoords, mapZoom }) => {
    console.log({ mapCoords, mapZoom });
    let {
        covidData: { loading, error, data },
    } = useAppContext();

    if (loading) return <Spinner />;

    if (error) return <div>Error</div>;

    data = data.slice(1);

    // console.log(data);
    return (
        <>
            <MapContainer
                center={mapCoords}
                zoom={mapZoom}
                scrollWheelZoom={false}
                // className=""
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SetViewOnClick coords={mapCoords} zoom={mapZoom} />
                {showCirclesOnMap(data)}
            </MapContainer>
        </>
    );
    // data = [...data]
    //     .filter(({ country }) => country !== "Global")
    //     .map(({ country, countryInfo: { iso2 }, deaths }) => ({
    //         country: iso2.toLowerCase(),
    //         value: deaths,
    //         name: country,
    //     }));

    // return (
    //     <figure className="flex items-center justify-center w-full h-full overflow-hidden">
    //         <WorldMap
    //             data={data}
    //             size="responsive"
    //             color="#ff0266"
    //             tooltipBgColor="#faa2b0"
    //             tooltipTextColor="#f00"
    //             valueSuffix="people"
    //             strokeOpacity={0.3}
    //             // borderColor="purple"
    //             onClickFunction={(e, country) => {
    //                 handleSearchCountryDetail(country);
    //             }}
    //             backgroundColor="transparent"
    //         />
    //     </figure>
    // );
};

DisplayWorldMap.defaultProps = {
    mapCoords: [21.5, -80],
    mapZoom: 5,
};

export default DisplayWorldMap;
