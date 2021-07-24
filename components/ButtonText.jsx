const ButtonText = ({
    text,
    extraClass,
    children,
    type,
    onClick,
    disabled,
}) => {
    return (
        <button
            type={type}
            className={`pt-1 pb-2 px-4 rounded ${extraClass}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
            {text}
        </button>
    );
};

ButtonText.defaultProps = {
    extraClass: "",
    type: "button",
    onClick: null,
    disabled: false,
};

export default ButtonText;
