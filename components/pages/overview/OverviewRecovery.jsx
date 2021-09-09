const OverviewRecovery = ({ searchCountryDetail }) => {
    if (!searchCountryDetail) return null;
    let { cases, recovered } = searchCountryDetail;
    return (
        <section className="box box-border mb-10 px-3 py-10 text-center space-y-5 max-w-xs mx-auto md:w-full md:max-w-xs">
            <header>
                <h3>Ratio of Recovery</h3>
            </header>
            <figure className="text-lg text-black font-bold w-24 h-24  flex items-center justify-center border rounded-full mx-auto radial-gradient bg-opacity-5">
                <div>{Math.round(cases / recovered)}%</div>
            </figure>
            <div className="flex items-center justify-center">
                <p className="mr-3">
                    {Number(cases / 1_000_000).toFixed(2)}K Affected
                </p>
                <p>{Number(recovered / 1_000_000).toFixed(2)}K Recovered</p>
            </div>
        </section>
    );
};

export default OverviewRecovery;
