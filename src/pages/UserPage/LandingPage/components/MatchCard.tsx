import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Definisikan tipe props
interface MatchCardProps {
  image: string;
  day: string;
  date: string;
  title: string;
  time: string;
  description: string;
  buttonText: string;
}

const MatchCard: React.FC<MatchCardProps> = ({
  image,
  day,
  date,
  title,
  time,
  description,
  buttonText,


}) => {

  const navigate = useNavigate();

  return (
    <div className="max-w-sm rounded-xl shadow-lg bg-white">
      <div className="relative">
        <img src={image} alt={title} className="rounded-t-xl w-full" />
      </div>

      <div className="p-4">
        <div className="flex items-center text-center gap-4 pb-2">
          <div className="text-center">
            <p className="font-bold text-lg">{day}</p>
            <p className="text-xl font-semibold">{date}</p>
          </div>
          <div className="text-left border-l border-black px-3">
            <p className="font-semibold line-clamp-1 text-[16px]">{title}</p>
            <p className="text-gray-600 text-[14px]">{time}</p>
          </div>
        </div>
        {/* <p className="text-gray-600 text-sm pb-4">{description}</p> */}
        <div className="flex justify-center mt-2">
          <button onClick={() => navigate("/venuelist")} className=" bg-primary1 text-white text-sm py-2 w-full rounded-lg hover:bg-primary1koma2 transition">

            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
