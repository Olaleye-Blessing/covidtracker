const ModalHeaderButton = ({ extraClass, onClick, text }) => {
    return (
        <button
            className={` transition duration-200 px-4 shadow-inner py-2 pb-3 flex-1  font-semibold hover:bg-blue-lighter ${extraClass}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default ModalHeaderButton;
