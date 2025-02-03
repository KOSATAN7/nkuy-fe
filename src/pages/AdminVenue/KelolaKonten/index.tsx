import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";
import foto from "@/assets/people/blek.jpg";
import ContentCard from "./components/ContentCard";

const KelolaKonten = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("Kelola Konten");
    setButtonLabel("Buat Konten");
    setButtonLink("/admin_venue/kelola_konten/create");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  const DummyData = [
    {
      image: foto,
      title: "Indonesia VS Vietnam",
      time: "Senin, 13 Januari 2025",
      cabor: "OLAHRAGA - SEPAKBOLA",
      description: "Saksikan Pertandingan Indonesia VS Vietnam sekarang juga!",
    },
    {
      image: foto,
      title: "Indonesia VS Vietnam",
      time: "Senin, 13 Januari 2025",
      cabor: "OLAHRAGA - SEPAKBOLA",
      description: "Saksikan Pertandingan Indonesia VS Vietnam sekarang juga!",
    },
    {
      image: foto,
      title: "Indonesia VS Vietnam",
      time: "Senin, 13 Januari 2025",
      cabor: "OLAHRAGA - SEPAKBOLA",
      description: "Saksikan Pertandingan Indonesia VS Vietnam sekarang juga!",
    },
    {
      image: foto,
      title: "Indonesia VS Vietnam",
      time: "Senin, 13 Januari 2025",
      cabor: "OLAHRAGA - SEPAKBOLA",
      description: "Saksikan!",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-4 h-full gap-5">
        {DummyData.map((data, index) => (
          <ContentCard
            key={index}
            image={data.image}
            title={data.title}
            time={data.time}
            cabor={data.cabor}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default KelolaKonten;
