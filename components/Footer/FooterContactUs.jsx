import contactus from "./contactus";

const FooterContactUs = () => {
    return (
        <section>
            <header>
                <h4>Contact Us</h4>
            </header>
            <ul>
                {contactus.map(({ text, icon }) => (
                    <li
                        key={text}
                        className="flex items-start justify-start mb-4"
                    >
                        <figure className="bg-black-primary rounded-full p-3 mr-1">
                            {icon}
                        </figure>
                        <p className=" whitespace-pre-line">{text}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default FooterContactUs;
