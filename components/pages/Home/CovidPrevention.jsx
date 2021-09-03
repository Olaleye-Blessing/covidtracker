import Image from "next/image";
import { GiSpring } from "react-icons/gi";
import girlImage from "./../../../assests/svg/girl.svg";

const CovidPrevention = () => {
    let contagions = [
        {
            src: girlImage,
            heading: "Animal Contact",
            body: "Stay at home if you begin to feel unwell, even with mild symptoms nose.",
        },
        {
            src: girlImage,
            heading: "Air Transmission",
            body: "Via respiratory droplets produced when an infected person coughs or sneezes.",
        },
        {
            src: girlImage,
            heading: "Personal Contact",
            body: "Avoiding contacts and visits to medical facilities will allow",
        },
        {
            src: girlImage,
            heading: "Contaminate Object",
            body: "Call in advance and tell your provider of any recent travel or contact with travellers",
        },
    ];
    return (
        <section className="px-4 pt-20 sm:px-6 lg:px-28 md:flex md:flex-row-reverse md:gap-3 md:pt-40 md:items-center md:justify-center lg:gap-8">
            <div className="flex-grow max-w-lg md:max-w-xs self-start">
                <header>
                    <div className="badge">
                        <figure className="mr-1 text-base">
                            <GiSpring />
                        </figure>
                        <span>Covid-19 Contagion</span>
                    </div>
                    <h2 className="mt-1">How does novel coronavirus spread?</h2>
                </header>
                <p>
                    Health experts are still learning the details. Currently, it
                    is thought to spread:
                </p>
                <ul>
                    <li className="cont-style">
                        Via respiratory droplets produced when an infected
                        person coughs or sneezes.
                    </li>
                    <li className="cont-style">
                        Between people who are close contact with one
                        another(within about 6 feet)
                    </li>
                </ul>
            </div>
            <div className="flex-shrink flex-grow max-w-xl">
                <ul className="sm:flex flex-wrap items-center justify-center">
                    {contagions.map(({ heading, body, src }) => (
                        <li
                            key={heading}
                            // className="bg-black bg-opacity-10 w-full max-w-xs rounded-md text-center mx-auto px-6 pt-5 pb-8 shadow-xl odd:my-10 sm:odd:my-0 sm:even:mt-10 sm:w-2/5 md:odd:my-0 md:even:my-0"
                            className="bg-black bg-opacity-10 w-full max-w-xs rounded-md text-center mx-auto px-6 pt-5 pb-8 shadow-xl odd:my-10 sm:odd:my-0 sm:even:mt-10 sm:w-2/5 md:even:-mt-16 md:mb-20 md:odd:my-4"
                        >
                            <figure>
                                <Image src={src} width={100} height={100} />
                            </figure>
                            <h3>{heading}</h3>
                            <p>{body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CovidPrevention;
