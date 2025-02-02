import React, { useState, useEffect } from "react";

interface FasilitasFieldProps {
  title: string;
  placeholder?: string;
  value: string[];
  onChange: (data: string[]) => void;
}

const FasilitasField: React.FC<FasilitasFieldProps> = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
  const [fasilitas, setFasilitas] = useState<string[]>(value);

  useEffect(() => {
    setFasilitas(value); 
  }, [value]);

  const handleAddForm = () => {
    setFasilitas((prev) => {
      const newFasilitas = [...prev, ""];
      onChange(newFasilitas);
      return newFasilitas;
    });
  };

  const handleInputChange = (index: number, newValue: string) => {
    setFasilitas((prev) => {
      const newFasilitas = [...prev];
      newFasilitas[index] = newValue;
      onChange(newFasilitas);
      return newFasilitas;
    });
  };

  const handleRemoveForm = (index: number) => {
    setFasilitas((prev) => {
      const newFasilitas = prev.filter((_, i) => i !== index);
      onChange(newFasilitas.length > 0 ? newFasilitas : [""]);
      return newFasilitas;
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h1>{title}</h1>
        <button className="underline text-primary1" onClick={handleAddForm}>
          Tambah Form
        </button>
      </div>

      <div className="border-2 p-5 rounded-lg space-y-2">
        {fasilitas.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              className="w-full border-2 focus:outline-primary1 rounded-lg px-4 py-2"
              type="text"
              placeholder={placeholder}
              value={item}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            {fasilitas.length > 1 && (
              <button
                className="bg-danger1 text-white px-3 py-1 rounded-md"
                onClick={() => handleRemoveForm(index)}
              >
                Hapus
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FasilitasField;
