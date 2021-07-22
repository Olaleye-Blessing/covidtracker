const fetchMultipleData = async (arrOfItems) => {
    let success = [],
        err = [];
    let responses = await Promise.allSettled(
        arrOfItems.map((item) => fetch(item).then((res) => res.json()))
    );
    responses.forEach(({ status, value, reason }) => {
        let { message } = value;

        status === "fulfilled"
            ? message
                ? err.push(message) // push country to error if country is not found
                : success.push(value)
            : err.push(reason);
    });
    console.log(err);
    return { success, err };
};

export default fetchMultipleData;
