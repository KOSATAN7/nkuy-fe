import SweetAlert from "@/components/Alert/swal";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { getListBooking, patchStatusPesanan } from "@/service/index";
import { formatRupiah } from "@/utils/FormatRupiah";
import { Booking } from "@/utils/interface";
import { useEffect, useState } from "react";

const KelolaBooking = () => {
  const [bookingData, setBookingData] = useState<Booking[]>([]);
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [alertData, setAlertData] = useState({
    show: false,
    title: "",
    text: "",
    type: "info" as "success" | "error" | "warning" | "info",
  });
  const [alertKey, setAlertKey] = useState(0);
  

  useEffect(() => {
    setTitle("Kelola Booking");
    setButtonLabel("");
    setButtonLink("");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      const venueId = sessionStorage.getItem("venueId");
      if (!token || !venueId) {
        throw new Error("Login Mas");
      }
      const response = await getListBooking(Number(venueId), token);
      setBookingData(response.data);
    };
    fetchData();
  }, []);

  const handleStatusChange = async (id: number, newStatus: string) => {
    const token = sessionStorage.getItem("token");
    const venueId = sessionStorage.getItem("venueId");

    if (!token || !venueId) {
      setAlertData({
        show: true,
        title: "Error",
        text: "Anda belum login!",
        type: "error",
      });
      return;
    }

    try {
      await patchStatusPesanan(Number(venueId), id, newStatus, token);
      setBookingData((prevData) =>
        prevData.map((booking) =>
          booking.id === id ? { ...booking, status: newStatus } : booking
        )
      );
      setAlertData({
        show: true,
        title: "Berhasil!",
        text: "Status berhasil diperbarui!",
        type: "success",
      });
      setAlertKey((prevKey) => prevKey + 1);
      
    } catch (error) {
      console.error("Gagal mengupdate status", error);
      setAlertData({
        show: true,
        title: "Error",
        text: "Terjadi kesalahan saat memperbarui status.",
        type: "error",
      });
    }
  };

  return (
    <div className="p-4">
      <table className="min-w-full">
        <thead className="border-b-2 ">
          <tr className="text-center">
            <th className="p-4">No</th>
            <th className="p-4">Jumlah Orang</th>
            <th className="p-4">Total Harga</th>
            <th className="p-4">Bukti Pembayaran</th>
            <th className="p-4">Status</th>
            <th className="p-4">Venue</th>
            <th className="p-4">User</th>
            <th className="p-4">Provider</th>
            <th className="p-4">Menus</th>
          </tr>
        </thead>
        <tbody className="text-center border-b-2">
          {bookingData.map((booking, index) => (
            <tr key={index}>
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{booking.jumlah_orang}</td>
              <td className="p-4">{formatRupiah(booking.total_harga)}</td>
              <td className="p-4 flex justify-center items-center">
                <img
                  src={`https://nobarkuy.icraftds.id/storage/${booking.bukti_pembayaran}`}
                  alt="Bukti Pembayaran"
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </td>
              <td className="p-4">
                <select
                  value={booking.status}
                  onChange={(e) =>
                    handleStatusChange(booking.id, e.target.value)
                  }
                  className={`p-2 border text-white rounded focus:outline-none 
                    ${
                      booking.status === "berhasil"
                        ? "bg-green-500"
                        : booking.status === "dibatalkan"
                        ? "bg-red"
                        : "bg-yellow-500"
                    }`}
                >
                  <option value="menunggu">Menunggu</option>
                  <option value="berhasil">Berhasil</option>
                  <option value="dibatalkan">Dibatalkan</option>
                </select>
              </td>
              <td className="p-4">{booking.venue.nama}</td>
              <td className="p-4">{booking.user.username}</td>
              <td className="p-4">
                {booking.provider ? booking.provider.nama : "-"}
              </td>
              <td className="p-4 text-left">
                <ul className="list-disc list-inside">
                  {booking.menus.map((menu) => (
                    <li key={menu.id}>
                      {menu.nama} - {menu.harga} (x{menu.pivot.jumlah_pesanan})
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SweetAlert {...alertData} />
    </div>
  );
};

export default KelolaBooking;
