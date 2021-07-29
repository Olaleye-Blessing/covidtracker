import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    // store favorite regions
    const [favouriteRegions, setFavouriteRegions] = useState({});

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

    return (
        <AppContext.Provider value={{ favouriteRegions, setFavouriteRegions }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);