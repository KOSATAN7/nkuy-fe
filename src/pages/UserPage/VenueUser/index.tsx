import { SetStateAction, useState } from "react";
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
import { useEffect } from "react";

const venues = [
  { id: 1, name: "Cafe De'u", location: "Bandung", rating: 4, capacity: 50, image: Gambar1 },
  { id: 2, name: "Grand Hall", location: "Jakarta", rating: 5, capacity: 100, image: Gambar1 },
  { id: 3, name: "Sunset Lounge", location: "Bali", rating: 4.5, capacity: 80, image: Gambar1 },
  { id: 4, name: "Mountain View", location: "Malang", rating: 4, capacity: 60, image: Gambar1 },
  { id: 5, name: "Ocean Breeze", location: "Surabaya", rating: 4.2, capacity: 70, image: Gambar1 },
  { id: 6, name: "Skyline Rooftop", location: "Yogyakarta", rating: 4.8, capacity: 90, image: Gambar1 },
  { id: 7, name: "Crystal Ballroom", location: "Medan", rating: 4.7, capacity: 120, image: Gambar1 },
  { id: 8, name: "Garden View", location: "Semarang", rating: 4.3, capacity: 65, image: Gambar1 },
  { id: 9, name: "Seaside Pavilion", location: "Makassar", rating: 4.6, capacity: 85, image: Gambar1 },
  { id: 10, name: "Golden Palace", location: "Bandung", rating: 4.9, capacity: 110, image: Gambar1 },
  { id: 11, name: "Seaside Pavilion", location: "Makassar", rating: 4.6, capacity: 85, image: Gambar1 },
  { id: 12, name: "Golden Palace", location: "Bandung", rating: 4.9, capacity: 110, image: Gambar1 },
  { id: 13, name: "Seaside Pavilion", location: "Makassar", rating: 4.6, capacity: 85, image: Gambar1 },
  { id: 14, name: "Golden Palace", location: "Bandung", rating: 4.9, capacity: 110, image: Gambar1 },
  { id: 15, name: "Seaside Pavilion", location: "Makassar", rating: 4.6, capacity: 85, image: Gambar1 },
  { id: 16, name: "Golden Palace", location: "Bandung", rating: 4.9, capacity: 110, image: Gambar1 },
];

const CustomPrevArrow = (props: { className: any; style: any; onClick: any; currentSlide: number; }) => {
  const { className, style, onClick, currentSlide } = props;
  return (
    currentSlide !== 0 && (
      <HiChevronLeft
        className={`${className} text-black w-8 h-8 absolute z-10 cursor-pointer`}
        style={{ ...style, left: "-40px", top: "50%", transform: "translateY(-50%)" }}
        onClick={onClick}
      />
    )
  );
};

const CustomNextArrow = (props: { className: any; style: any; onClick: any; slideCount: number; currentSlide: number; slidesToShow: number; }) => {
  const { className, style, onClick, slideCount, currentSlide, slidesToShow } = props;
  return (
    currentSlide < slideCount - slidesToShow && (
      <HiChevronRight
        className={`${className} text-black w-8 h-8 absolute z-10 cursor-pointer`}
        style={{ ...style, right: "-40px", top: "50%", transform: "translateY(-50%)" }}
        onClick={onClick}
      />
    )
  );
};


const VenueList = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [availableVenues, setAvailableVenues] = useState(venues.slice(0, itemsPerPage));
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalPages = Math.ceil(venues.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    setAvailableVenues(venues.slice(startIndex, endIndex));
  }, [currentPage]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
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
        slideCount={venues.length}
        slidesToShow={4}
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <CustomPrevArrow
        currentSlide={currentSlide}
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    beforeChange: (_: any, next: SetStateAction<number>) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={venues.length}
              slidesToShow={3}
              className={undefined}
              style={undefined}
              onClick={undefined}
            />
          ),
          prevArrow: (
            <CustomPrevArrow
              currentSlide={currentSlide}
              className={undefined}
              style={undefined}
              onClick={undefined}
            />
          ),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={venues.length}
              slidesToShow={2}
              className={undefined}
              style={undefined}
              onClick={undefined}
            />
          ),
          prevArrow: (
            <CustomPrevArrow
              currentSlide={currentSlide}
              className={undefined}
              style={undefined}
              onClick={undefined}
            />
          ),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          nextArrow: (
            <CustomNextArrow
              currentSlide={currentSlide}
              slideCount={venues.length}
              slidesToShow={1}
              className={undefined}
              style={undefined}
              onClick={undefined}
            />
          ),
          prevArrow: (
            <CustomPrevArrow
              currentSlide={currentSlide}
              className={undefined}
              style={undefined}
              onClick={undefined}
            />
          ),
        },
      },
    ],
  };

  return (
    <MainLayout>
      {/* Header Event */}
      <div className="relative w-full h-64 mt-10">
        {/* Gambar Latar */}
        <img
          src={Gambar2}
          alt="Event Venue"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent rounded-xl"></div>
        <div className="absolute inset-5 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-4xl font-bold drop-shadow-lg">Persib VS Persija</h2>
            <p className="mt-2 text-lg">Jam Tayang 06.00 WIB</p>
          </div>

          {/* Search Bar */}
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
              <p>Sabtu, 27 Januari 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Terdekat */}
      <div className="p-8 mt-20">
        <h2 className="text-xl ml-12 font-bold mb-2">Terdekatmu!</h2>
        <Slider {...settings} className="relative">
          {venues.map((venue) => (
            <div key={venue.id} className="px-2">
              <VenueCardPortrait venue={venue} />
            </div>
          ))}
        </Slider>

        {/* Section Tersedia */}
        <h2 className="text-xl ml-12 font-bold mt-8 mb-4">Tersedia</h2>
        <div className="mx-4 grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-6 ml-12">
          {availableVenues.map((venue) => (
            <VenueCardLandscape key={venue.id} venue={venue} />
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
