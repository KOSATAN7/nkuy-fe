import Toggle from "@/components/Button/Toggle";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";
import foto from "@/assets/gopay.svg";
import ActionButton from "@/components/Button/ActionButton";

const KelolaProvider = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

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

  const DummyData = [
    {
      id: 1,
      image: foto,
      nama_provider: "Gopay",
      no_rekening: "0987654321",
      nama_penerima: "Obet Kuda",
      status: "aktif",
    },
  ];
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
          {DummyData.map((row, index) => (
            <tr key={row.id}>
              <td className="p-4">{index + 1}</td>
              <td className="flex justify-center p-4">
                <img src={row.image} className="w-28 h-12" />
              </td>
              <td className="p-4">{row.nama_provider}</td>
              <td className="p-4">{row.no_rekening}</td>
              <td className="p-4">{row.nama_penerima}</td>
              <td className="p-4 items-center justify-center">
                <Toggle
                  isOn={row.status === "aktif"}
                  onToggle={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </td>
              <td className="p-4">
                <ActionButton updatePath={`update/${row.id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KelolaProvider;
