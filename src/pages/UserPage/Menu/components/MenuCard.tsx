import React from "react";

interface VenueProps {
  venue: {
    name: string;
    description: string;
    harga: number;
    images: string[];
  };
}

const MenuCard: React.FC<VenueProps> = ({ venue }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-4 shadow-lg w-full">
      <img
        src={venue.images[0]}
        alt={venue.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-800">{venue.name}</h2>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {venue.description}
        </p>
        <p className="text-lg text-primary1 mt-2">Rp{venue.harga}.000</p>
      </div>

      <div className="mt-4">
        <button className="w-full py-2 bg-primary1 text-white rounded-lg text-sm">
          Tambah
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
