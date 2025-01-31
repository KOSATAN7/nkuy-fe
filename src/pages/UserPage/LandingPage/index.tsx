import { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MatchCard from "./components/MatchCard";
import MainLayout from "./Layout";
import Gambar1 from "@/assets/Kuda1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState<{ [key: string]: number }>({});
  const [activeLeague, setActiveLeague] = useState("Liga 1");
  const leagueSliderRef = useRef<Slider | null>(null);
  const matchSliderRefs = useRef<{ [key: string]: Slider | null }>({});
  const sliderRefs = useRef<{ [key: string]: Slider | null }>({});

  type Match = {
    day: string;
    date: string;
    title: string;
    time: string;
    description: string;
  };

  const allMatches: { [key: string]: Match[] } = {
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
    ISC: [
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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => setCurrentIndex((prev) => ({ ...prev, [activeLeague]: index })),
  };

  useEffect(() => {
    setCurrentIndex((prev) => ({ ...prev, [activeLeague]: 0 }));
    sliderRefs.current[activeLeague]?.slickGoTo(0);
  }, [activeLeague]);

  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-4xl font-medium">Mau nonton apa hari ini?</p>
          <input
            type="text"
            className="w-1/2 py-3 mt-6 rounded-full px-6 text-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
            placeholder="Timnas Indonesia vs Argentina"
          />
        </div>
      </div>

      {/* 🔥 League Selector */}
      <div className="flex flex-col items-center mt-12 w-full">
        <div className="flex items-center w-full max-w-4xl">
          {/* Tombol navigasi kiri */}
          <button
            onClick={() => leagueSliderRef.current?.slickPrev()}
            className="flex items-center justify-center mr-2"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Slider Liga */}
          <div className="w-full overflow-hidden px-2">
            <Slider
              ref={(el) => (leagueSliderRef.current = el)}
              {...{
                slidesToShow: 6,
                slidesToScroll: 1, 
                infinite: false,
                arrows: false,
              }}
            >
              {Object.keys(allMatches).map((league, index) => (
                <div className="w-full">
                <button
                  key={index}
                  onClick={() => setActiveLeague(league)}
                  className={`px-6 w-full py-2 border-2 rounded-full text-sm font-medium transition ${activeLeague === league ? "bg-primary1 text-white" : "bg-white text-black"
                    } hover:bg-primary1koma2 hover:text-white`}
                >
                  {league}
                </button>
                </div>
              ))}
            </Slider>
          </div>

          {/* Tombol navigasi kanan */}
          <button
            onClick={() => leagueSliderRef.current?.slickNext()}
            className="flex items-center justify-center ml-2"
          >
            <FaChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>


      {/*Slider Section */}
      <div className="relative w-full mx-auto mt-12">
        {currentIndex[activeLeague] > 0 && (
          <button
            onClick={() => (sliderRefs.current[activeLeague] as Slider)?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-white to-transparent py-40 px-4" >
            <FaChevronLeft className="text-black w-6 h-6" />
          </button>
        )}

        <Slider
          ref={(el) => {
            if (el && !sliderRefs.current[activeLeague]) {
              sliderRefs.current[activeLeague] = el;
            }
          }}
          {...settings}
        >
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

        {currentIndex[activeLeague] < matches.length - 4 && (
          <button
            onClick={() => (sliderRefs.current[activeLeague] as Slider)?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-white to-transparent py-40 px-4">
            <FaChevronRight className="text-black w-6 h-6" />
          </button>
        )}
      </div>

    </MainLayout >
  );
};

export default LandingPage;