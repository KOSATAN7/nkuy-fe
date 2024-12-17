import React, { useEffect, useState } from "react";
import { useHeaderContext } from "../../components/SideNav/components/HeaderContext";
import { deleteVenue, getVenue } from "@/service/index";
import Alert from "@/components/Alert";
import ActionButton from "@/components/Button/ActionButton";

interface VenueData {
  id: number;
  nama: string;
  alamat: string;
  kontak: string;
  status: string;
}

const Venue: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [venueData, setVenueData] = useState<VenueData[]>([]);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  useEffect(() => {
    setTitle("Kelola Data Venue");
    setButtonLabel("Tambah Venue");
    setButtonLink("/venue/create");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await getVenue();
      setVenueData(result.data.payload)
    };
    fetchData();
  },[])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "tersedia":
        return (
          <span className="rounded-xl text-sm bg-primary1 p-2 text-white ">
            Tersedia
          </span>
        );
      case "tidak_tersedia":
        return (
          <span className="rounded-xl text-sm  bg-danger1 p-2 text-white">
            Tidak Tersedia
          </span>
        );
      default:
        return null;
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await deleteVenue(id);
      if (response.status === 200) {
        setVenueData((prevData) => prevData.filter((film) => film.id !== id));
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
            <th className="p-4">Nama</th>
            <th className="p-4">Alamat</th>
            <th className="p-4">Kontak</th>
            <th className="p-4">Status</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center border-b-2">
          {venueData.map((row, index) => (
            <tr key={row.id}>
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{row.nama}</td>
              <td className="p-4">
                {row.alamat || "Alamat Tidak Tersedia"}
              </td>
              <td className="p-4">
                {row.kontak}
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

export default Venue;
