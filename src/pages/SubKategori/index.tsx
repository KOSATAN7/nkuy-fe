import ActionButton from "@/components/Button/ActionButton";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";

const SubKategori: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  useEffect(() => {
    setTitle("Kelola Data Sub Kategori");
    setButtonLabel("Tambah Sub Kategori");
    setButtonLink("/subkategori/create");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);
  return (
    <div className="p-5">
      <table className="min-w-full">
        <thead className="border-b-2">
          <tr className="text-center">
            <th className="p-4">No</th>
            <th className="p-4">Kategori</th>
            <th className="p-4">Sub Kategori</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center border-b-2">
          <tr>
            <td className="p-4">1</td>
            <td className="p-4">Kuda Liar</td>
            <td className="p-4">Kuda Cuki</td>
            <td className="p-4">
              <ActionButton updatePath={`/kategori`} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubKategori;
