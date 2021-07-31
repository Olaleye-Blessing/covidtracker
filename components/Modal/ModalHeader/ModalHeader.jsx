import ModalHeaderButton from "./ModalHeaderButton";

const ModalHeader = ({ switchFavouriteMode, favouriteMode }) => {
    return (
        <section className="flex items-center justify-center px-2 max-w-sm mx-auto">
            <ModalHeaderButton
                onClick={() => switchFavouriteMode("single")}
                extraClass={`rounded-tl-md rounded-bl-md ${
                    favouriteMode === "single"
                        ? "bg-blue"
                        : "bg-white text-blue"
                }`}
                text="single"
            />
            <ModalHeaderButton
                onClick={() => switchFavouriteMode("multiple")}
                extraClass={`rounded-tr-md rounded-br-md ${
                    favouriteMode === "multiple"
                        ? "bg-blue"
                        : "bg-white text-blue"
                }`}
                text="multiple"
            />
            {/* <button
                className="transition duration-200 rounded-2 px-4 shadow-inner pt-2 pb-3 flex-1 bg-blue text-white font-semibold hover:bg-blue-lighter rounded-tr-md rounded-br-md"
                onClick={() => {
                    setFavouriteMode("multiple");
                }}
            >
                multiple
            </button> */}
        </section>
    );
};

export default ModalHeader;
