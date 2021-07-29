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
                let { value: news, totalCount: totalPages } = result;
                setNews((prevNews) => [...prevNews, ...news]);
                setTotalPages(totalPages);
                setLoadingMore(false);
                setInitialLoading(false);
            });
    }, [urlPath, currentPage]);

    const handleLoadMore = () => {
        setCurrentPage((prev) => prev + 1);
        setLoadingMore(true);
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
    }, [urlPath]);

    let activeClass = "bg-blue text-white font-semibold";
    let pathClass = `shadow-inner hover:text-white transition duration-500`;

    return (
        <>
            <Head></Head>
            <main className="mt-1 px-4">
                <NewsHeaderButton
                    pathClass={pathClass}
                    urlPath={urlPath}
                    activeClass={activeClass}
                    changePath={changePath}
                />
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
                                    extraClass={`flex items-center justify-center gap-2 bg-blue-lighter ${
                                        loadingMore && "cursor-not-allowed"
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
                    </>
                )}
            </main>
        </>
    );
};

export default News;
