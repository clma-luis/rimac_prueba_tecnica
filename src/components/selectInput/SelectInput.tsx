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
    <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <select
        value={selectValue}
        onChange={handleSelectOnChange}
        className="custom-select"
        style={{
          width: "30%",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
          borderColor: "#ccc",
          borderRight: "0px",
        }}
      >
        {selectOptions.map((item, index) => (
          <option key={`${item}-${index}`} value={item} style={{ display: "flex", justifyContent: "center" }}>
            {item}
          </option>
        ))}
      </select>

      <div style={{ flex: 1 }}>
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
