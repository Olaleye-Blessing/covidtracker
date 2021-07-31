import Link from "next/link";

import { RiVirusLine } from "react-icons/ri";
import { GiNewspaper } from "react-icons/gi";

const Navbar = () => {
    let navLinks = [
        {
            path: "News",
            icon: (
                <GiNewspaper className="group-hover:text-blue transition-colors duration-400" />
            ),
        },
    ];

    return (
        <nav className="flex items-center justify-between px-4 py-4 bg-white relative shadow-sm sm:shadow-md">
            <div className="text-2xl sm:text-4xl">
                <Link href="/">
                    <a className="flex items-center justify-center">
                        C
                        <RiVirusLine className="text-base sm:text-2xl text-blue" />
                        VID
                    </a>
                </Link>
            </div>
            <ul className="">
                {navLinks.map(({ path, icon }) => {
                    return (
                        <li key={path} className="group">
                            <Link href={`/${path}`}>
                                <a className="flex flex-col items-center justify-center">
                                    <div>{icon}</div>
                                    <div className="text-blue">{path}</div>
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
