import Spinner from "../../Spinner";

const CovidBanner = ({ loading, error, data }) => {
    if (loading || error) {
        return (
            <section className="mt-12 text-center max-w-2xl mx-auto w-11/12">
                <header>
                    <h2 className="">Global Stats</h2>
                </header>
                <section className="bg-black bg-opacity-20 mt-3 shadow-xl rounded-lg py-10 px-4 flex items-center justify-center">
                    {loading ? (
                        <Spinner />
                    ) : (
                        <div className="text-red">{error}</div>
                    )}
                </section>
            </section>
        );
    }

    let { updated } = data;
    updated = new Date(updated);

    let bannerDet = [
        { text: "Affected Country", number: data.affectedCountries },
        { text: "Confrimed Cases", number: data.cases },
        { text: "Recovered Cases", number: data.recovered, positive: true },
        { text: "WorldWide Deaths", number: data.deaths },
    ];

    return (
        <section className="mt-12 text-center max-w-2xl mx-auto w-11/12">
            <header>
                <h2 className="">Global Stats</h2>
            </header>
            <section className="bg-black bg-opacity-20 mt-3 shadow-xl rounded-lg pb-8 pt-2 px-4">
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
                    Updated{" "}
                    <span className="text-blue font-bold">
                        {updated.toLocaleDateString("en-US")}
                    </span>
                    , source{" "}
                    <a
                        href="https://disease.sh"
                        className="text-red-primary hover:underline"
                    >
                        disease.sh
                    </a>
                </p>
            </section>
        </section>
    );
};

export default CovidBanner;
