import React from "react";
import MainLayout from "../LandingPage/Layout";
import { AboutUs, TeamSection } from "./components/TentangCard";
import logo from "@/assets/Logo.png";
import PeopleCard from "./components/PeopleCard";
import obet from "@/assets/people/obet.jpg";
import blek from "@/assets/people/blek.jpg";
import rifqi from "@/assets/people/rifqi.jpg";

const HomePage: React.FC = () => {
  const teamData = [
    { image: obet, id: "10122048", name: "Fahri Arsyah" },
    { image: rifqi, id: "10122054", name: "Rifqi Muhammad H" },
    { image: logo, id: "10122067", name: "Rangga Krisna" },
    { image: logo, id: "10122069", name: "Naufal Ramdhan R" },
    { image: blek, id: "10122073", name: "M Iqbal Januar" },
    { image: logo, id: "10122074", name: "M Irsyad Fatahillah" },
  ];

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center">
        <div className="shadow-xl flex justify-between w-9/12 rounded-2xl items-center bg-white  px-10 py-10">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="w-1/2">
            <h1 className="font-semibold">Tentang Kami</h1>
            <hr className="w-1/5 border border-black mt-2" />
            <h2 className="font-bold text-2xl mt-3">SIAPA KITA?</h2>
            <p className="text-sm">
              NobarKuy! adalah aplikasi yang memudahkan pencarian dan reservasi
              venue untuk nonton bareng!. Kalian bisa menemukan tempat, melihat
              fasilitas, serta memesan makanan langsung melalui aplikasi.
              Pengelola venue dapat mengelola informasi dan ulasan, Dengan
              NobarKuy!, pengalaman nobar menjadi lebih praktis, terorganisir,
              dan menyenangkan.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10 w-9/12">
          {teamData.map((data, index) => (
            <PeopleCard
              key={index}
              image={data.image}
              nim={data.id}
              name={data.name}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
