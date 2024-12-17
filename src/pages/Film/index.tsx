import React, { useEffect, useState } from "react";
import { useHeaderContext } from "../../components/SideNav/components/HeaderContext";
import ActionButton from "@/components/Button/ActionButton";
import { deleteFilm, getFilm } from "@/service/index";
import Alert  from "@/components/Alert";

interface FilmData {
  id: number;
  judul: string;
  kategori: {
    id: number;
    nama_kategori: string;
  };
  jadwal: number;
  status: string;
}

const Film: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [filmData, setFilmData] = useState<FilmData[]>([]);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    setTitle("Kelola Data Film");
    setButtonLabel("Tambah Film");
    setButtonLink("/film/create");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFilm();
      setFilmData(result.data.payload);
    };
    fetchData();
  }, []);

  function convertMillisToCustomDateTime(millis: number): string {
    const date = new Date(millis);

    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const dayName = days[date.getDay()];

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${dayName}, ${day}/${month}/${year} ${hours}.${minutes}`;
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ongoing":
        return (
          <span className="rounded-xl text-sm bg-primary1 p-2 text-white ">
            On Going
          </span>
        );
      case "comingsoon":
        return (
          <span className="rounded-xl text-sm  bg-warning1 p-2 text-white">
            Coming Soon
          </span>
        );
      case "outdate":
        return (
          <span className="rounded-xl text-sm bg-danger1 p-2 text-white">
            Outdate
          </span>
        );
      default:
        return null;
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await deleteFilm(id);
      if (response.status === 200) {
        setFilmData((prevData) => prevData.filter((film) => film.id !== id));
        setAlertMessage("Film berhasil dihapus.");
        setAlertType("success");
      }
    } catch (error) {
      console.error("Error deleting Film:", error);
      setAlertMessage("Gagal menghapus Film.");
      setAlertType("error");
    }
  };

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
        setAlertType(null);
      }, 2000);
  
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);
  

  return (
    <div className="p-5">
      {alertMessage && alertType && (
        <Alert message={alertMessage} type={alertType} />
      )}
      <table className="min-w-full">
        <thead className="border-b-2">
          <tr className="text-center">
            <th className="p-4">No</th>
            <th className="p-4">Nama Film</th>
            <th className="p-4">Kategori</th>
            <th className="p-4">Jadwal</th>
            <th className="p-4">Status</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center border-b-2">
          {filmData.map((row, index) => (
            <tr key={row.id}>
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{row.judul}</td>
              <td className="p-4">
                {row.kategori.nama_kategori || "Kategori Tidak Tersedia"}
              </td>
              <td className="p-4">
                {convertMillisToCustomDateTime(row.jadwal)}
              </td>
              <td className="p-4">{getStatusBadge(row.status)}</td>
              <td className="p-4">
                <ActionButton
                  updatePath={`/film/update/${row.id}`}
                  onDelete={() => handleDelete(row.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Film;
