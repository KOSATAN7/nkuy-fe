import { useNavigate } from "react-router-dom";

interface MenuCardProps {
  image: string;
  nama: string;
  harga: string;
  updatePath?: number;
  description: string;
}

const MenuCard: React.FC<MenuCardProps> = ({
  image,
  nama,
  harga,
  description,
  updatePath,
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="flex flex-col bg-neutral2 rounded-xl w-full h-full">
        <img src={image} className="rounded-t-xl w-full h-40 object-cover" />
        <div className="p-5 flex flex-col h-full justify-between">
          <div className="space-y-5">
            <div>
              <h1 className="text-lg font-medium">{nama}</h1>
              <h2 className="mt-1">{harga}</h2>
            </div>
            <p>{description}</p>
          </div>
          <div className="flex justify-end space-x-5 mt-10">
            <button
              className="bg-primary1 rounded-full hover:bg-white border-2 border-primary1 hover:text-primary1 px-4 py-2 text-white transition-all duration-300"
              onClick={() => navigate(`update/${updatePath}`)}
            >
              Ubah Menu
            </button>
            <button className="bg-red rounded-full hover:bg-white border-2 border-red hover:text-red px-4 py-2 text-white transition-all duration-300">
              Hapus Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
