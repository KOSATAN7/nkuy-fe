import React from "react";

interface SelectFieldProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  name?: string;
  className?: string;
  title: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  options,
  value,
  onChange,
  placeholder = "Pilih salah satu",
  name,
  title,
  className = "",
}) => {
  return (
    <div>
      <h1 className="mb-2">{title}</h1>
      <div className={`w-full border-2 rounded-xl px-4 py-2 ${className}`}>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full focus:outline-none bg-transparent"
        >
          {placeholder && (
            <option value="">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
