import ActionButton from "@/components/Button/ActionButton";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { getPertandingan } from "@/service/index";
import { Pertandingan } from "@/utils/interface";
import { useEffect, useState } from "react";

const PertandinganPage = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [pertandinganData, setPertandinganData] = useState<Pertandingan[]>([]);

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
              <td className="p-4">{row.status}</td>
              <td className="p-4">
                <ActionButton updatePath={`/pertandingan/update/${row.id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PertandinganPage;
