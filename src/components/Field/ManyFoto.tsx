import React, { useState, useEffect } from "react";

interface ManyFotoProps {
  title: string;
  placeholder?: string;
  value: File[]; // Nilai berupa array File
  onChange: (data: File[]) => void; // Callback ketika data berubah
}

const ManyFoto: React.FC<ManyFotoProps> = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
  const [files, setFiles] = useState<File[]>(value.length > 0 ? value : [null as unknown as File]);

  useEffect(() => {
    if (value.length === 0) {
      setFiles([null as unknown as File]); // Set default form jika tidak ada nilai
    } else {
      setFiles(value); // Update state jika props `value` berubah
    }
  }, [value]);

  const handleAddForm = () => {
    setFiles((prev) => {
      const newFiles = [...prev, null as unknown as File]; // Tambahkan placeholder null untuk form baru
      return newFiles;
    });
  };

  const handleFileChange = (index: number, file: File | null) => {
    setFiles((prev) => {
      const newFiles = [...prev];
      if (file) {
        newFiles[index] = file; // Update file di index tertentu
      }
      onChange(newFiles.filter((f) => f)); // Hanya kirim file yang valid
      return newFiles;
    });
  };

  const handleRemoveForm = (index: number) => {
    setFiles((prev) => {
      const newFiles = prev.filter((_, i) => i !== index); // Hapus file pada index tertentu
      onChange(newFiles); // Update callback
      return newFiles.length === 0 ? [null as unknown as File] : newFiles; // Pastikan minimal 1 form
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
        {files.map((file, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex items-center border-2 rounded-lg overflow-hidden w-full">
              <input
                className="hidden"
                id={`file-input-${index}`}
                type="file"
                onChange={(e) =>
                  handleFileChange(index, e.target.files ? e.target.files[0] : null)
                }
              />
              <label
                htmlFor={`file-input-${index}`}
                className="flex-grow px-4 py-2 text-gray-400 cursor-pointer"
              >
                {file ? file.name : placeholder || "Pilih File"}
              </label>
            </div>
            {files.length > 1 && (
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

export default ManyFoto;
