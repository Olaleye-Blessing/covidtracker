import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Index";

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
                    name="keywords"
                    content="Covid, Covid19, covid news, covid prevention, covid symptoms, covid cases, covid deaths"
                />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset = UTF-8"
                />
                <title>COVID TRACKER</title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
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
                <Footer />
            </>
        </>
    );
};

export default Layout;
