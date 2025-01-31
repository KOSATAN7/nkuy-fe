import { useState } from "react";
import { FaUsers, FaHeart } from "react-icons/fa";
import { Rating } from "@mui/material";
import React from 'react';

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
    const [isLiked, setIsLiked] = useState(false);

    const handleHeartClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="mx-10 my-8 relative w-64 h-80 bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
            <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
            <div className="relative inset-0 bg-gradient-to-t from-black/90 via-transparent p-4 flex flex-col justify-end text-white">
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

export default VenueCardPortrait;