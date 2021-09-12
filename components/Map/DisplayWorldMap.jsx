import { WorldMap } from "react-svg-worldmap";
import { useAppContext } from "../../context/appContext";
import Spinner from "../Spinner";

const DisplayWorldMap = ({ handleSearchCountryDetail }) => {
    let {
        covidData: { loading, error, data },
    } = useAppContext();

    if (loading) return <Spinner />;

    if (error) return <div>Error</div>;

    data = [...data]
        .filter(({ country }) => country !== "Global")
        .map(({ country, countryInfo: { iso2 }, deaths }) => ({
            country: iso2.toLowerCase(),
            value: deaths,
            name: country,
        }));

    return (
        <figure className="flex items-center justify-center w-full h-full overflow-hidden">
            <WorldMap
                data={data}
                size="responsive"
                color="#ff0266"
                tooltipBgColor="#faa2b0"
                tooltipTextColor="#f00"
                valueSuffix="people"
                strokeOpacity={0.3}
                // borderColor="purple"
                onClickFunction={(e, country) => {
                    handleSearchCountryDetail(country);
                }}
                backgroundColor="transparent"
            />
        </figure>
    );
};

export default DisplayWorldMap;
