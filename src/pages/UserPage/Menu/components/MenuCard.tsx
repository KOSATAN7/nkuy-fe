import { useState } from "react";
import { formatRupiah } from "@/utils/FormatRupiah";

interface MenuCardProps {
  foto?: string;
  nama: string;
  deskripsi: string;
  harga: string;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({
  foto,
  nama,
  deskripsi,
  harga,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [quantity, setQuantity] = useState(0);

  const defaultImage =
    "https://dummyimage.com/600x400/caced8/000000.png&text=Gambar+Tidak+Tersedia";
  const imageToShow = foto || defaultImage;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    onAddToCart();
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onRemoveFromCart();
    }
  };

  return (
    <div className="p-4 shadow-2xl rounded-lg w-full">
      <div>
        <img className="w-full h-40 object-cover rounded-lg" src={imageToShow} />
      </div>
      <div className="mt-5 space-y-3">
        <h1 className="text-xl font-medium">{nama}</h1>
        <h2 className="text-neutral3 text-lg">{deskripsi}</h2>
        <p className="text-primary1 text-lg">{formatRupiah(Number(harga))}</p>

        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            onClick={handleDecrease}
            className="px-3 py-1 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition"
            disabled={quantity === 0}
          >
            −
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="px-3 py-1 bg-primary1 text-white rounded-lg hover:bg-primary1koma2 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
