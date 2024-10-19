import React from "react";
import "./checkboxStyles.scss";

interface CheckboxProps {
  text?: string;
  checked: boolean;
  setChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { text, checked, setChecked } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e);
  };

  return (
    <label className="custom-checkbox">
      <input type="checkbox" checked={checked} onChange={handleOnChange} />
      <span className="checkmark"></span>

      {text}
    </label>
  );
};

export default Checkbox;
