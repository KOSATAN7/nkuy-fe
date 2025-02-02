import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";

interface ActionButtonProps {
  detailPath?: string;
  updatePath?: string;
  onUpdate?: () => void;
  onDelete?: () => void;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  detailPath,
  updatePath,
  onUpdate,
  onDelete,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (onDelete) onDelete();
  };

  return (
    <div className="flex gap-2 justify-center">
    {detailPath && (
      <button
        onClick={() => navigate(detailPath)}
        className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
      >
        <HiOutlineEye className="text-gray-600" />
      </button>
    )}

      {updatePath && (
        <button
          onClick={() => navigate(updatePath)}
          className="bg-primary2 p-2 rounded-lg hover:bg-blue-400"
        >
          <HiOutlinePencil className="text-white" />
        </button>
      )}

      {onUpdate && (
        <button
          onClick={onUpdate}
          className="bg-yellow-200 p-2 rounded-lg hover:bg-yellow-300"
        >
          <HiOutlinePencil className="text-gray-600" />
        </button>
      )}

      {onDelete && (
        <button
          onClick={handleDelete}
          className="bg-danger1 p-2 rounded-lg hover:bg-red-300"
        >
          <HiOutlineTrash className="text-white" />
        </button>
      )}
    </div>
  );
};

export default ActionButton;
