import React from "react";
import MainLayout from "../LandingPage/Layout";
import { AboutUs, TeamSection } from "./components/TentangCard";

const HomePage: React.FC = () => {
  const aboutUsData = {
    title: "Tentang Kami",
    subtitle: "SIAPA KITA ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  const teamData = [
    { id: "10122048", name: "Fahri Arsyah" },
    { id: "10122054", name: "Rifqi Muhammad H" },
    { id: "10122067", name: "Rangga Krisna" },
    { id: "10122069", name: "Naufal Ramdhan R" },
    { id: "10122073", name: "M Iqbal Januar" },
    { id: "10122074", name: "M Irsyad Fatahillah" },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
        <AboutUs
          title={aboutUsData.title}
          subtitle={aboutUsData.subtitle}
          description={aboutUsData.description}
        />

        <TeamSection teamData={teamData} />
      </div>
    </MainLayout>
  );
};

export default HomePage;
