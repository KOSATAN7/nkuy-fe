import MatchCard from "./components/MatchCard";
import MainLayout from "./Layout";
import Gambar1 from "@/assets/Kuda1.jpg";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLeague, setActiveLeague] = useState("Liga 1");

  type Match = {
    day: string;
    date: string;
    title: string;
    time: string;
    description: string;
  };

  type Matches = {
    [key: string]: Match[];
  };

  const allMatches: Matches = {
    "Liga 1": [
      {
        day: "SAT",
        date: "7",
        title: "Persib VS Persija",
        time: "20.00 - Selesai",
        description: "Coffee Toffee",
      },
      {
        day: "SUN",
        date: "8",
        title: "Arema VS Persebaya",
        time: "19.00 - Selesai",
        description: "Stadion Malang",
      },
    ],
    "Liga 2": [
      {
        day: "MON",
        date: "9",
        title: "PSMS VS Sriwijaya",
        time: "18.00 - Selesai",
        description: "Medan Cafe",
      },
      {
        day: "TUE",
        date: "10",
        title: "Persik VS Barito",
        time: "20.00 - Selesai",
        description: "Bento Cafe",
      },
    ],
    "Liga 3": [
      {
        day: "WED",
        date: "11",
        title: "PSGC VS Persita",
        time: "17.00 - Selesai",
        description: "Ciamis Stadium",
      },
    ],
    LaLiga: [
      {
        day: "THU",
        date: "12",
        title: "Real Madrid VS Barcelona",
        time: "22.00 - Selesai",
        description: "Madrid Cafe",
      },
    ],
    UCL: [
      {
        day: "FRI",
        date: "13",
        title: "Bayern VS PSG",
        time: "21.00 - Selesai",
        description: "Munich Arena",
      },
    ],
    ACL: [
      {
        day: "SAT",
        date: "14",
        title: "Al Hilal VS Urawa",
        time: "20.00 - Selesai",
        description: "Riyadh Stadium",
      },
    ],
  };

  const matches = allMatches[activeLeague];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : matches.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < matches.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <MainLayout>
      <div>
        <div className="flex flex-col items-center justify-center space-y">
          <p className="text-4xl font-medium">Mau nonton apa hari ini?</p>
          <input
            type="text"
            className="w-1/2 py-3 mt-10 rounded-full px-6 text-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Timnas Indonesia vs Argentina"
          />
        </div>
        <div className="flex items-center justify-center space-x-4 mt-10">
          <button>
            <FaChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          {Object.keys(allMatches).map((league, index) => (
            <button
              key={index}
              onClick={() => setActiveLeague(league)}
              className={`px-8 py-2 rounded-full text-sm font-medium ${
                activeLeague === league
                  ? "bg-primary1 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-primary1koma2 hover:text-white`}
            >
              {league}
            </button>
          ))}
          <button>
            <FaChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="mt-14">
          <p className="font-semibold text-xl pb-5">Paling ramai ditunggu!</p>
          <div className="relative flex items-center">
            <button onClick={handlePrev} className="absolute left-0 z-10 p-2 ">
              <FaChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex overflow-hidden w-full">
              <div
                className="flex transition-transform ease-in-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {matches.map((match, index) => (
                  <div
                    key={index}
                    className={`flex-none w-64 px-2 mb-4 ${
                      index === 0 ? "ml-16" : "ml-2"
                    }`}
                  >
                    <MatchCard
                      image={Gambar1}
                      day={match.day}
                      date={match.date}
                      title={match.title}
                      time={match.time}
                      description={match.description}
                      buttonText="Lihat Venue"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handleNext} className="absolute right-0 z-10 p-2 ">
              <FaChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LandingPage;
