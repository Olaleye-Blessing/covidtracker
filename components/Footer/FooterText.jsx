import HomeLogo from "../HomeLogo";
import socailLinks from "./socailLinks";

const FooterText = () => {
    return (
        <section className="space-y-3">
            <header className="">
                <HomeLogo />
            </header>
            <p className=" max-w-xs">
                Coronavirus disease(COVID-19) is an infectious disease caused by
                a new virus. The disease causes
            </p>
            <ul className="flex items-center">
                {socailLinks.map(({ icon, href, name }) => (
                    <li key={href} className="mr-2">
                        <a
                            href={href}
                            className="block w-full rounded-full p-3 bg-black-primary hover:bg-red-primary hover:text-white-primary hover:bg-opacity-70"
                        >
                            <figure>{icon}</figure>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default FooterText;
