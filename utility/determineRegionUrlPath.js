const determineRegionUrlPath = (region) => {
    let { value, cathegory } = region;

    if (value === "World") {
        return `all`;
    } else if (cathegory === "continent") {
        return `continents/${value}`;
    } else if (cathegory === "country") {
        return `countries/${value}`;
    }
};

export default determineRegionUrlPath;
