export const singleFavouriteFound = (searchedValue, single) => {
    let { value: searchedRegion } = searchedValue;
    let found = single.findIndex(
        ({ value: region }) => region === searchedRegion
    );
    return { found, searchedRegion };
};

export const singleFavourite = (searchedValue, single) => {
    // let { value: searchedRegion } = searchedValue;
    // let found = single.findIndex(
    //     ({ value: region }) => region === searchedRegion
    // );
    let { found, searchedRegion } = singleFavouriteFound(searchedValue, single);

    found === -1
        ? single.push(searchedValue)
        : (single = single.filter(
              ({ value: region }) => region !== searchedRegion
          ));

    return single;
};
