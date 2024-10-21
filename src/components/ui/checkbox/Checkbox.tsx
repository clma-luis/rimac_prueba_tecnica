import React from "react";
import "./checkboxStyles.scss";

interface CheckboxProps {
  text?: string;
  checked: boolean;
  name: string;
  setChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error? : boolean
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { name, text, checked, setChecked, error } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e);
  };

  return (
    <label className={`custom-checkbox ${error ? "error" : ""}`}>
      <input name={name} type="checkbox" checked={checked} onChange={handleOnChange} />
      <span className={`checkmark ${error ? "checkmark-error" : ""}`}></span>
      {text}
    </label>
  );
};

export default Checkbox;
