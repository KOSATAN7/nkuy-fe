import { useRef, useState } from "react";

interface UploadFieldProps {
  title: string;
  maxFileSize?: string;
  onFileChange: (file: File | null) => void;
}

const UploadField: React.FC<UploadFieldProps> = ({ title, maxFileSize, onFileChange }) => {
  const [fileName, setFileName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (file) {
      // Cek ukuran file (jika ada batasan ukuran)
      if (maxFileSize) {
        const maxSizeInBytes = parseInt(maxFileSize) * 1024 * 1024; // Convert MB to Bytes
        if (file.size > maxSizeInBytes) {
          setError(`Ukuran file melebihi ${maxFileSize} MB`);
          onFileChange(null);
          return;
        }
      }

      setFileName(file.name);
      setError(null);
      onFileChange(file);
    } else {
      setFileName("");
      onFileChange(null);
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveFile = () => {
    setFileName("");
    setError(null);
    onFileChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="mb-2">{title}</h1>
        {maxFileSize && <h1 className="text-red-500">Maks: {maxFileSize} MB</h1>}
      </div>
      <div className="flex items-center border-2 rounded-lg overflow-hidden cursor-pointer w-full">
        <span className="flex-grow px-4 py-2 text-gray-400">
          {fileName || "Pilih file..."}
        </span>
        {fileName && (
          <button className="bg-red-500 px-4 py-2 text-white" onClick={handleRemoveFile}>
            Hapus
          </button>
        )}
        <span className="bg-primary1 px-4 py-2 text-white cursor-pointer" onClick={handleBrowseClick}>
          Browse
        </span>
        <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileChange} />
      </div>
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default UploadField;
