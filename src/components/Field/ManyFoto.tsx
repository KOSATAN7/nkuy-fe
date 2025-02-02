import React, { useState } from "react";

interface ManyFotoProps {
  title: string;
  placeholder?: string;
}

const ManyFoto: React.FC<ManyFotoProps> = ({ title, placeholder }) => {
  const [foto, setFoto] = useState<{ foto: string }[]>([{ foto: "" }]);
  const [fileName, setFileName] = useState<string>("");

  const handleAddForm = () => {
    setFoto([...foto, { foto: "" }]);
  };

  const handleInputChange = (index: number, value: string) => {
    const newFoto = [...foto];
    newFoto[index].foto = value;
    setFoto(newFoto);
  };

  const handleRemoveForm = (index: number) => {
    setFoto(foto.filter((_, i) => i !== index));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
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
        {foto.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex items-center border-2 rounded-lg overflow-hidden cursor-pointer w-full">
              <span className="flex-grow px-4 py-2 text-gray-400">
                {fileName}
              </span>
              <span className="bg-primary1 px-4 py-2 text-white">Browse</span>
              <input
                type="file"
                value={item.foto}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <button
              className="bg-danger1 text-white px-3 py-1 rounded-md"
              onClick={() => handleRemoveForm(index)}
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManyFoto;
