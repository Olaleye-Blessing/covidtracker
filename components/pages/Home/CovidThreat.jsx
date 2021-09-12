import { VscWarning } from "react-icons/vsc";
import CovidMap from "./Map/CovidMap";

const CovidThreat = () => {
    return (
        <section className="px-4 pt-20 pb-20 sm:px-6 lg:px-28 lg:gap-8 text-center bg-black bg-opacity-10">
            <header className="mb-4">
                <div className="badge mx-auto">
                    <figure className="mr-1 text-base">
                        <VscWarning />
                    </figure>
                    <span>Covid-19 Threat</span>
                </div>
                <h2 className="mt-3">More than 59k died in Covid-19</h2>
                <p className="max-w-xl mx-auto">
                    There are no medications specifically approved for
                    coronavirus.
                </p>
                <p>Most people with mild coronavirus.</p>
            </header>
            <CovidMap />
        </section>
    );
};

export default CovidThreat;
