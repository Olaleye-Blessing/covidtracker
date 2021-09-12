import Image from "next/image";

const News = ({ news }) => {
    let { title, description, image, url } = news;
    let { thumbnail } = image;

    const displayDescription = () => {
        return description.length > 230
            ? `${description.slice(0, 230)}...`
            : description;
    };

    return (
        <li className="max-w-md sm:w-full mx-auto mt-4 border border-blue-lighter relative overflow-hidden rounded-lg">
            <a
                href={url}
                title="read full news"
                target="_blank"
                className="block w-full h-full"
                rel="noreferrer noopener"
            >
                {thumbnail && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={thumbnail}
                            alt={`news cover image`}
                            layout="fill"
                        />
                    </div>
                )}
                <div className="z-20 relative pb-8 pt-8 px-3 text-white flex flex-col gap-4 text-center h-full bg-black-primary bg-opacity-70">
                    <h3 className="font-bold text-xl tracking-wider text-blue-lighter">
                        {title}
                    </h3>
                    {description && (
                        <p className=" font-semibold tracking-wide max-w-sm mx-auto">
                            {displayDescription()}
                        </p>
                    )}
                </div>
            </a>
        </li>
    );
};

export default News;
