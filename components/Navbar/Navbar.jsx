// import Link from "next/link";

// import { RiVirusLine } from "react-icons/ri";
// import { GiNewspaper } from "react-icons/gi";

import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import HomeLogo from "../HomeLogo";
import linkLists from "./linkLists";
import NavLink from "./NavLink";

const Navbar = () => {
    let pathname = useRouter().pathname;
    let navListRef = useRef();

    useEffect(() => {
        closeMenu();
    }, [pathname]);

    const closeMenu = () => {
        let navlist = navListRef.current;

        navlist.classList.add("h-0");
        navlist.classList.remove(
            "h-full",
            "border-r-2",
            "border-white-primary",
            "border-opacity-25",
            "pt-4"
        );
    };

    const toggleNav = () => {
        let navlist = navListRef.current;
        if (navlist.classList.contains("h-0")) {
            navlist.classList.remove("h-0");
            navlist.classList.add(
                "h-full",
                "border-opacity-25",
                "border-r-2",
                "border-white-primary",
                "pt-4"
            );
        } else {
            closeMenu();
        }
    };

    return (
        <nav className="px-2 py-2 flex items-center justify-between relative shadow-lg sm:py-3 sm:px-8 lg:px-20 xl:px-32">
            <Link href="/">
                <a>
                    <HomeLogo />
                </a>
            </Link>
            <button
                className="text-red-primary text-2xl hover:text-opacity-70 sm:hidden"
                onClick={toggleNav}
            >
                <GiHamburgerMenu className="fill-current" />
            </button>
            <ul
                ref={navListRef}
                className="bg-black-primary bg-opacity-95 fixed top-12 left-0 h-0 overflow-hidden w-full max-w-xs pl-2 transition-all duration-200 z-40 sm:static sm:w-auto sm:h-auto sm:flex sm:bottom-0 sm:p-0 sm:max-w-none sm:items-center sm:justify-end sm:gap-2 sm:border-r-0 md:gap-7"
            >
                {linkLists.map((link) => {
                    return <NavLink key={link.path} {...link} />;
                })}
            </ul>
        </nav>
    );
    // let navLinks = [
    //     {
    //         path: "News",
    //         icon: (
    //             <GiNewspaper className="group-hover:text-blue transition-colors duration-400" />
    //         ),
    //     },
    // ];

    // return (
    //     <nav className="flex items-center justify-between px-4 py-4 bg-white relative shadow-sm sm:shadow-md">
    //         <div className="text-2xl sm:text-4xl">
    //             <Link href="/">
    //                 <a className="flex items-center justify-center">
    //                     C
    //                     <RiVirusLine className="text-base sm:text-2xl text-blue" />
    //                     VID
    //                 </a>
    //             </Link>
    //         </div>
    //         <ul className="">
    //             {navLinks.map(({ path, icon }) => {
    //                 return (
    //                     <li key={path} className="group">
    //                         <Link href={`/${path}`}>
    //                             <a className="flex flex-col items-center justify-center">
    //                                 <div>{icon}</div>
    //                                 <div className="text-blue">{path}</div>
    //                             </a>
    //                         </Link>
    //                     </li>
    //                 );
    //             })}
    //         </ul>
    //     </nav>
    // );
};

export default Navbar;
