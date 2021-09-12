import { BiSearchAlt } from "react-icons/bi";
const OverviewForm = ({
    handleSetSearchData,
    searchData,
    handleSearchCountryDetail,
    data,
}) => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSearchCountryDetail(searchData);
            }}
        >
            <div className="relative">
                <span
                    className="absolute left-3 top-1/2 text-blue text-opacity-40"
                    style={{ transform: "translateY(-50%)" }}
                >
                    <BiSearchAlt />
                </span>
                <input
                    value={searchData}
                    onChange={(e) => handleSetSearchData(e.target.value)}
                    className="outline-none transition duration-200 block w-full rounded-3xl pt-1 pb-2 text-white-primary pl-8 pr-5 bg-white-primary bg-opacity-5 hover:bg-opacity-10 focus:ring-1 focus:ring-red-primary focus:ring-opacity-30 focus:ring-offset-red-primary"
                    type="search"
                    name="search"
                    id="search"
                    list="countries"
                    autoComplete="off"
                />
                <datalist id="countries" className="">
                    {data.map(({ country }) => (
                        <option value={country} key={country} />
                    ))}
                </datalist>
            </div>
        </form>
    );
};

export default OverviewForm;
