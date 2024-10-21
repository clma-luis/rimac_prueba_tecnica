import React from "react";
import Input from "../ui/input/Input";
import "./selectInputStyles.scss";

interface SelectInputProps {
  inputName: string;
  inputType: string;
  selectName: string;
  selectValue: string;
  selectOptions: string[];
  selectOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  inputValue: string;
  inputLabel?: string;
  inputOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorText?: string;
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
  const {
    inputName,
    inputType,
    selectName,
    selectValue,
    selectOptions,
    selectOnChange,
    inputValue,
    inputOnchange,
    inputLabel = "Número de Documento",
    error,
    errorText,
  } = props;

  const handleSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectOnChange(e);
  };

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputOnchange(e);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "4px",}}>
      <div className="select-input-container">
        <select name={selectName} value={selectValue} onChange={handleSelectOnChange} className={`custom-select ${error ? "custom-select-error" : ""}`}>
          {selectOptions.map((item, index) => (
            <option key={`${item}-${index}`} value={item} className="custom-option">
              {item}
            </option>
          ))}
        </select>

        <div className="input-container">
          <Input
            name={inputName}
            label={inputLabel}
            type={inputType}
            value={inputValue}
            onChange={handleInputOnChange}
            style={{ borderBottomLeftRadius: "0px", borderTopLeftRadius: "0px" }}
            error={error}
          />
        </div>
      </div>
      { errorText &&  <p style={{ margin: "0px", fontSize: "12px", color: "red", paddingLeft: "5px" }}>{errorText}*</p>}
    </div>
  );
};

export default SelectInput;
