import ActionButton from "@/components/Button/ActionButton";
import Toggle from "@/components/Button/Toggle";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import {
  deleteMetodePembayaran,
  getMetodePembayaran,
  putStatusPembayaran,
} from "@/service/index";
import { getMetodePembayarans } from "@/utils/interface";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MetodePembayaran = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [pembayaranData, setPembayaranData] = useState<getMetodePembayarans[]>(
    []
  );

  useEffect(() => {
    setTitle("Metode Pembayaran");
    setButtonLabel("Tambah Metode");
    setButtonLink("/metode_pembayaran/create");
    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Login Gobloggg!!!!");
      }
      const response = await getMetodePembayaran(token);
      setPembayaranData(response.data.data);
    };
    fetchData();
  }, []);

  const handleToggle = async (id: number, currentStatus: string) => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login ulang.");
      }
      const newStatus = currentStatus === "aktif" ? "tidak_aktif" : "aktif";

      await putStatusPembayaran(id, token);

      setPembayaranData((prevData) =>
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

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Hapus Metode Pembayaran?",
      text: "Apakah Anda yakin ingin menghapus Metode Pembayaran ini?",
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

        await deleteMetodePembayaran(id, token);
        setPembayaranData(pembayaranData.filter((user) => user.id !== id));
        Swal.fire({
          title: "Berhasil!",
          text: "Metode Pembayaran berhasil dihapus.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        console.error("Gagal menghapus Metode Pembayaran:", error);
        Swal.fire({
          title: "Gagal!",
          text: "Terjadi kesalahan saat menghapus Metode Pembayaran.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div>
      <table className="min-w-full">
        <thead className="border-b-2">
          <tr className="text-center">
            <th className="p-4">No</th>
            <th className="p-4">Nama Metode</th>
            <th className="p-4">Deskripsi</th>
            <th className="p-4">Status</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center border-b-2">
          {pembayaranData.map((row, index) => (
            <tr key={row.id}>
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{row.nama}</td>
              <td className="p-4">{row.deskripsi}</td>
              <td className="flex justify-center p-4">
                <Toggle
                  isOn={row.status === "aktif"}
                  onToggle={() => handleToggle(row.id, row.status)}
                />
              </td>
              <td className="p-4">
                <ActionButton
                  updatePath={`/metode_pembayaran/update/${row.id}`}
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

export default MetodePembayaran;
