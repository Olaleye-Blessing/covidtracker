const newsUrl = (path, currentPage, itemsPerPage) => {
    let url = new URL(
        `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/`
    );
    url.pathname += path;
    url.searchParams.set("pageSize", itemsPerPage);
    url.searchParams.set("pageNumber", currentPage);
    url.searchParams.set("withThumbnails", true);
    if (path === "NewsSearchAPI") {
        url.searchParams.set("q", "covid");
        url.searchParams.set("autoCorrect", true);
        url.searchParams.set("fromPublishedDate", null);
        url.searchParams.set("toPublishedDate", null);
    }
    return url;
};

export default newsUrl;
