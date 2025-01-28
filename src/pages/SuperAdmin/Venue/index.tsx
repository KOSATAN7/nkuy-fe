import ActionButton from "@/components/Button/ActionButton";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect, useState } from "react";

const VenuePage = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [venueData,setVenueData] = useState()
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
            <th className="p-4">Harga Sewa</th>
            <th className="p-4">Status</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center border-b-2">
          {/* {pertandinganData.map((row, index) => (
            <tr key={row.id}>
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{row.liga}</td>
              <td className="p-4">{row.liga}</td>
              <td className="p-4">{row.tanggal_pertandingan}</td>
              <td className="p-4">{row.waktu_pertandingan}</td>
              <td className="p-4">{row.status}</td>
              <td className="p-4">
                <ActionButton updatePath={`/kategori/update/${row.id}`} />
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  )
};

export default VenuePage;
