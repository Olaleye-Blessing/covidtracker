const fetchMultipleData = async (arrOfItems) => {
    let responses = await Promise.allSettled(
        arrOfItems.map((item) => fetch(item).then((res) => res.json()))
    );
    return { responses };
};

export default fetchMultipleData;
