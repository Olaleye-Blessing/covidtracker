const fetchSingleData = async (url, signal) => {
    try {
        let req = await fetch(url, { signal });
        let data = await req.json();

        if (!(req.status >= 200 && req.status <= 299)) throw data;
        return data;
    } catch (error) {
        if (error.name !== "AbortError") {
            throw error;
        }
    }
};

export default fetchSingleData;
