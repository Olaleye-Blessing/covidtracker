import { useAppContext } from "../context/appContext";

const Favourites = () => {
    let { favouriteRegions } = useAppContext();
    console.log(favouriteRegions);
    return <div>Favourites page</div>;
};

export default Favourites;
