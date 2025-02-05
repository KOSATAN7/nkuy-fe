import { useRef, useState } from "react";

interface UploadFieldProps {
  title: string;
  maxFileSize?: string;
  onFileChange: (file: File | null) => void;
}

const UploadField: React.FC<UploadFieldProps> = ({ title, maxFileSize, onFileChange }) => {
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFileName(file ? file.name : "");
    onFileChange(file);
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="mb-2">{title}</h1>
        <h1 className="text-red">{maxFileSize}</h1>
      </div>
      <div className="flex items-center border-2 rounded-lg overflow-hidden cursor-pointer w-full">
        <span className="flex-grow px-4 py-2 text-gray-400">{fileName || "Pilih file..."}</span>
        <span
          className="bg-primary1 px-4 py-2 text-white cursor-pointer"
          onClick={handleBrowseClick}
        >
          Browse
        </span>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default UploadField;
