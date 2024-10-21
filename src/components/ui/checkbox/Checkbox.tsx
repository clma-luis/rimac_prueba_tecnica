import React, { useEffect, useState } from "react";
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
  const [currentError, setCurrentError] = useState(error)

  useEffect(() => {
    if(error) setCurrentError(error)
  }, [error])
  

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked) setCurrentError(false)
    setChecked(e);
  };

  return (
    <label className={`custom-checkbox ${currentError ? "error" : ""}`}>
      <input name={name} type="checkbox" checked={checked} onChange={handleOnChange} />
      <span className={`checkmark ${currentError ? "checkmark-error" : ""}`}></span>
      {text}
    </label>
  );
};

export default Checkbox;
