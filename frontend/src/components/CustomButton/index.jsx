import "./style.css";

const CustomButton = ({ text, styles, customClass }) => {
    return (
        <button
            className={`custom-button ${customClass || ""}`}
            style={{
                ...styles,
            }}
        >
            {text}
        </button>
    );
};

export default CustomButton;
