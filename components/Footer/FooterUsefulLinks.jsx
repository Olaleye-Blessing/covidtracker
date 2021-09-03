import usefulLinks from "./usefulLinks";

const FooterUsefulLinks = () => {
    return (
        <section>
            <header>
                <h4>Useful Links</h4>
            </header>
            <ul>
                {usefulLinks.map(({ text, href }) => (
                    <li key={text} className="mb-2">
                        <a href={href} className="hover:text-red-primary">
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default FooterUsefulLinks;
