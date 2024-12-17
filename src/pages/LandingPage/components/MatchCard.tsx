import React from "react";

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
  return (
    <div className="max-w-sm rounded-3xl shadow-lg bg-white">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-t-3xl w-full"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center text-center gap-4 pb-2">
          <div className="text-center">
            <p className="font-bold text-lg">{day}</p>
            <p className="text-2xl font-semibold">{date}</p>
          </div>
          <div className="text-left border-l border-black px-3">
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-gray-600 text-sm">{time}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm pb-4">
          {description}
        </p>
        <div className="flex justify-center">
        <button className="p-5 bg-primary1 text-white py-2 rounded-full font-semibold hover:bg-primary1-dark transition">
          {buttonText}
        </button>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
