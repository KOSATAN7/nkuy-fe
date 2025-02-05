import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect, useState } from "react";
import ContentCard from "./components/ContentCard";
import { Konten } from "@/utils/interface";
import { getPertandinganByVenue, deletePertandinganByVenue } from "@/service/index";

const KelolaKonten = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [kontenData, setKontenData] = useState<Konten[]>([]);

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

  useEffect(() => {
    const fetchData = async () => {
      const venueId = sessionStorage.getItem("venueId");
      const token = sessionStorage.getItem("token");
      if (!venueId || !token) {
        throw new Error("Login Gobloggg!!!");
      }
      const response = await getPertandinganByVenue(Number(venueId), token);
      setKontenData(response.data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const venueId = sessionStorage.getItem("venueId");
      const token = sessionStorage.getItem("token");
      if (!venueId || !token) {
        throw new Error("Login Gobloggg!!!");
      }

      await deletePertandinganByVenue(id, token);
      setKontenData(kontenData.filter((data) => data.id !== id));
      alert("Konten berhasil dihapus!");
    } catch (error) {
      console.error("Error deleting content", error);
      alert("Terjadi kesalahan saat menghapus konten.");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4 h-full gap-5">
        {kontenData.map((data) => (
          <ContentCard
            key={data.id}
            id={data.id}
            image={""}
            title={`${data.tim_tuan_rumah} VS ${data.tim_tamu}`}
            time={data.tanggal_pertandingan}
            cabor={data.cabang_olahraga}
            tim1={data.tim_tuan_rumah}
            tim2={data.tim_tamu}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default KelolaKonten;
