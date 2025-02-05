import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaUser, FaStar, FaRegStar } from "react-icons/fa";

interface VenueProps {
  venue?: {
    id: number;
    nama: string;
    alamat: string;
    kontak: string;
    kota: string;
    latitude: string;
    longitude: string;
    fasilitas: string | null;
    status: string;
    kapasitas: number;
    foto_utama: string | null;
    foto_foto: string[] | null;
    video: string | null;
  };
}

const DetailVenueCard: React.FC<VenueProps> = ({ venue }) => {
  if (!venue) {
    return <p className="text-center text-gray-500">Data venue tidak tersedia</p>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-8 rounded-xl mt-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <img
          src={venue?.foto_utama || "/fallback-image.jpg"}
          alt="Venue"
          className="w-full lg:w-1/2 h-80 object-cover rounded-xl"
        />
        <div className="mt-6 lg:mt-0 lg:ml-8 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{venue?.nama}</h1>
          <p className="text-gray-600 text-lg mt-4">{venue?.alamat}</p>

          <div className="mt-8">
            <span className="block w-16 h-1 bg-gray-800"></span>
            <p className="text-gray-800 font-medium mt-4">
              Kapasitas {venue?.kapasitas} orang
            </p>
          </div>

          <div className="flex items-center mt-8">
            <CiHeart className="w-8 h-8 text-gray-500 hover:text-blue-500 cursor-pointer mr-52" />
            <button className="px-8 py-3 bg-primary1 text-white font-semibold rounded-lg">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {venue?.foto_foto && venue.foto_foto.length > 0 ? (
          venue.foto_foto.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              className="w-full h-32 object-cover rounded-lg"
            />
          ))
        ) : (
          <p className="text-gray-500">Tidak ada gambar tersedia</p>
        )}
      </div>
      <div className="relative w-full h-64 mt-16 rounded-lg overflow-hidden">
        <img
          src="/src/assets/5.png"
          alt="Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 rounded-lg p-4 w-72 bg-white">
          <h2 className="text-lg font-bold text-gray-800">{venue?.kota}</h2>
          <p className="text-sm text-gray-600">{venue?.alamat}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailVenueCard;
