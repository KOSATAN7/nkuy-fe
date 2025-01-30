import React from "react";
import { FaUser } from "react-icons/fa";

const AboutUs: React.FC<{ title: string; subtitle: string; description: string }> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between w-full max-w-2xl mx-auto border border-black mt-12">
      <div className="flex items-center space-x-1 ml-3">
        <div className="w-24 h-24">
          <img src="/src/assets/favicon.png" alt="Logo" className="w-full" />
        </div>
        <h1 className="text-3xl font-regular text-primary1">Nobar Kuy!</h1>
      </div>

      <div className="text-left">
        <h2 className="text-sm font-medium text-black inline-block pb-1">
          {title}
          <span className="block w-7 h-[2px] bg-black mt-1"></span>
        </h2>
        <h3 className="text-2xl font-bold mt-2">{subtitle}</h3>
        <p className="text-black text-sm w-72">{description}</p>
      </div>
    </div>
  );
};

interface TeamCardProps {
  id: string;
  name: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ id, name }) => {
  return (
    <div className="w-60 h-54 border rounded-xl shadow-lg overflow-hidden border-black">
      <div className="bg-primary1 w-full h-32 flex items-center justify-center ">
        <FaUser className="w-20 h-20 flex items-center justify-center text-white" />
      </div>
      <div className="bg-white w-full h-20 flex flex-col items-center justify-center">
        <p className="text-sm text-gray-800 justify-center items-center">{id}</p>
        <h3 className="text-md font-semibold">{name}</h3>
      </div>
    </div>
  );
};

const TeamSection: React.FC<{ teamData: { id: string; name: string }[] }> = ({ teamData }) => {
  return (
    <div className="grid grid-cols-3 gap-6 p-20">
      {teamData.map((member) => (
        <TeamCard key={member.id} id={member.id} name={member.name} />
      ))}
    </div>
  );
};

export { AboutUs, TeamCard, TeamSection };
