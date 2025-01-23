import React from "react";

interface PhoneFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const PhoneField: React.FC<PhoneFieldProps> = ({
  value,
  onChange,
  placeholder = "8123456789",
}) => {
  return (
    <div>
      <h1 className="mb-2">Kontak</h1>
      <div className="flex items-center border-2 rounded-xl px-4 py-2 w-full">
        <span className="text-gray-500 mr-2 flex items-center">+62</span>
        <div className="border-l h-6 mx-2"></div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default PhoneField;
