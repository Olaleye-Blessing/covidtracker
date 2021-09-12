const OverviewHeader = ({ searchCountryDetail }) => {
    if (!searchCountryDetail) {
        return null;
    }

    let headerData = [
        {
            text: "Aggregated Confirmed",
            number: searchCountryDetail.cases,
            extClass: "text-red-primary",
        }, //total cases
        {
            text: "Active Confirmed",
            number: searchCountryDetail.active,
            extClass: "text-orange",
        }, // active cases
        {
            text: "Recovered",
            number: searchCountryDetail.recovered,
            extClass: "text-green",
        },
        {
            text: "Death",
            number: searchCountryDetail.deaths,
            extClass: "text-red",
        },
    ];
    return (
        <header>
            <h2 className="mb-7">
                <span className="text-red-primary inline-block">Covid-19</span>{" "}
                <span>{searchCountryDetail.country} Trend</span>
            </h2>
            <section>
                <ul className="grid gap-5 grid-cols-autoFit justify-items-center items-center xl:grid-cols-4">
                    {headerData.map(({ text, number, extClass }) => (
                        <li
                            key={text}
                            className="flex flex-col items-center justify-center box px-4 py-10 max-w-xs rounded-md min-w-min w-full"
                        >
                            <span className="text-2xl text-white font-semibold text-center xl:text-lg">
                                {text}
                            </span>{" "}
                            <span
                                className={`${extClass} text-3xl font-bold xl:text-xl`}
                            >
                                {number}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        </header>
    );
};

export default OverviewHeader;
