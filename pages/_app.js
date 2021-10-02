// import 'tailwindcss/tailwind.css'
import Layout from "../components/Layout/Layout";
import { AppWrapper } from "../context/appContext";
import "leaflet/dist/leaflet.css";
import "./../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppWrapper>
    );
}

export default MyApp;
