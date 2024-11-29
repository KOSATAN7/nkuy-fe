import React, { useEffect, useState } from "react";
import { useHeaderContext } from "../../components/SideNav/components/HeaderContext";
import ActionButton from "@/components/Button/ActionButton";
import { deleteKategori, getKategori } from "@/service/index";
import Alert from "@/components/Alert";

interface KategoriData {
  id: number;
  nama: string;
}

const Kategori: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [kategoriData, setKategoriData] = useState<KategoriData[]>([]);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getKategori();
      setKategoriData(result.data.payload);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Kelola Data Kategori");
    setButtonLabel("Tambah Kategori");
    setButtonLink("/kategori/create");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
        setAlertType(null);
      }, 2000);
  
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);
  

  const handleDelete = async (id: number) => {
    try {
      const response = await deleteKategori(id);
      if (response.status === 200) {
        setKategoriData((prevData) => prevData.filter((kategori) => kategori.id !== id));
        setAlertMessage("Kategori berhasil dihapus.");
        setAlertType("success");
      }
    } catch (error) {
      console.error("Error deleting kategori:", error);
      setAlertMessage("Gagal menghapus kategori.");
      setAlertType("error");
    }
  };

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
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center border-b-2">
          {kategoriData.map((row, index) => (
            <tr key={row.id}>
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{row.nama}</td>
              <td className="p-4">
                <ActionButton updatePath={`/kategori/update/${row.id}`} onDelete={() => handleDelete(row.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Kategori;
