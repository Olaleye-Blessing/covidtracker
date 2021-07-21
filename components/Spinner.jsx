const Spinner = ({ margin }) => {
    return (
        <div className={`${margin}`}>
            <div className="flex justify-center items-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 h-20 w-20 border-blue-lighter"></div>
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    margin: "mt-0",
};

export default Spinner;
