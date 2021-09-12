import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    // store favorite regions
    const [favouriteRegions, setFavouriteRegions] = useState({});
    const [regionsWithFlag, setRegionsWithFlag] = useState([]);

    // contains covid info
    const [covidData, setCovidData] = useState({
        loading: true,
        error: null,
        data: null,
    });

    useEffect(() => {
        let favorites = JSON.parse(localStorage.getItem("favouriteRegions"));
        if (!favorites) {
            favorites = {
                single: [],
                multiple: [],
            };
            localStorage.setItem("favouriteRegions", JSON.stringify(favorites));
        }
        setFavouriteRegions(favorites);
    }, []);

    const getWorldAndCountriesInfo = async () => {
        setCovidData({ ...covidData, loading: true });
        try {
            let countriesUrl = `https://disease.sh/v3/covid-19/countries`,
                worldUrl = `https://disease.sh/v3/covid-19/all`;

            let results = await Promise.all([
                fetch(countriesUrl),
                fetch(worldUrl),
            ]).then((responses) => Promise.all(responses.map((r) => r.json())));

            let [countries, world] = results;
            world = { ...world, country: "Global" };

            // filter out countries without iso2
            countries = [...countries].filter(
                ({ countryInfo: { iso2 } }) => iso2
            );

            let info = [world, ...countries];
            setCovidData({ loading: false, error: null, data: info });
        } catch (error) {
            setCovidData({ loading: false, error: error.message });
            console.log(error);
        }
    };
    useEffect(() => {
        getWorldAndCountriesInfo();
        return () => {};
    }, []);

    return (
        <AppContext.Provider
            value={{
                favouriteRegions,
                setFavouriteRegions,
                regionsWithFlag,
                setRegionsWithFlag,
                covidData,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
