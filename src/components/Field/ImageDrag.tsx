import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoMdCloudUpload } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

type ImageDragProps = {
  onFilesAccepted?: (files: File[]) => void;
  title: string;
  file: File | null | string;
  onFileChange: (file: File | null) => void;
};

const ImageDrag: React.FC<ImageDragProps> = ({
  onFilesAccepted,
  title,
  file,
  onFileChange,
}) => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof file === "string") {
      setBackgroundImage(file);
    } else if (!file) {
      setBackgroundImage(null);
    }
  }, [file]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const validFiles = acceptedFiles.filter(
        (file) =>
          ["image/jpeg", "image/png"].includes(file.type) &&
          file.size <= 50 * 1024 * 1024
      );

      if (validFiles.length > 0) {
        const file = validFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
          setBackgroundImage(reader.result as string);
          onFileChange(file);
        };

        reader.readAsDataURL(file);
        if (onFilesAccepted) {
          onFilesAccepted(validFiles);
        }
      }
    },
    [onFilesAccepted, onFileChange]
  );

  const handleRemoveFile = () => {
    setBackgroundImage(null);
    onFileChange(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [], "image/png": [] },
    maxSize: 50 * 1024 * 1024,
  });

  return (
    <div className="flex flex-col w-full h-full items-start space-y-2">
      <label className="">{title}</label>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md w-full min-h-64 p-4 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer transition bg-center bg-no-repeat bg-cover ${
          isDragActive ? "" : ""
        }`}
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <input {...getInputProps()} />
        {!backgroundImage && (
          <>
            <div className="text-neutral1 text-5xl">
              <IoMdCloudUpload />
            </div>
            <p className="text-sm text-gray-700">
              Drag your file(s) or{" "}
              <span className="text-neutral1 underline">browse</span>
            </p>
            <p className="text-xs text-gray-500">Max 50 MB files are allowed</p>
          </>
        )}
      </div>
      <div className="flex items-center gap-3">
        <p className="text-xs text-gray-500">
          Only support .jpg and .png files
        </p>
        {backgroundImage && (
          <button
            onClick={handleRemoveFile}
            className="bg-red text-white rounded-full p-1 hover:bg-red-600 transition"
          >
            <AiOutlineClose size={14} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageDrag;
