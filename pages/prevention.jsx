import Head from "next/head";
import Image from "next/image";

import distanceImg from "./../assests/svg/social_distancing_2g0u.svg";
import groupChatImg from "./../assests/svg/Group_chat_re_frmo.svg";
import washHandsImg from "./../assests/svg/wash_hands_nwl2.svg";

const Prevention = () => {
    let lists = [
        {
            bg_number: "01",
            header: "Wear Mask",
            text: "Wear a mask all the time",
            img: distanceImg,
        },
        {
            bg_number: "02",
            header: "Wash Hands",
            text: "Clean your hands often. Use soap and water, or alcohol-based hand rub",
            img: washHandsImg,
        },
        {
            bg_number: "03",
            header: "Social Distancing",
            text: "Maintian a safe distance",
            img: distanceImg,
        },
        {
            bg_number: "04",
            header: "Self Quarantine",
            text: "Connect Virtually. Plan dinner/play dates with friends and family",
            img: groupChatImg,
        },
    ];
    return (
        <>
            <Head>
                <title>Prevention || COVID TRACKER</title>
            </Head>
            <main className="px-4 pt-3 mt-5 footer_bg">
                <header className="text-center mb-10">
                    <h2>Preventions</h2>
                    <p className=" -mt-2">
                        Stopping the Spread starts with{" "}
                        <strong className="text-red-primary">YOU</strong>!!!
                    </p>
                </header>
                <section className="max-w-2xl mx-auto">
                    <ul>
                        {lists.map(({ text, img, header, bg_number }) => (
                            <li
                                key={bg_number}
                                className="mb-20 overview__list sm:flex sm:odd:flex-row-reverse sm:items-center"
                            >
                                <div className="mb-9">
                                    <h3 className="relative text-9xl bg-opacity-10">
                                        <p className="text-white text-opacity-10 tracking-wider">
                                            {bg_number}
                                        </p>
                                        <p className="absolute top-0 left-0 text-lg w-full h-full bg-opacity-20 flex items-center justify-start pl-5">
                                            {header}
                                        </p>
                                    </h3>
                                    <p className="max-w-xs">{text}</p>
                                </div>
                                <figure className="max-w-xs max-h-72 overflow-hidden relative ml-auto sm:w-full">
                                    <div className="absolute w-full h-4/6 top-1/2 -translate-y-1/2 bg-black bg-opacity-30"></div>
                                    <Image
                                        src={img}
                                        // height={300}
                                        layout="responsive"
                                    />
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
};

export default Prevention;
