import Link from "next/link";
import HomeLogo from "../HomeLogo";
import FooterAbout from "./FooterAbout";
import FooterContactUs from "./FooterContactUs";
import FooterText from "./FooterText";
import FooterUsefulLinks from "./FooterUsefulLinks";
import socailLinks from "./socailLinks";

const Footer = () => {
    return (
        <footer className="footer_bg bg-blue bg-opacity-20 pt-28 pb-9 px-2 sm:px-8 lg:px-20 xl:px-32">
            <div className="border-b border-white-primary border-opacity-20 grid grid-cols-autoFit gap-x-4 gap-y-6 items-start justify-center pb-3">
                <FooterText />
                <FooterAbout />
                <FooterUsefulLinks />
                <FooterContactUs />
            </div>
            <div className="flex items-center justify-between flex-wrap space-y-5 pt-7">
                <div>2021 Ncov Ltd. All rights preserevd</div>
                <ul className="flex items-center justify-around space-x-3">
                    <li className="">
                        <Link href="/">
                            <a className="underline hover:text-red-primary">
                                terms and conditions
                            </a>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="underline hover:text-red-primary"
                        >
                            Report an issue about site?
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
