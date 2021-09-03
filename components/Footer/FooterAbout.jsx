import linkLists from "../Navbar/linkLists";
import NavLink from "../Navbar/NavLink";

const FooterAbout = () => {
    return (
        <section>
            <header>
                <h4>About</h4>
            </header>
            <ul className="space-y-2 max-w-sm">
                {linkLists.map((link) => (
                    <NavLink key={link.path} {...link} />
                ))}
            </ul>
        </section>
    );
};

export default FooterAbout;
