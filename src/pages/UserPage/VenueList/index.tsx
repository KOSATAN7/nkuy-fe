import { useState, useEffect } from "react";
import Slider from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import MainLayout from "../LandingPage/Layout";
import Gambar1 from "@/assets/1.png";
import Gambar2 from "@/assets/Kuda1.jpg";
import VenueCardPortrait from "./components/VenueCardPortrait";
import VenueCardLandscape from "./components/VenueCardLanscape";
import Pagination from "@mui/material/Pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getListVenue } from "@/service/ServiceVenue";
import { useParams } from "react-router-dom";
import { Venue, Pertandingan } from "@/utils/interface";
import { getPertandinganAktif } from "@/service/ServiceInfobar";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
  slidesToShow?: number;
}

const CustomPrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
  currentSlide,
}) => {
  return (
    currentSlide !== 0 && (
      <HiChevronLeft
        className={`${className} text-black w-8 h-8 absolute z-10 cursor-pointer`}
        style={{
          ...style,
          left: "-40px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={onClick}
      />
    )
  );
};

const CustomNextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
  slideCount,
  currentSlide,
  slidesToShow,
}) => {
  return (
    currentSlide !== undefined &&
    slideCount !== undefined &&
    slidesToShow !== undefined &&
    currentSlide < slideCount - slidesToShow && (
      <HiChevronRight
        className={`${className} text-black w-8 h-8 absolute z-10 cursor-pointer`}
        style={{
          ...style,
          right: "-40px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={onClick}
      />
    )
  );
};

const VenueList = () => {
  const { pertandinganId } = useParams<{ pertandinganId: string }>();
  const parsedId = pertandinganId ? parseInt(pertandinganId) : undefined;

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [availableVenues, setAvailableVenues] = useState<Venue[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pertandingan, setPertandingan] = useState<Pertandingan | null>(null);

  const totalPages = Math.ceil(availableVenues.length / itemsPerPage);

  useEffect(() => {
    if (!parsedId) {
      setError("Pertandingan ID tidak ditemukan.");
      setLoading(false);
      return;
    }

    const fetchVenues = async () => {
      try {
        setLoading(true);
        const response = await getListVenue(parsedId);

        if (!Array.isArray(response.data)) {
          throw new Error("Data venue bukan array");
        }

        setAvailableVenues(response.data);
      } catch (err) {
        console.error("Error fetching venues:", err);
        setError("Gagal mengambil data venue.");
      } finally {
        setLoading(false);
      }
    };

    const fetchPertandingan = async () => {
      try {
        const response = await getPertandinganAktif();
        const data = response.data.data;
        const match = data.find((match: Pertandingan) => match.id === parsedId);
        if (match) {
          setPertandingan(match);
        }
      } catch (error) {
        console.error("Error fetching pertandingan:", error);
      }
    };

    fetchVenues();
    fetchPertandingan();
  }, [parsedId]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    setAvailableVenues((prev) => prev.slice(startIndex, endIndex));
  }, [currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <CustomNextArrow
        currentSlide={currentSlide}
        slideCount={availableVenues.length}
        slidesToShow={4}
      />
    ),
    prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={availableVenues.length}
              slidesToShow={3}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={availableVenues.length}
              slidesToShow={2}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={availableVenues.length}
              slidesToShow={1}
            />
          ),
          prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
        },
      },
    ],
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <MainLayout>
      <div className="relative w-full h-64 mt-10">
        <img
          src={`https://nobarkuy.icraftds.id/storage/${pertandingan?.foto}`}
          alt="Event Venue"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent rounded-xl"></div>
        <div className="absolute inset-5 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-4xl font-bold drop-shadow-lg">
              {pertandingan
                ? `${pertandingan.tim_tuan_rumah} vs ${pertandingan.tim_tamu}`
                : "Persib vs Persija"}
            </h2>
            <p className="mt-2 text-lg">
              Jam Tayang{" "}
              {pertandingan ? pertandingan.waktu_pertandingan : "06.00 WIB"}
            </p>
          </div>

          <div className="mt-28 mx-auto w-1/2 bg-white rounded-xl px-4 py-2 flex flex-col items-start border border-gray-300">
            <input
              className="w-full text-black focus:outline-none bg-transparent placeholder-gray-500 px-2 py-2 text-left"
              type="text"
              placeholder="Cari tempat yuk!!"
            />
            <button className="mt-1 border text-gray-700 px-6 text-sm rounded-xl border-gray-300 hover:bg-gray-100">
              Kota
            </button>
            <div className="mt-[181px] absolute inset-0 flex flex-col justify-between text-white">
              <p>
                {pertandingan
                  ? new Date(
                      pertandingan.tanggal_pertandingan
                    ).toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Sabtu, 27 Januari 2024"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 mt-20">
        <h2 className="text-xl ml-12 font-bold mb-2">Terdekatmu!</h2>
        <Slider {...settings} className="relative">
          {availableVenues.map((venue) => (
            <div key={venue.id} className="px-2">
              <VenueCardPortrait
                venue={{
                  id: venue.id,
                  name: venue.nama,
                  location: venue.kota,
                  rating: 4.5,
                  capacity: venue.kapasitas,
                  image: venue.foto_utama || Gambar1,
                }}
              />
            </div>
          ))}
        </Slider>

        <h2 className="text-xl ml-12 font-bold mt-8 mb-4">Tersedia</h2>
        <div className="mx-4 grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-6 ml-12">
          {availableVenues.map((venue) => (
            <VenueCardLandscape
              key={venue.id}
              venue={{
                id: venue.id,
                name: venue.nama,
                location: venue.kota,
                rating: 4.5,
                capacity: venue.kapasitas,
                image: venue.foto_utama || Gambar1,
              }}
            />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            siblingCount={1}
            boundaryCount={1}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default VenueList;
