const Spinner = ({ margin, width, height, border, borderTop, extraClass }) => {
    return (
        <div className={`flex justify-center items-center ${margin}`}>
            <div
                className={`loader ease-linear rounded-full border-blue-lighter ${width} ${height} ${border} ${borderTop} ${extraClass}`}
            ></div>
        </div>
    );
};

Spinner.defaultProps = {
    margin: "mt-0",
    width: "w-20",
    height: "h-20",
    border: "border-8",
    borderTop: "border-t-8",
    extraClass: "",
};

export default Spinner;
