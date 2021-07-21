import Head from "next/head";
import { useState } from "react";

// import HomeSearch from "../components/Form/HomeSearch";
import SingleSelectSearch from "../components/Form/SelectSearch/SingleSelectSearch";
import { BiWorld } from "react-icons/bi";

export const getStaticProps = async () => {
    try {
        let req = await fetch(`https://restcountries.eu/rest/v2/all`);
        let countries = await req.json();

        return {
            props: {
                countries,
            },
        };
    } catch (error) {
        console.log(error);
    }
};

const Home = ({ countries }) => {
    countries = countries.map(({ name, flag }) => ({
        value: name,
        label: name,
        flag,
        cathegory: "country",
    }));

    let continents = [
        { value: "Africa", label: "Africa", cathegory: "continent" },
        {
            value: "Australia-Oceania",
            label: "Australia-Oceania",
            cathegory: "continent",
        },
        { value: "Asia", label: "Asia", cathegory: "continent" },
        { value: "Europe", label: "Europe" },
        {
            value: "North America",
            label: "North America",
            cathegory: "continent",
        },
        {
            value: "South America",
            label: "South America",
            cathegory: "continent",
        },
    ];

    let items = [
        {
            label: "Worldwide",
            options: [
                {
                    label: "World",
                    "value": "World",
                    icon: <BiWorld className="text-blue text-xl" />,
                },
            ],
        },
        {
            label: "Continents",
            options: [...continents],
        },
        {
            label: "Countries",
            options: [...countries],
        },
    ];

    const [searchedValue, setSearchedValue] = useState(null);
    console.log(searchedValue);

    return (
        <>
            <Head></Head>
            <main className="px-4">
                <SingleSelectSearch
                    items={items}
                    searchedValue={searchedValue}
                    setSearchedValue={setSearchedValue}
                />
            </main>
        </>
    );
};

export default Home;
{
    /* <HomeSearch
                    items={items}
                    searchedValue={searchedValue}
                    setSearchedValue={setSearchedValue}
                /> */
}
