import ActionButton from "@/components/Button/ActionButton";
import Toggle from "@/components/Button/Toggle";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { deleteVenue, getVenue, putStatusVenue } from "@/service/index";
import { Venue } from "@/utils/interface";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const VenuePage = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [venueData, setVenueData] = useState<Venue[]>([]);

  useEffect(() => {
    setTitle("kelola Data Venue");
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
      const token = sessionStorage.getItem("token");
      if (token != null) {
        const result = await getVenue(token);
        setVenueData(result.data.data);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Hapus Pengguna?",
      text: "Apakah Anda yakin ingin menghapus pengguna ini?",
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

        await deleteVenue(id, token);
        setVenueData(venueData.filter((venue) => venue.id !== id));
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

  const handleToggle = async (id: number, currentStatus: string) => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login ulang.");
      }
      const newStatus = currentStatus === "aktif" ? "tidak_aktif" : "aktif";

      await putStatusVenue(id, token);

      setVenueData((prevData) =>
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
            <th className="p-4">Nama Venue</th>
            <th className="p-4">Alamat</th>
            <th className="p-4">Fasilitas</th>
            <th className="p-4">Kapasitas</th>
            <th className="p-4">status</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center border-b-2">
          {venueData.map((row, index) => (
            <tr key={row.id}>
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{row.nama}</td>
              <td className="p-4">{row.alamat}</td>
              <td className="p-4">{row.fasilitas.join(", ")}</td>
              <td className="p-4">{row.kapasitas}</td>
              <td className="flex justify-center p-4">
                <Toggle
                  isOn={row.status === "aktif"}
                  onToggle={() => handleToggle(row.id, row.status)}
                />
              </td>
              <td className="p-4">
                <ActionButton
                  updatePath={`update/${row.id}`}
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

export default VenuePage;
