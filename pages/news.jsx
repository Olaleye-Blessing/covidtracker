import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

import ButtonText from "../components/ButtonText";
import Spinner from "../components/Spinner";
import newsUrl from "../utility/News/NewsUrl";
import NewsLists from "../components/News/NewsLists";
import NewsHeaderButton from "../components/pages/News/NewsHeaderButton";

const News = () => {
    // TrendingNewsAPI NewsSearchAPI

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [urlPath, setUrlPath] = useState("NewsSearchAPI");
    const [news, setNews] = useState([]);
    const [loadingMore, setLoadingMore] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [newsError, setNewsError] = useState(null);
    let itemsPerPage = 20;

    const fetchData = useCallback(() => {
        let url = newsUrl(urlPath, currentPage, itemsPerPage);
        let newsHeaders = new Headers();
        newsHeaders.append(
            "x-rapidapi-key",
            "950961db9dmsh0116368ea14bbdep14bc4fjsnf3335b4bb274"
        );
        newsHeaders.append(
            "x-rapidapi-host",
            "contextualwebsearch-websearch-v1.p.rapidapi.com"
        );

        fetch(url, {
            method: "GET",
            headers: newsHeaders,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.messages) {
                    setInitialLoading(false);
                    return setNewsError(
                        "Internal server error!! Please try later"
                    );
                }
                let { value: news, totalCount: totalPages } = result;
                setNews((prevNews) => [...prevNews, ...news]);
                setTotalPages(totalPages);
                setLoadingMore(false);
                setInitialLoading(false);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [urlPath, currentPage]);

    const handleLoadMore = () => {
        setCurrentPage((prev) => prev + 1);
        setLoadingMore(true);
        setNewsError(null);
    };

    const changePath = (path) => {
        setUrlPath(path);
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    useEffect(() => {
        setNews([]);
        setCurrentPage(1);
        setTotalPages(null);
        setLoadingMore(false);
        setInitialLoading(true);
        setNewsError(null);
    }, [urlPath]);

    return (
        <>
            <Head>
                <title>NEWS || COVID TRACKER</title>
            </Head>
            <main className="mt-1 px-4">
                <NewsHeaderButton urlPath={urlPath} changePath={changePath} />
                {initialLoading && <Spinner extraClass="mt-7" />}
                {!initialLoading && (
                    <>
                        <section className="mb-8">
                            {news.length > 0 && <NewsLists news={news} />}
                        </section>
                        {totalPages && (
                            <div className="flex items-center justify-center mb-8">
                                <ButtonText
                                    text={`${
                                        loadingMore ? "loading..." : "load more"
                                    }`}
                                    extraClass={`flex items-center justify-center gap-2 bg-red-primary ${
                                        loadingMore &&
                                        "cursor-not-allowed bg-opacity-10"
                                    }`}
                                    onClick={handleLoadMore}
                                    disabled={loadingMore}
                                >
                                    {loadingMore && (
                                        <Spinner
                                            width="w-4"
                                            height="h-4"
                                            border="border-2"
                                            borderTop="border-t-2"
                                            extraClass="mt-1"
                                        />
                                    )}
                                </ButtonText>
                            </div>
                        )}
                        {newsError && (
                            <div className="text-red-primary text-center mb-2">
                                {newsError}
                            </div>
                        )}
                    </>
                )}
            </main>
        </>
    );
};

export default News;
