export const multipleFavoriteFound = (searchedValue, multiple) => {
    let currentRegions = searchedValue.map((region) => region.value);
    let found = multiple.findIndex((regions) => {
        let values = regions.map((reg) => reg.value);
        return currentRegions.length === values.length
            ? values.every((val) => currentRegions.includes(val))
            : false;
    });
    return { found, currentRegions };
};

export const multipleFavorites = (searchedValue, multiple) => {
    // let currentRegions = searchedValue.map((region) => region.value);
    // let found = multiple.findIndex((regions) => {
    //     let values = regions.map((reg) => reg.value);
    //     return currentRegions.length === values.length
    //         ? values.every((val) => currentRegions.includes(val))
    //         : false;
    // });
    let { found, currentRegions } = multipleFavoriteFound(
        searchedValue,
        multiple
    );

    if (found === -1) {
        multiple.push(searchedValue);
    } else {
        multiple = multiple.filter((regions) => {
            let favouriteValues = regions.map((reg) => reg.value);

            if (favouriteValues.length === currentRegions.length) {
                return !favouriteValues.every((val) =>
                    currentRegions.includes(val)
                );
            } else {
                return true;
            }
        });
    }
    return multiple;
};
