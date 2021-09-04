import { VscCallOutgoing } from "react-icons/vsc";
import { IoBookmarksOutline } from "react-icons/io5";

const CovidTest = () => {
    let testButoons = [
        {
            text: "Call For Test",
            icon: <VscCallOutgoing className="" />,
            extClass: "hover:bg-red-primary",
        },
        {
            text: "Book Doctor",
            icon: <IoBookmarksOutline />,
            extClass:
                "bg-red-primary hover:bg-white-primary hover:text-red-primary hover:border-opacity-0",
        },
    ];

    return (
        <section className="text-center max-w-2xl mx-auto bg-black bg-opacity-60 w-11/12 py-12 rounded-xl relative z-30 mt-24 -mb-20 px-4 sm:px-7">
            <header>
                <h2 className="">Want to test Covid-19?</h2>
            </header>
            <p className="-mt-1">
                Our goal at Our World in Data is to provide testing data
                overtime for many countries around the world.
            </p>
            <ul className="home-covid-test">
                {testButoons.map(({ text, icon, extClass }) => (
                    <li key={text} className="w-max">
                        <button
                            className={`${
                                extClass || ""
                            } flex items-center justify-center space-x-2 text-center w-full border border-red-primary rounded-3xl px-5 pt-2 pb-3 group`}
                        >
                            <span>{icon}</span>
                            <span>{text}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};
/*
<section className="mt-12 text-center max-w-2xl mx-auto bg-black bg-opacity-60 w-11/12 py-12 rounded-xl -mb-20 relative z-30">
            <header>
                <h2 className="">Want to test Covid-19?</h2>
            </header>
            <p className="-mt-1">
                Our goal at Our World in Data is to provide testing data
                overtime for many countries around the world.
            </p>
            <ul className="home-covid-test">
                {testButoons.map(({ text, icon, extClass }) => (
                    <li key={text} className="w-max">
                        <button
                            className={`${
                                extClass || ""
                            } flex items-center justify-center space-x-2 text-center w-full border border-red-primary rounded-3xl px-3 pt-2 pb-3`}
                        >
                            <span>{icon}</span>
                            <span>{text}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
*/

export default CovidTest;
