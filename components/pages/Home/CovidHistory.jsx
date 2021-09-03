import Image from "next/image";
const { AiOutlineInfoCircle } = require("react-icons/ai");

import covidHistroy1 from "./../../../assests/svg/covid-history-1.svg";

const CovidHistory = () => {
    return (
        <section className="mt-20 px-4 pt-8 sm:px-6 lg:px-28 bg-black bg-opacity-10 pb-10">
            <article className="sm:flex sm:flex-row-reverse sm:items-center sm:justify-end">
                <section className="max-w-sm md:max-w-xl">
                    <header>
                        <div className="badge">
                            <figure className="mr-1 text-base">
                                <AiOutlineInfoCircle />
                            </figure>
                            <span>About Covid19</span>
                        </div>
                        <h2 className="mt-2">What is novel coronavirus?</h2>
                    </header>
                    <p className="mb-4 first-letter:text-red-primary">
                        Coronaviruses are a group of related RNA viruses that
                        cause diseases in mammals and birds. In humans and
                        birds, they cause respiratory tract infections that can
                        range from mild to lethal. Mild illnesses in humans
                        include some cases of the common cold (which is also
                        caused by other viruses, predominantly rhinoviruses),
                        while more lethal varieties can cause SARS, MERS, and
                        COVID-19.
                    </p>
                    <p>
                        In cows and pigs they cause diarrhea, while in mice they
                        cause hepatitis and encephalomyelitis.
                    </p>
                </section>
                <figure className="max-w-sm ml-auto flex items-center justify-end sm:flex-auto sm:max-w-md sm:justify-start sm:ml-0">
                    <Image src={covidHistroy1} className="" />
                </figure>
            </article>

            <article className="sm:mt-20 sm:flex sm:items-center sm:justify-end">
                <section className="max-w-sm md:max-w-xl">
                    <header>
                        <div className="badge">
                            <figure className="mr-1 text-base">
                                <AiOutlineInfoCircle />
                            </figure>
                            <span>Covid19 Origin</span>
                        </div>
                        <h2 className="mt-2">First Instance of Covid</h2>
                    </header>
                    <p className="mb-4 first-letter:text-red-primary">
                        The most recent common ancestor (MRCA) of all
                        coronaviruses is estimated to have existed as recently
                        as 8000 BCE, although some models place the common
                        ancestor as far back as 55 million years or more,
                        implying long term coevolution with bat and avian
                        species. The most recent common ancestor of the
                        alphacoronavirus line has been placed at about 2400 BCE,
                        of the betacoronavirus line at 3300 BCE, of the
                        gammacoronavirus line at 2800 BCE, and the
                        deltacoronavirus line at about 3000 BCE.
                    </p>
                    <p>
                        Bats and birds, as warm-blooded flying vertebrates, are
                        an ideal natural reservoir for the coronavirus gene pool
                        (with bats the reservoir for alphacoronaviruses and
                        betacoronavirus – and birds the reservoir for
                        gammacoronaviruses and deltacoronaviruses). The large
                        number and global range of bat and avian species that
                        host viruses have enabled extensive evolution and
                        dissemination of coronaviruses.
                    </p>
                </section>
                <figure className="max-w-sm ml-auto flex items-center justify-end sm:flex-auto sm:max-w-md sm:justify-end sm:ml-0 ">
                    <Image src={covidHistroy1} className="" />
                </figure>
            </article>

            <article className="sm:mt-20 sm:flex sm:flex-row-reverse sm:items-center sm:justify-end">
                <section className="max-w-sm md:max-w-xl">
                    <header>
                        <div className="badge">
                            <figure className="mr-1 text-base">
                                <AiOutlineInfoCircle />
                            </figure>
                            <span>Preventive measures</span>
                        </div>
                        <h2 className="mt-2">Prevention and treatement</h2>
                    </header>
                    <p className="mb-4 first-letter:text-red-primary">
                        A number of vaccines using different methods have been
                        developed against human coronavirus SARS-CoV-2.
                        Antiviral targets against human coronaviruses have also
                        been identified such as viral proteases, polymerases,
                        and entry proteins. Drugs are in development which
                        target these proteins and the different steps of viral
                        replication. Vaccines are available for animal
                        coronaviruses IBV, TGEV, and Canine CoV, although their
                        effectiveness is limited.
                    </p>
                    <p>
                        In the case of outbreaks of highly contagious animal
                        coronaviruses, such as PEDV, measures such as
                        destruction of entire herds of pigs may be used to
                        prevent transmission to other herds.
                    </p>
                </section>
                <figure className="max-w-sm ml-auto flex items-center justify-end sm:flex-auto sm:max-w-md sm:justify-start sm:ml-0">
                    <Image src={covidHistroy1} className="" />
                </figure>
            </article>
        </section>
    );
};

export default CovidHistory;
