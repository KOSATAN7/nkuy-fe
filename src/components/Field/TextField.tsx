import React from "react";

interface TextFieldProps {
  title: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string; 
  name?: string;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  title,
  placeholder = "",
  value,
  onChange,
  type = "text",
  name,
  className = "",
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      <h1 className="mb-2">{title}</h1>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border-2 rounded-xl focus:outline-primary1 px-4 py-2"
        {...props}
      />
    </div>
  );
};

export default TextField;
