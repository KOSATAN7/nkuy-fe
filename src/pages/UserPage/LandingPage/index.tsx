import { useRef, useState, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MatchCard from "./components/MatchCard";
import MainLayout from "./Layout";
import Gambar1 from "@/assets/Kuda1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getPertandinganAktif } from "@/service/ServiceInfobar";
import { useNavigate } from "react-router-dom";
import { Pertandingan, MatchCardData } from "@/utils/interface";

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeLeague, setActiveLeague] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ [key: string]: MatchCardData[] }>({});
  const [allMatches, setAllMatches] = useState<MatchCardData[]>([]);
  const [leagues, setLeagues] = useState<string[]>([]);
  const leagueSliderRef = useRef<Slider | null>(null);
  const matchSliderRef = useRef<Slider | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await getPertandinganAktif();
        const data = response.data.data;
        const groupedMatches: { [key: string]: MatchCardData[] } = {};
        const allMatchesData: MatchCardData[] = [];
        const leagueSet = new Set<string>();

        data.forEach((match: Pertandingan) => {
          const league = match.liga || "Unknown League";
          leagueSet.add(league);

          const matchData: MatchCardData = {
            id: match.id,
            image: Gambar1,
            day: new Date(match.tanggal_pertandingan).toLocaleDateString("id-ID", { weekday: "long" }),
            date: match.tanggal_pertandingan,
            time: match.waktu_pertandingan,
            title: `${match.tim_tuan_rumah} vs ${match.tim_tamu}`,
            description: `Pertandingan antara ${match.tim_tuan_rumah} dan ${match.tim_tamu} di ${match.liga}`,
          };

          allMatchesData.push(matchData);

          if (!groupedMatches[league]) {
            groupedMatches[league] = [];
          }
          groupedMatches[league].push(matchData);
        });

        setMatches(groupedMatches);
        setAllMatches(allMatchesData);
        setLeagues(Array.from(leagueSet));
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  const handleLeagueClick = (league: string) => {
    setActiveLeague((prev) => (prev === league ? null : league));
    setCurrentIndex(0);
    matchSliderRef.current?.slickGoTo(0);
  };

  const matchSliderSettings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => setCurrentIndex(index),
  };

  const leagueSliderSettings: Settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
  };

  const selectedMatches = activeLeague ? matches[activeLeague] || [] : allMatches;
  const showLeftArrow = currentIndex > 0;
  const showRightArrow = currentIndex < selectedMatches.length - 4;
  const showMatchNavigation = selectedMatches.length >= 4;

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

      {/* League Selector */}
      <div className="flex flex-col items-center mt-16 w-full">
        <div className="flex items-center w-full max-w-4xl">
          <button
            onClick={() => leagueSliderRef.current?.slickPrev()}
            className="flex items-center justify-center mr-2"
          >
            <FaChevronLeft className="w-6 h-6  text-gray-700 mr-2" />
          </button>

          <div className="w-full overflow-hidden px-2">
            <Slider ref={leagueSliderRef} {...leagueSliderSettings}>
              {leagues.map((league, index) => (
                <div key={index} className="w-full">
                  <button
                    onClick={() => handleLeagueClick(league)}
                    className={`px-6 w-full py-2 border-2 rounded-full text-sm font-medium transition ${activeLeague === league ? "bg-primary1 text-white" : "bg-white text-black"
                      } hover:bg-primary1koma2 hover:text-white`}
                  >
                    {league}
                  </button>
                </div>
              ))}
            </Slider>
          </div>

          <button
            onClick={() => leagueSliderRef.current?.slickNext()}
            className="flex items-center justify-center ml-2"
          >
            <FaChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Matches Slider */}
      <div className="relative w-full mx-auto mt-12">
        {showMatchNavigation && showLeftArrow && (
          <button
            onClick={() => matchSliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-white to-transparent py-60 px-4"
          >
            <FaChevronLeft className="text-black w-6 h-6" />
          </button>
        )}

        <Slider ref={matchSliderRef} {...matchSliderSettings}>
          {selectedMatches.map((data, index) => (
            <div key={index} className="w-full p-4">
              <MatchCard
                image={Gambar1}
                day={data.day}
                date={data.date}
                title={data.title}
                time={data.time}
                description={data.description}
                buttonText="Tonton Sekarang"
                onClick={() => navigate(`/venuelist/${data.id}`)}
              />
            </div>
          ))}
        </Slider>

        {showMatchNavigation && showRightArrow && (
          <button
            onClick={() => matchSliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-white to-transparent py-60 px-4"
          >
            <FaChevronRight className="text-black w-6 h-6" />
          </button>
        )}
      </div>
    </MainLayout>
  );
};

export default LandingPage;
