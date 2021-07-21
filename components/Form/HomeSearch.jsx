import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";

const HomeSearch = ({ items, searchedValue, setSearchedValue }) => {
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [listClicked, setListClicked] = useState({
        status: false,
        value: "",
    });

    const toggleSuggestion = (val) => {
        setShowSuggestion(val);
    };

    const searchRef = useRef(null);

    // console.log(searchedValue);
    return (
        <form
            className="py-7 relative"
            onSubmit={(e) => {
                e.preventDefault();
                toggleSuggestion(false);
                searchRef.current.blur();
            }}
            onBlur={(e) => toggleSuggestion(false)}
        >
            <div className="relative flex items-center justify-center max-w-lg mx-auto">
                <input
                    ref={searchRef}
                    onChange={(e) => setSearchedValue(e.target.value)}
                    value={searchedValue}
                    type="search"
                    name="search"
                    id="search"
                    className="w-full py-2 px-2 rounded-md text-lg text-blue border-2 border-transparent shadow-inner focus:border-2 focus:border-blue focus:outline-none focus:shadow-md transition-colors duration-400 placeholder-blue-lighter"
                    placeholder="search for country/continent"
                    onFocus={(e) => toggleSuggestion(true)}
                    autoComplete="off"
                />
                <FiSearch className="absolute right-1.5 text-lg text-blue" />
            </div>
            {showSuggestion && (
                <ul className="max-w-lg mx-auto mt-3 shadow-inner h-72 overflow-x-auto">
                    {items.map(({ name, flag }) => {
                        return (
                            <li
                                className="w-full py-2 px-2 text-lg text-blue border-b-2 border-blue-lighter flex items-center justify-between"
                                onClick={(e) => {
                                    console.log("yes");
                                    setSearchedValue(name);
                                    toggleSuggestion(false);
                                }}
                                tabIndex={0}
                                key={name}
                            >
                                <span>{name}</span>
                                {flag && (
                                    <span>
                                        <Image
                                            src={flag}
                                            width={20}
                                            height={16}
                                            alt={`${name}'s flag`}
                                        />
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </form>
    );
};

export default HomeSearch;
