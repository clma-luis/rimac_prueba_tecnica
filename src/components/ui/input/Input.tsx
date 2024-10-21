import React, { useState } from "react";
import "./inputStyles.scss";

interface InputProps {
  value: string;
  name?: string;
  id?: string;
  type: string;
  label?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  error?: boolean;
  errorText?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { value, name, id, type, label, placeholder, onChange, error, errorText, style } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div className={`input ${isFocused || value ? "focused" : ""}`}>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`inputStyles ${error ? "inputStyles--error" : ""}`}
          style={{ ...style }}
        />
       
      </div>
      {!!errorText && <p style={{ margin: "0px", fontSize: "12px", color: "red", paddingLeft: "4px", marginTop: "4px" }}>{errorText}*</p>}
    </div>
  );
};

export default Input;
