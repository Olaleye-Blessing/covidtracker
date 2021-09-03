const CovidBanner = () => {
    let bannerDet = [
        { text: "Affected Country", number: 204 },
        { text: "Confrimed Cases", number: "1,098,848" },
        { text: "Recovered Cases", number: "226,106", positive: true },
        { text: "WorldWide Deaths", number: "58,871" },
    ];
    return (
        <section className="mt-12 text-center max-w-2xl mx-auto">
            <header>
                <h2 className="">Global Stats</h2>
            </header>
            <section className="bg-black bg-opacity-20 mt-3 shadow-xl rounded-lg pb-5">
                <ul className="flex items-center justify-center flex-wrap text-center space-x-5 py-2">
                    {bannerDet.map(({ text, number, positive }) => (
                        <li key={text} className="my-3">
                            <div
                                className={`font-bold text-lg sm:text-3xl ${
                                    positive
                                        ? " text-green"
                                        : " text-red-primary"
                                }`}
                            >
                                {number}
                            </div>
                            <div className="">{text}</div>
                        </li>
                    ))}
                </ul>
                <p className="text-center">
                    Updated less than 20 mins ago, source{" "}
                    <a
                        href="https://www.wikipedia.com"
                        className="text-red-primary hover:underline"
                    >
                        wikipedia
                    </a>
                </p>
            </section>
        </section>
    );
};

export default CovidBanner;
