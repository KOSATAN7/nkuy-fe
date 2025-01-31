import { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { FaUsers, FaHeart } from "react-icons/fa";
import { Rating } from "@mui/material";
import MainLayout from "../LandingPage/Layout";
import Gambar1 from "@/assets/Kuda1.jpg";

interface Venue {
  id: number;
  name: string;
  location: string;
  rating: number;
  capacity: number;
  image: string;
}

const venues = [
  { id: 1, name: "Cafe De'u", location: "Bandung", rating: 4, capacity: 50, image: Gambar1 },
  { id: 2, name: "Grand Hall", location: "Jakarta", rating: 5, capacity: 100, image: Gambar1 },
  { id: 3, name: "Sunset Lounge", location: "Bali", rating: 4.5, capacity: 80, image: Gambar1 },
  { id: 4, name: "Mountain View", location: "Malang", rating: 4, capacity: 60, image: Gambar1 },
  { id: 5, name: "Ocean Breeze", location: "Surabaya", rating: 4.2, capacity: 70, image: Gambar1 },
  { id: 6, name: "Skyline Rooftop", location: "Yogyakarta", rating: 4.8, capacity: 90, image: Gambar1 },
  { id: 7, name: "Crystal Ballroom", location: "Medan", rating: 4.7, capacity: 120, image: Gambar1 },
  { id: 8, name: "Garden View", location: "Semarang", rating: 4.3, capacity: 65, image: Gambar1 },
  { id: 9, name: "Seaside Pavilion", location: "Makassar", rating: 4.6, capacity: 85, image: Gambar1 },
  { id: 10, name: "Golden Palace", location: "Bandung", rating: 4.9, capacity: 110, image: Gambar1 },
];

const VenueCardPotrait = ({ venue }: { venue: Venue }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="mx-10 my-8 relative w-64 h-80 bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent p-4 flex flex-col justify-end text-white">
        <h3 className="text-lg font-semibold">{venue.name}</h3>
        <p className="text-sm">{venue.location}</p>
        <div className="flex items-center text-white">
          <FaUsers className="mr-2" />
          <span>{venue.capacity} orang</span>
        </div>
        <div className="flex justify-between items-center">
          <Rating value={venue.rating} precision={0.5} readOnly sx={{ color: "#FFD700", fontSize: "1rem" }} />
          <FaHeart
            className={`cursor-pointer ${isLiked ? "text-red-500" : "text-gray-400"}`}
            onClick={handleHeartClick}
          />
        </div>
      </div>
    </div>
  );
};

const VenueCardLandscape = ({ venue }: { venue: Venue }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative w-64 h-40 bg-white shadow-lg rounded-2xl overflow-hidden flex transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparen p-4 flex flex-col justify-end text-white">
        <h3 className="text-lg font-semibold">{venue.name}</h3>
        <p className="text-white text-sm">{venue.location}</p>
        <div className="flex items-center text-white">
          <FaUsers className="mr-2" />
          <span>{venue.capacity} orang</span>
        </div>
        <div className="flex justify-between items-center">
          <Rating value={venue.rating} precision={0.5} readOnly sx={{ color: "#FFD700", fontSize: "1rem" }} />
          <FaHeart
            className={`cursor-pointer ${isLiked ? "text-red-500" : "text-gray-400"}`}
            onClick={handleHeartClick}
          />
        </div>
      </div>
    </div>
  );
};

const VenueList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < venues.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <MainLayout>
      {/* Header Event */}
      <div className="relative w-full h-64 mt-10">
        {/* Gambar Latar */}
        <img
          src={Gambar1}
          alt="Event Venue"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent rounded-xl"></div>
        <div className="absolute inset-5 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-4xl font-bold drop-shadow-lg">Persib VS Persija</h2>
            <p className="mt-2 text-lg">Jam Tayang 06.00 WIB</p>
          </div>

          {/* Search Bar */}
          <div className="mt-28 mx-auto w-1/2 bg-white rounded-xl px-4 py-2 flex flex-col items-start border border-gray-300">
            <input
              className="w-full text-black focus:outline-none bg-transparent placeholder-gray-500 px-2 py-2 text-left"
              type="text"
              placeholder="Cari tempat yuk!!"
            />
            <button className="mt-1 border text-gray-700 px-6 text-sm rounded-xl border-gray-300 hover:bg-gray-100">
              Kota
            </button>
            <div className="mt-[181px] absolute inset-0 flex flex-col justify-between text-white">
              <p>Sabtu, 27 Januari 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daftar Venue */}
      <div className="p-8 mt-20">
        {/* Section Terdekat */}
        <h2 className="text-xl ml-12 font-bold mb-2">Terdekatmu!</h2>
        <div className="relative flex items-center ml-12">
          {currentIndex > 0 && (
            <button onClick={prevSlide} className="absolute -left-6 z-10 p-2 bg-white rounded-full shadow-md">
              <HiChevronDoubleLeft className="text-gray-600 w-6 h-6" />
            </button>
          )}
          <div
            className="flex gap-4 overflow-hidden w-full transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 4)}%)`,
            }}
          >
            {venues.slice(currentIndex, currentIndex + 4).map((venue) => (
              <VenueCardPotrait key={venue.id} venue={venue} />
            ))}
          </div>
          {currentIndex < venues.length - 4 && (
            <button onClick={nextSlide} className="absolute -right-6 z-10 p-2 bg-white rounded-full shadow-md">
              <HiChevronDoubleRight className="text-gray-600 w-6 h-6" />
            </button>
          )}
        </div>

        {/* Section Tersedia */}
        <h2 className="text-xl ml-12 font-bold mt-8 mb-4">Tersedia</h2>
        <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-6 ml-12">
          {venues.map((venue) => (
            <VenueCardLandscape key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default VenueList;


