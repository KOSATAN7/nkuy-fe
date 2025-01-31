import { FaUsers, FaHeart } from "react-icons/fa";
import { Rating } from "@mui/material";
import { useState } from "react";

type Venue = {
    id: number;
    name: string;
    location: string;
    rating: number;
    capacity: number;
    image: string;
};
type VenueCard = {
    venue: Venue;
    portrait?: boolean;
};


function VenueCard({ venue }: { venue: Venue }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };


    return (
        <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden w-[400px] h-56 hover:scale-105 transition-transform duration-300 cursor-pointer">
            {/* Gambar Venue */}
            <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>

            {/* Detail Venue */}
            <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{venue.name}</h3>
                <p className="text-sm">{venue.location}</p>

                {/* Kapasitas */}
                <div className="flex items-center text-sm mt-1">
                    <FaUsers className="mr-1" />
                    <span>{venue.capacity} orang</span>
                </div>
            </div>

            {/* Tombol Favorite */}
            <button onClick={toggleFavorite} className="absolute top-3 right-3 text-white">
                <FaHeart className={`text-xl transition-all ${isFavorite ? "text-red-500" : "text-gray-300"}`} />
            </button>
        </div>
    );
}

export default VenueCard;
