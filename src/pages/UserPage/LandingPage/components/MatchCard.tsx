import React from "react";

interface MatchCardProps {
  image: string;
  day: string;
  date: string;
  title: string;
  time: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const MatchCard: React.FC<MatchCardProps> = ({
  image,
  day,
  date,
  title,
  time,
  buttonText,
  onClick,
}) => {
  return (
    <div className="my-4 max-w-sm rounded-xl shadow-lg bg-white">
      <div className="relative">
        <img src={image} alt={title} className="rounded-t-xl w-full" />
      </div>

      <div className="p-4">
        <div className="flex items-center text-center gap-4 pb-2">
          <div className="text-center">
            <p className="font-bold text-lg">{day}</p>
            <p className="text-lg font-semibold">{time}</p>
          </div>
          <div className="text-left border-l border-black px-3">
            <p className="font-semibold line-clamp-1 text-[16px]">{title}</p>
            <p className="text-gray-600 text-[14px]">{date}</p>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <button onClick={onClick} className=" bg-primary1 text-white text-sm py-2 w-full rounded-lg hover:bg-primary1koma2 transition">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;