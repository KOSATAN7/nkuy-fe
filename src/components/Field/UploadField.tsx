import { useState } from "react";

interface UploadFieldProps {
  title: string;
  maxFileSize?: string;
}

const UploadField: React.FC<UploadFieldProps> = ({ title, maxFileSize }) => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="mb-2">{title}</h1>
        <h1 className="text-red">{maxFileSize}</h1>
      </div>
      <div className="flex items-center border-2 rounded-lg overflow-hidden cursor-pointer w-full">
        <span className="flex-grow px-4 py-2 text-gray-400">{fileName}</span>
        <span className="bg-primary1 px-4 py-2 text-white">Browse</span>
        <input type="file" className="hidden" onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default UploadField;
