import React from "react";
import Input from "../ui/input/Input";
import "./selectInputStyles.scss";

interface SelectInputProps {
  selectValue: string;
  selectOptions: string[];
  selectOnChange: (value: string) => void;
  inputValue: string;
  inputLabel?: string;
  inputOnchange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
  const { selectValue, selectOptions, selectOnChange, inputValue, inputOnchange, inputLabel = "Número de Documento" } = props;

  const handleSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectOnChange(e.target.value);
  };

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputOnchange(e.target.value);
  };

  return (
    <div className="select-input-container">
      <select
        value={selectValue}
        onChange={handleSelectOnChange}
        className="custom-select"
      >
        {selectOptions.map((item, index) => (
          <option key={`${item}-${index}`} value={item} className="custom-option">
            {item}
          </option>
        ))}
      </select>

      <div className="input-container">
        <Input
          label={inputLabel}
          type="text"
          value={inputValue}
          onChange={handleInputOnChange}
          style={{ borderBottomLeftRadius: "0px", borderTopLeftRadius: "0px" }}
        />
      </div>
    </div>
  );
};

export default SelectInput;
