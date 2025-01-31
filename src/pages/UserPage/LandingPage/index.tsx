import MatchCard from "./components/MatchCard";
import MainLayout from "./Layout";
import Gambar1 from "@/assets/Kuda1.jpg";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider, { Settings } from "react-slick";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLeague, setActiveLeague] = useState("Liga 1");
  const slider = useRef<Slider | null>(null);

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

  const matches = allMatches[activeLeague];

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    console.log("Slider Ref:", slider.current);
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        {/* Search Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-4xl font-medium text-center">
            Mau nonton apa hari ini?
          </p>
          <input
            type="text"
            className="w-1/2 py-3 mt-6 rounded-full px-6 text-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Timnas Indonesia vs Argentina"
          />
        </div>

        {/* League Selector */}
        <div className="flex items-center justify-center space-x-4 mt-10">
          <button onClick={() => slider.current?.slickPrev()}>
            <FaChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          {Object.keys(allMatches).map((league, index) => (
            <button
              key={index}
              onClick={() => setActiveLeague(league)}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                activeLeague === league
                  ? "bg-primary1 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-primary1koma2 hover:text-white`}
            >
              {league}
            </button>
          ))}
          <button onClick={() => slider.current?.slickNext()}>
            <FaChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Slider Section */}
        <div className="relative w-full mx-auto mt-6">
          <Slider ref={slider} {...settings}>
            {matches.map((data, index) => (
              <div key={index} className="w-full p-4">
                <MatchCard
                  image={Gambar1}
                  day={data.day}
                  date={data.date}
                  title={data.title}
                  time={data.time}
                  description={data.description}
                  buttonText="Tonton Sekarang"
                />
              </div>
            ))}
          </Slider>

          {/* Slider Navigation Buttons */}
          <button
            onClick={() => slider.current?.slickPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
          >
            <KeyboardArrowLeft className="text-primary110" />
          </button>
          <button
            onClick={() => slider.current?.slickNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
          >
            <KeyboardArrowRight className="text-primary110" />
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default LandingPage;
