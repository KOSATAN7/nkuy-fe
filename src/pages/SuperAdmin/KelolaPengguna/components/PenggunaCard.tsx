import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface PenggunaCardProps {
  id?: number;
  email: string;
  nama: string;
  nama_venue: string;
  role: string;
  status: string;
}

const PenggunaCard: React.FC<PenggunaCardProps> = ({
  email,
  nama,
  nama_venue,
  role,
  status,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center p-5 border-2 rounded-xl">
        <div>
          <p>
            <span className="font-semibold">Email : </span>
            {email}
          </p>
          <p>
            <span className="font-semibold">Nama : </span>
            {nama}
          </p>
          <p>
            <span className="font-semibold">Nama Venue : </span>
            {nama_venue}
          </p>
          <p>
            <span className="font-semibold">Role : </span>
            {role}
          </p>
          <p>
            <span className="font-semibold">Status : </span>
            {status}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center gap-5 px-8 py-3 bg-primary1 text-white rounded-xl"
            onClick={() => navigate(`edit/${id}`)}
          >
            <FiEdit3 className="text-xl" />
            Edit
          </button>
          <button className="flex items-center gap-5 px-8 py-3 bg-danger1 text-white rounded-xl">
            <AiOutlineDelete className="text-xl" />
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default PenggunaCard;
