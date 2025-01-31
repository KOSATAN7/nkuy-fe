import MatchCard from "./components/MatchCard";
import MainLayout from "./Layout";
import Gambar1 from "@/assets/Kuda1.jpg";
import { useState, useRef } from "react";
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

  const containerRef = useRef<HTMLDivElement>(null);
  const matches = allMatches[activeLeague];
  const cardWidth = 230;
  const visibleCards = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, matches.length - visibleCards));
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center">
        <p className="pb-4 text-4xl font-bold">Mau nonton apa hari ini?</p>
        <input
          type="text"
          className="w-1/2 py-3 rounded-full px-6 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Timnas Indonesia vs Argentina"
        />
      </div>

      {/* Pilihan Liga */}
      <div className="flex items-center justify-center space-x-4 relative mt-8">
        <button className="absolute left-0 z-10 p-2">
          <FaChevronLeft className="w-5 h-5 ml-72 text-gray-700" />
        </button>
        {Object.keys(allMatches).map((league, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveLeague(league);
              setCurrentIndex(0);
            }}
            className={`px-8 py-2 rounded-full text-sm font-medium ${activeLeague === league ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              } hover:bg-blue-400 hover:text-white`}
          >
            {league}
          </button>
        ))}
        <button className="absolute right-0 z-10 p-2">
          <FaChevronRight className="w-5 h-5 mr-72 text-gray-700" />
        </button>
      </div>

      {/* Slider */}
      <div className="py-20">
        <p className="font-semibold text-xl pb-4 px-2">Paling ramai ditunggu!</p>
        <div className="relative flex items-center">
          {/* Tombol Panah Kiri */}
          <button
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-50 py-40 bg-gradient-to-r from-white to-transparent  ${currentIndex === 0 ? "hidden" : "block"
              }`}
          >
            <FaChevronLeft className="w-8 h-8 text-black opacity-100" />
          </button>

          {/* Wrapper Slider */}
          <div className="overflow-hidden w-screen relative">
            <div
              ref={containerRef}
              className="flex py-4 transition-transform ease-in-out duration-3600"
              style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
            >
              {matches.map((match, index) => (
                <div key={index} className="flex-shrink-0 w-[250px] h-full mx-2">
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

          {/* Tombol Panah Kanan */}
          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-50 py-40 bg-gradient-to-l from-white to-transparent  ${currentIndex >= matches.length - visibleCards ? "hidden" : "block"
              }`}
          >
            <FaChevronRight className="w-8 h-8 text-black opacity-100 " />
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default LandingPage;
