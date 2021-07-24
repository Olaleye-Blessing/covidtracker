import News from "./News";

const NewsList = ({ news }) => {
    return (
        <ul className="sm:grid sm:grid-cols-auto-fit-news sm:gap-4">
            {news.map((n) => (
                <News key={n.id} news={n} />
            ))}
        </ul>
    );
};

export default NewsList;
