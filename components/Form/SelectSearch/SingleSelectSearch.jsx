import { useEffect, useState } from "react";
import Select from "react-select";
import formatFormOptionLabel from "./formatFormOptionLabel";

const SingleSelectSearch = ({ items, setSearchedValue, multipleSelected }) => {
    const [disableOption, setDisableOption] = useState(false);
    const [defaultValue, setDefaultValue] = useState("");

    const handleChange = (e) => {
        setDefaultValue(e);
        if (multipleSelected) {
            setDisableOption(e.length >= 3);
            setSearchedValue(e);
        } else {
            setSearchedValue({ value: e.value, cathegory: e.cathegory });
        }
    };

    useEffect(() => {
        setDisableOption(false);
        setDefaultValue("");
    }, [multipleSelected]);

    return (
        <Select
            id="items"
            instanceId="items"
            options={items}
            onChange={handleChange}
            className="shadow-sm max-w-lg border-0 outline-none flex-shrink-1 flex-grow text-red"
            formatOptionLabel={formatFormOptionLabel}
            placeholder={
                multipleSelected
                    ? "compare up to 3 countries and/or continents..."
                    : "search for country/continent..."
            }
            isMulti={multipleSelected}
            isOptionDisabled={() => disableOption}
            closeMenuOnSelect={!multipleSelected}
            value={defaultValue}
        />
    );
};

export default SingleSelectSearch;
