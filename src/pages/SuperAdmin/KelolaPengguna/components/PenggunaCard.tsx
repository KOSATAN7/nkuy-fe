import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface PenggunaCardProps {
  id?: number;
  email: string;
  nama: string;
  role: string;
  onDelete?: () => void;
}

const PenggunaCard: React.FC<PenggunaCardProps> = ({
  email,
  nama,
  role,
  id,
  onDelete,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center p-5 border-2 rounded-xl">
        <div>
          <p>
            <span className="font-semibold">Nama : </span>
            {nama}
          </p>
          <p>
            <span className="font-semibold">Email : </span>
            {email}
          </p>
          <p>
            <span className="font-semibold">Role : </span>
            {role}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center gap-5 justify-center p-3 bg-primary1 text-white rounded-xl"
            onClick={() => navigate(`edit/${id}`)}
          >
            <FiEdit3 className="text-xl" />
            Edit
          </button>
          {role !== "Super Admin" && (
            <button
              className="flex items-center gap-5 justify-center p-3 bg-danger1 text-white rounded-xl"
              onClick={onDelete}
            >
              <AiOutlineDelete className="text-xl" />
              Hapus
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PenggunaCard;
