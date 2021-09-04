import Head from "next/head";

import CovidBanner from "../components/pages/Home/CovidBanner";
import CovidHistory from "../components/pages/Home/CovidHistory";
import CovidContagion from "../components/pages/Home/CovidContagion";
import CovidThreat from "../components/pages/Home/CovidThreat";
import CovidPrevention from "../components/pages/Home/CovidPrevention";
import HomeHeader from "../components/pages/Home/HomeHeader";
import CovidTest from "../components/pages/Home/CovidTest";

const Home = () => {
    return (
        <>
            <Head></Head>
            <main className="home_bg_top ">
                <HomeHeader />
                <CovidBanner />
                <CovidHistory />
                <CovidContagion />
                <CovidThreat />
                <CovidPrevention />
                <CovidTest />
            </main>
        </>
    );
};

export default Home;
