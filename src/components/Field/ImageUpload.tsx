import React, { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import { BsFillCameraFill } from "react-icons/bs";

interface ImageUploadProps {
  onUpload: (file: File) => void;
  previewImage?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onUpload,
  previewImage,
}) => {
  const [image, setImage] = useState<string | null>(previewImage || null);
  const [, setPreviewUrl] = useState<string | null>(previewImage || null);

  useEffect(() => {
    if (previewImage) {
      setImage(previewImage);
      setPreviewUrl(previewImage);
    }
  }, [previewImage]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setPreviewUrl(imageUrl);
      onUpload(file);
    }
  };

  return (
    <div className="relative w-36 h-36">
      <div className="relative w-full h-full rounded-full overflow-hidden p-2 bg-primary1">
        {image ? (
          <img
            src={image}
            alt="Uploaded preview"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      <label className="absolute bottom-1 right-1 bg-primary1 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer">
        <BsFillCameraFill className="text-white text-xl" />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};

export default ImageUpload;
