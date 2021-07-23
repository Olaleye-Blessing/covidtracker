import Head from "next/head";
import { Toaster } from "react-hot-toast";

import Navbar from "./../Navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Covid details for countries, continents and the world in general"
                />
                {/* <meta name="revised" content="7/2/2021" /> */}
                <meta name="Authur" content="Olaleye Blessing" />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset = UTF-8"
                />
                <title>COVID TRACKER</title>
            </Head>
            <>
                <Toaster
                    toastOptions={{
                        error: {
                            style: {
                                background: "#e99",
                                color: "#fff",
                            },
                        },
                    }}
                />
                <Navbar />
                <>{children}</>
                {/* <Footer /> */}
            </>
        </>
    );
};

export default Layout;
