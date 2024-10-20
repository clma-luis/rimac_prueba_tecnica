import CheckIcon from "../../../shared/icons/CheckIcon";

interface ButtonCheckProps {
  checked: boolean;
  onClick: (value: boolean) => void;
}

const ButtonCheck: React.FC<ButtonCheckProps> = (props) => {
  const { checked, onClick } = props;


  const handleClick = () => {
    onClick(!checked);
  };

  return (
    <button
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: checked ? "#4CAF50" : "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: 0,
        color: "#389E0D",
        border: checked ? "1px solid #4CAF50" : "1px solid #A9AFD9",
        outline: "none", 
        boxShadow: "none", 
      }}
      aria-label="Verificado"
      onFocus={(e) => e.currentTarget.blur()}
      onClick={handleClick}
    >
      <CheckIcon />
    </button>
  );
};

export default ButtonCheck;
