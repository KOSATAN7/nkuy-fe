import MainLayout from "../../LandingPage/Layout";
import { AiOutlineLike } from "react-icons/ai";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Gambar1 from "@/assets/Kuda1.jpg";
import { useState } from "react";
import CarouselComponent from "./CarouselComponent";
import { Rating } from "@mui/material";

type Venue = {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
};

const VenueCard = ({ venue }: { venue: Venue }) => (
  <div className="relative bg-white shadow-lg rounded-r-2xl overflow-hidden flex">
    <img
      src={venue.image}
      alt={venue.name}
      className="w-1/4 h-full object-cover rounded-r-2xl"
    />
    <div className="w-2/3 p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{venue.name}</h3>
        <p className="text-gray-600 text-sm">{venue.location}</p>
        <div className="mt-10 text-sm">
          <p>Rating Tempat</p>
        </div>
        <div className="flex items-center mt-2">
          {/* MUI Rating */}
          <Rating
            value={venue.rating}
            precision={0.5}
            readOnly
            sx={{
              color: "#FFD700", // Warna bintang
              fontSize: "1.5rem", // Ukuran bintang
            }}
          />
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <button className="px-12 py-2 bg-primary1 text-white text-sm rounded-xl hover:bg-blue-600">
          Tentang Kami!
        </button>
      </div>
    </div>
    <button className="absolute top-4 right-4">
      <AiOutlineLike className="text-gray-600 w-6 h-6" />
    </button>
  </div>
);

const VenueList = () => {
  const venues: Venue[] = [
    { id: 1, name: "Coffee Toffe", location: "Bandung", rating: 4, image: Gambar1 },
    { id: 2, name: "Makopi", location: "Jakarta", rating: 5, image: Gambar1 },
    { id: 3, name: "Roti Kopi", location: "Surabaya", rating: 3, image: Gambar1 },
    { id: 4, name: "Ngopi Dulu", location: "Malang", rating: 4, image: Gambar1 },
    { id: 5, name: "Kopi Kawan", location: "Solo", rating: 5, image: Gambar1 },
    { id: 6, name: "Warung Kopi", location: "Bandung", rating: 4, image: Gambar1 },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const venuesPerPage = 5;
  const totalPages = Math.ceil(venues.length / venuesPerPage);
  const currentVenues = venues.slice(
    currentPage * venuesPerPage,
    (currentPage + 1) * venuesPerPage
  );

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <MainLayout>
      {/* Carousel */}
      <div className="p-8 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Japan Vs Indonesia</h2>
        <div className="space-y-6">
        </div>
        <CarouselComponent venues={venues} />
      </div>

      {/* Daftar Venue */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Tempat Tersedia</h2>
        <div className="space-y-6 mt-16">
          {currentVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
        {venues.length > venuesPerPage && (
          <div className="flex justify-center mt-10 md-10 space-x-4 my-10">
            <button onClick={prevPage} className="p-2 hover:bg-gray-200">
              <HiChevronDoubleLeft className="text-gray-600 w-6 h-6" />
            </button>
            <button onClick={nextPage} className="p-2 hover:bg-gray-200">
              <HiChevronDoubleRight className="text-gray-600 w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default VenueList;
