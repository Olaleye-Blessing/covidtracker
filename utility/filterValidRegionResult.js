const filterValidRegionResult = (names, responses) => {
    let valid = [],
        invalid = [];
    responses.forEach(({ status, value }, index) => {
        let { message } = value;

        message
            ? invalid.push(message.replace("Country", names[index]))
            : valid.push(value);
    });
    return { valid, invalid };
};

export default filterValidRegionResult;
