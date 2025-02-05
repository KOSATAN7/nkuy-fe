import Toggle from "@/components/Button/Toggle";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect, useState } from "react";
import ActionButton from "@/components/Button/ActionButton";
import { Provider } from "@/utils/interface";
import {
  deleteProvider,
  getProvider,
  putStatusProvider,
} from "@/service/index";
import Swal from "sweetalert2";

const KelolaProvider = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [providerData, setProviderData] = useState<Provider[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const venueId = sessionStorage.getItem("venueId");
      const token = sessionStorage.getItem("token");

      if (!token || !venueId) {
        throw new Error("Login Mas");
      }

      const response = await getProvider(Number(venueId), token);

      const formattedData = response.data.map((item: any) => ({
        id: item.provider.id,
        nama: item.provider.nama,
        no_rek: item.provider.no_rek,
        penerima: item.provider.penerima,
        foto:
          item.provider.foto ||
          "https://dummyimage.com/600x400/caced8/000000.png&text=Gambar+Tidak+Tersedia",
        status: item.provider.status,
      }));

      setProviderData(formattedData);
    };

    fetchData();
  }, []);

  const handleToggle = async (id: number, currentStatus: string) => {
    try {
      const token = sessionStorage.getItem("token");
      const venueId = sessionStorage.getItem("venueId");
      if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login ulang.");
      }
      const newStatus = currentStatus === "aktif" ? "tidak_aktif" : "aktif";

      await putStatusProvider(Number(venueId), id, token);

      setProviderData((prevData) =>
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

  useEffect(() => {
    setTitle("Kelola Provider");
    setButtonLabel("Tambah Provider");
    setButtonLink("/admin_venue/kelola_provider/create");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  const handleDelete = async (id: number) => {
    const token = sessionStorage.getItem("token");
    const venueId = sessionStorage.getItem("venueId");

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
      text: "Provider yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProvider(Number(venueId), id, token);

          setProviderData((prevData) =>
            prevData.filter((item) => item.id !== id)
          );

          Swal.fire({
            title: "Dihapus!",
            text: "Provider berhasil dihapus.",
            icon: "success",
            confirmButtonText: "OK",
          });
        } catch (error) {
          console.error("Gagal menghapus provider:", error);

          Swal.fire({
            title: "Gagal!",
            text: "Terjadi kesalahan saat menghapus provider.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  return (
    <div>
      <table className="min-w-full">
        <thead className="border-b-2">
          <tr className="text-center">
            <th className="p-4">No</th>
            <th className="p-4">Foto Provider</th>
            <th className="p-4">Nama Provider</th>
            <th className="p-4">No. Rekening/Telp</th>
            <th className="p-4">Nama Penerima</th>
            <th className="p-4">Status</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center border-b-2">
          {providerData.map((row, index) => (
            <tr key={row.id}>
              <td className="p-4">{index + 1}</td>
              <td className="flex justify-center p-4">
                <img src={row.foto} className="w-28 h-12" />
              </td>
              <td className="p-4">{row.nama}</td>
              <td className="p-4">{row.no_rek}</td>
              <td className="p-4">{row.penerima}</td>
              <td className="p-4">
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

export default KelolaProvider;
