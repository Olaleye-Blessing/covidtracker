import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { RiVirusLine } from "react-icons/ri";
import { VscCompareChanges } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    let { pathname } = useRouter();

    const [showMobileNav, setShowMobileNav] = useState(false);

    let navLinks = [
        {
            path: "News",
            icon: (
                <GiNewspaper className="group-hover:text-blue transition-colors duration-400" />
            ),
        },
        {
            path: "Favourites",
            icon: <AiOutlineStar className="group-hover:text-blue" />,
        },
    ];

    const listRef = useRef(null);
    const btnRef = useRef(null);

    const toggleNav = (e) => {
        setShowMobileNav((prev) => !prev);
        listRef.current.classList.toggle("left-0");
        listRef.current.classList.toggle("-left-full");
    };

    useEffect(() => {
        setShowMobileNav(false);
        if (listRef.current.classList.contains("left-0")) {
            listRef.current.classList.remove("left-0");
        }
        if (!listRef.current.classList.contains("-left-full")) {
            listRef.current.classList.add("-left-full");
        }
    }, [pathname]);

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
            <button
                ref={btnRef}
                className={`text-2xl ${
                    showMobileNav ? "text-red " : "text-blue"
                } sm:hidden`}
                onClick={toggleNav}
            >
                {showMobileNav ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </button>
            <ul
                ref={listRef}
                className="absolute top-16 -left-full w-full z-50 bg-white sm:static sm:flex sm:justify-end sm:gap-4 sm:z-auto"
            >
                {navLinks.map(({ path, icon }) => {
                    return (
                        <li
                            key={path}
                            className="group border-t border-blue py-4 sm:py-0 sm:border-0"
                        >
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
