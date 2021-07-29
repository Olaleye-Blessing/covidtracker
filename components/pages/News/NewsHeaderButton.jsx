import ButtonText from "../../ButtonText";

const NewsHeaderButton = ({ pathClass, urlPath, activeClass, changePath }) => {
    return (
        <div className="flex items-center justify-end py-4 gap-3">
            <ButtonText
                text="all"
                extraClass={`${pathClass} ${
                    urlPath === "NewsSearchAPI"
                        ? activeClass
                        : "bg-blue-lighter"
                }`}
                onClick={() => changePath("NewsSearchAPI")}
            />
            <ButtonText
                text="trending"
                extraClass={`${pathClass} ${
                    urlPath === "TrendingNewsAPI"
                        ? activeClass
                        : "bg-blue-lighter"
                }`}
                onClick={() => changePath("TrendingNewsAPI")}
            />
        </div>
    );
};

export default NewsHeaderButton;
