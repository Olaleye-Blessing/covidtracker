const OverviewTopThree = ({ data }) => {
    let topThree = [...data]
        .slice(1) // remove global data
        .sort((a, b) => b.cases - a.cases) // sort according to total cases
        .slice(0, 3); // get top 3

    const convertToMillions = (value) => {
        let mil = (Number(value) / 1_000_000).toFixed(2);
        return `${mil}M`;
    };

    const getPercentageOfPopulationAffected = (cases, population) => {
        let percent = Math.round((cases / population) * 100);
        return `${percent}%`;
    };

    let extraClass = [
        {
            border: "border-red-light",
            bg: "bg-red-light",
        },
        {
            border: "border-blue-lighter",
            bg: "bg-blue-lighter",
        },
        {
            border: "border-orange",
            bg: "bg-orange",
        },
    ];

    return (
        <section className="box box-border pt-4 px-4 max-w-max mx-auto md:ml-7 xl:ml-0 xl:w-full">
            <header>
                <h3>Top Countries</h3>
            </header>
            <ul className="md:flex md:items-center md:flex-wrap xl:block">
                {topThree.map(
                    (
                        { country, cases, recovered, population, active },
                        index
                    ) => (
                        <li
                            key={country}
                            className="box box-border box-hover mb-10 px-3 py-5 flex items-center justify-start md:mx-auto"
                        >
                            <figure
                                className={`text-lg w-20 h-20  flex items-center justify-center border rounded-full mr-4 relative ${extraClass[index].border}`}
                            >
                                <div
                                    className={`h-12 w-12 bg-opacity-30 flex items-center justify-center rounded-full px-2 py-2 ${extraClass[index].bg}`}
                                >
                                    {getPercentageOfPopulationAffected(
                                        active,
                                        cases
                                    )}
                                </div>
                            </figure>
                            <div>
                                <h5>{country}</h5>
                                <div>
                                    <p>Affected - {convertToMillions(cases)}</p>
                                    <p>
                                        Recovered -{" "}
                                        {convertToMillions(recovered)}
                                    </p>
                                </div>
                            </div>
                        </li>
                    )
                )}
            </ul>
        </section>
    );
};

export default OverviewTopThree;
