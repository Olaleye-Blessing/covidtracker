import Image from "next/image";
import { useState } from "react";
import Select from "react-select";

const SingleSelectSearch = ({ items, setSearchedValue }) => {
    const handleChange = ({ value, cathegory }) => {
        setSearchedValue({ value, cathegory });
    };

    const formatOptionLabel = ({ label, flag, icon }) => {
        return (
            <div className="flex items-center justisfy-start">
                {flag && (
                    <figure className="mr-3 pt-1">
                        <Image
                            src={flag}
                            width={20}
                            height={16}
                            alt={`${label}'s flag`}
                        />
                    </figure>
                )}
                {icon && <figure className="mr-3 pt-1">{icon}</figure>}
                <div>{label}</div>
            </div>
        );
    };

    return (
        <Select
            id="items"
            instanceId="items"
            options={items}
            onChange={handleChange}
            className="mt-7 shadow-sm max-w-lg mx-auto border-0 outline-none"
            formatOptionLabel={formatOptionLabel}
            placeholder="search for country/continent..."
        ></Select>
    );
};

export default SingleSelectSearch;
