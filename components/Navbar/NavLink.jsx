import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const NavLink = ({ path, icon, activeIcon }) => {
    let router = useRouter();

    // console.log(router.pathname);
    let activeLink =
        router.pathname === `/${path}`
            ? "text-red-primary"
            : "hover:text-opacity-60";
    return (
        <li>
            <Link href={`/${path}`}>
                {/* <Link href={`${path === "overview" ? "/" : `/${path}`}`}> */}
                <a
                    className={`flex items-center justify-start w-11/12 mb-4 text-lg hover:text-red-primary ${activeLink} sm:mb-0`}
                >
                    <figure className="pt-0 mr-3 sm:mr-0 sm:pr-1">
                        {activeLink ? activeIcon : icon}
                    </figure>
                    {`${path[0].toUpperCase()}${path.slice(1)}`}
                </a>
            </Link>
        </li>
    );
};

export default NavLink;
