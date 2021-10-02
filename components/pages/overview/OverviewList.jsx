const OverviewList = ({
    data,
    // handleCountryClicked,
    handleSearchCountryDetail,
}) => {
    return (
        <ul className="overflow-y-scroll h-64 mt-3 overflowBar md:h-[calc(450px-60px)]">
            {data.map(({ country, active }) => (
                <li key={country} className=" ">
                    <button
                        className="flex items-center w-full mb-2 py-1"
                        onClick={() => {
                            handleSearchCountryDetail(country);
                        }}
                    >
                        <span className="text-white-primary text-opacity-40 w-20 text-right mr-2">
                            {active}
                        </span>{" "}
                        <span className="text-white font-semibold truncate">
                            {country}
                        </span>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default OverviewList;
