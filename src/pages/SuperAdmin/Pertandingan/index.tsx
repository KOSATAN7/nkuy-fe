import ActionButton from "@/components/Button/ActionButton";
import Toggle from "@/components/Button/Toggle";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import {
  deletePertandingan,
  getPertandingan,
  putStatusPertandingan,
} from "@/service/index";
import { Pertandingan } from "@/utils/interface";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PertandinganPage = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [pertandinganData, setPertandinganData] = useState<Pertandingan[]>([]);

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Hapus Pertandingan?",
      text: "Apakah Anda yakin ingin menghapus Pertandingan ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Batal",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          throw new Error("Token tidak ditemukan. Silakan login ulang.");
        }

        await deletePertandingan(id, token);
        setPertandinganData(pertandinganData.filter((user) => user.id !== id));
        Swal.fire({
          title: "Berhasil!",
          text: "Pengguna berhasil dihapus.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        console.error("Gagal menghapus pengguna:", error);
        Swal.fire({
          title: "Gagal!",
          text: "Terjadi kesalahan saat menghapus pengguna.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      if (token !== null) {
        const result = await getPertandingan(token);
        setPertandinganData(result.data.data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("kelola Data Pertandingan");
    setButtonLabel("Tambah Pertandingan");
    setButtonLink("/pertandingan/create");
    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  const handleToggle = async (id: number, currentStatus: string) => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login ulang.");
      }
      const newStatus = currentStatus === "aktif" ? "tidak_aktif" : "aktif";

      await putStatusPertandingan(id, token);

      setPertandinganData((prevData) =>
        prevData.map((venue) =>
          venue.id === id ? { ...venue, status: newStatus } : venue
        )
      );
    } catch (error) {
      console.error("Gagal memperbarui status:", error);
      Swal.fire({
        title: "Gagal!",
        text: "Terjadi kesalahan saat memperbarui status.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <table className="min-w-full">
        <thead className="border-b-2">
          <tr className="text-center">
            <th className="p-4">No</th>
            <th className="p-4">Liga</th>
            <th className="p-4">Pertandingan</th>
            <th className="p-4">Tanggal</th>
            <th className="p-4">Waktu</th>
            <th className="p-4">Status</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center border-b-2">
          {pertandinganData.map((row, index) => (
            <tr key={row.id}>
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{row.liga}</td>
              <td className="p-4">{row.liga}</td>
              <td className="p-4">{row.tanggal_pertandingan}</td>
              <td className="p-4">{row.waktu_pertandingan}</td>
              <td className="flex justify-center p-4">
                <Toggle
                  isOn={row.status === "aktif"}
                  onToggle={() => handleToggle(row.id, row.status)}
                />
              </td>
              <td className="p-4">
                <ActionButton
                  updatePath={`/pertandingan/update/${row.id}`}
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

export default PertandinganPage;
