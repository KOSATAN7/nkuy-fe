import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect, useState } from "react";
import ContentCard from "./components/ContentCard";
import { Konten } from "@/utils/interface";
import {
  getPertandinganByVenue,
  deletePertandinganByVenue,
} from "@/service/index";
import Swal from "sweetalert2";

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
    const venueId = sessionStorage.getItem("venueId");
    const token = sessionStorage.getItem("token");

    if (!token || !venueId) {
      Swal.fire({
        title: "Error!",
        text: "Anda harus login terlebih dahulu!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Konten yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deletePertandinganByVenue(Number(venueId), token, id);
          setKontenData((prevData) =>
            prevData.filter((item) => item.id !== id)
          );

          Swal.fire({
            title: "Dihapus!",
            text: "Konten berhasil dihapus.",
            icon: "success",
            confirmButtonText: "OK",
          });
        } catch (error) {
          console.error("Gagal menghapus konten:", error);

          Swal.fire({
            title: "Gagal!",
            text: "Terjadi kesalahan saat menghapus konten.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    });
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
