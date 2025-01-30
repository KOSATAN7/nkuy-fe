import MainLayout from "../../LandingPage/Layout";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import Gambar1 from "@/assets/Kuda1.jpg";
import { useState } from "react";
import { Rating } from "@mui/material";

type Venue = {
  id: number;
  name: string;
  location: string;
  rating: number;
  capacity: number;
  image: string;
};

const VenueCard = ({ venue }: { venue: Venue }) => (
  <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden w-60 flex-shrink-0">
    <img src={venue.image} alt={venue.name} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{venue.name}</h3>
      <p className="text-gray-600 text-sm">{venue.location}</p>
      <div className="flex items-center mt-2">
        <Rating value={venue.rating} precision={0.5} readOnly sx={{ color: "#FFD700", fontSize: "1.2rem" }} />
      </div>
      <div className="flex items-center mt-2 text-gray-600">
        <FaUsers className="mr-2" />
        <span>{venue.capacity} orang</span>
      </div>
    </div>
  </div>
);

const VenueList = () => {
  const venues: Venue[] = [
    { id: 1, name: "Cafe De'u", location: "Bandung", rating: 4, capacity: 50, image: Gambar1 },
    { id: 2, name: "Grand Hall", location: "Jakarta", rating: 5, capacity: 100, image: Gambar1 },
    { id: 3, name: "Sunset Lounge", location: "Bali", rating: 4.5, capacity: 80, image: Gambar1 },
    { id: 4, name: "Mountain View", location: "Malang", rating: 4, capacity: 60, image: Gambar1 },
    { id: 5, name: "Ocean Breeze", location: "Surabaya", rating: 4.2, capacity: 70, image: Gambar1 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % venues.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + venues.length) % venues.length);
  };

  return (
    <MainLayout>
      {/* Header Event */}
      <div className="text-center py-8 mt-20 ">
        <h2 className="text-3xl font-bold">Persib VS Persija</h2>
      </div>

      {/* Gambar Header */}
      <div className="w-full flex justify-center">
        <img src={Gambar1} alt="Event Venue" className="rounded-xl w-3/4 h-64 object-cover" />
      </div>

      {/* Search Bar */}
      <div className="text-center mt-20">
        <h3 className="text-lg font-semibold mb-2">Cari tempat yuk!!</h3>
        <div className="flex justify-center">
          <input type="text" placeholder="Cari tempat..." className="border rounded-full px-4 py-2 w-1/2 text-left" />
        </div>
      </div>

      {/* Daftar Venue */}
      <div className="p-8 mt-20">
        <h2 className="text-xl ml-12 font-bold mb-4">Terdekatmu!</h2>
        <div className="flex ml-12 transition-transform duration-3600 ease-in-out gap-10"
          style={{ transform: `translateX(-${currentIndex * 260}px)` }}>
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-1 mb-20 space-x-4">
        <button onClick={prevSlide} className="p-2">
          <HiChevronDoubleLeft className="text-gray-600 w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="p-2">
          <HiChevronDoubleRight className="text-gray-600 w-6 h-6" />
        </button>
      </div>
    </MainLayout >
  );
};

export default VenueList;