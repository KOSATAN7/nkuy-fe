import React from "react";
import MainLayout from "../UserPage/LandingPage/Layout";
import DetailVenueCard from "./components/DetailVenueCard";

const venueData = {
  name: "COFFE TOFFE",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  capacity: 40,
  location: {
    city: "Bandung",
    address: "Jl. Setiabudi No.12, Hegarmanah, Kec. Cidadap, Kota Bandung, Jawa Barat 40531",
  },
  images: [
    "/src/assets/1.png",
    "/src/assets/2.png",
    "/src/assets/3.png",
    "/src/assets/4.png",
  ],
  reviews: [
    {
      name: "Irsyaad Fatahillah",
      rating: 5,
      comment: "Bagus banget tempatnya! Pelayanannya juga ramah.",
    },
    {
      name: "Irsyaad Fatahillah",
      rating: 4,
      comment: "Kopinya enak, tempatnya cozy, recommended!",
    },
    {
      name: "Irsyaad Fatahillah",
      rating: 5,
      comment: "Suka banget nongkrong di sini, bakal sering balik lagi.",
    },
    {
      name: "Irsyaad Fatahillah",
      rating: 4,
      comment: "Tempat nyaman buat kerja atau nongkrong santai.",
    },
    {
      name: "Irsyaad Fatahillah",
      rating: 4,
      comment: "Pelayanannya sangat memuaskan.",
    },
    {
      name: "Irsyaad Fatahillah",
      rating: 3,
      comment: "Harga terjangkau, tapi ada beberapa yang perlu ditingkatkan.",
    },
  ],
};

const DetailVenue: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center py-10">
        <DetailVenueCard venue={venueData} />
      </div>
    </MainLayout>
  );
};

export default DetailVenue;
