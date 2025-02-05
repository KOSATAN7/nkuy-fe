import { FaUsers, FaHeart } from "react-icons/fa";
import { Rating } from "@mui/material";
import React from "react";
import { useFavorite } from "../../Favorite/components/FavoriteContext";
import { useNavigate } from "react-router-dom";

interface Venue {
  id: number;
  name: string;
  location: string;
  rating: number;
  capacity: number;
  image: string;
}

interface VenueCardPortraitProps {
  venue: Venue;
}

const VenueCardPortrait: React.FC<VenueCardPortraitProps> = ({ venue }) => {
  const { favorites, toggleFavorite } = useFavorite();
  const isLiked = favorites.some((fav) => fav.id === venue.id);
  const navigate = useNavigate();

  return (
    <div
      className="mx-6 my-8 relative w-64 h-80 bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={() => navigate(`/detailvenue/${venue.id}`)} // ⬅️ Tambahkan navigasi
    >
      <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent p-4 flex flex-col justify-end text-white z-10">
        <h3 className="text-lg font-semibold">{venue.name}</h3>
        <p className="text-sm">{venue.location}</p>
        <div className="flex items-center">
          <FaUsers className="mr-2" />
          <span>{venue.capacity} orang</span>
        </div>
        <div className="flex justify-between items-center">
          <Rating value={venue.rating} precision={0.5} readOnly sx={{ color: "#FFD700", fontSize: "1rem" }} />
          <FaHeart
            className={`cursor-pointer ${isLiked ? "text-red" : "text-white"}`}
            onClick={(e) => {
              e.stopPropagation(); // ⬅️ Mencegah klik dari berpindah halaman saat like
              toggleFavorite(venue);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VenueCardPortrait;
