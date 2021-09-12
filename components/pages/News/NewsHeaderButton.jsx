import ButtonText from "../../ButtonText";

const NewsHeaderButton = ({ urlPath, changePath }) => {
    let paths = [
        { text: "All", path: "NewsSearchAPI" },
        { text: "Trending", path: "TrendingNewsAPI" },
    ];

    return (
        <div className="flex items-center justify-end py-4 gap-3">
            {paths.map(({ text, path }) => (
                <ButtonText
                    key={text}
                    text={text}
                    onClick={() => changePath(path)}
                    extraClass={`bg-red-primary bg-opacity-5 hover:text-opacity-70 hover:bg-opacity-20 ${
                        urlPath === path ? "text-red-primary" : "text-white"
                    }`}
                />
            ))}
        </div>
    );
};

export default NewsHeaderButton;
