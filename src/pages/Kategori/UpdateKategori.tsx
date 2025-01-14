import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";

const UpdateKategori: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  useEffect(() => {
    setTitle("Ubah Data Kategori");
    setButtonLabel("Kembali");
    setButtonLink("/kategori");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  
  return (
    <div className="p-10 flex flex-col h-full">
      <div className="flex-1">
        <h1 className="pb-2">Nama Kategori</h1>
        <input
          type="text"
          className="border-2 border-gray-300 focus:outline-none w-1/4 p-2 rounded-lg"
          placeholder="Masukkan Nama Kategori"
        />
      </div>

      <div className="pt-6">
        <button
          className="bg-primary1 text-white px-4 py-2 rounded-lg"
        >
          Tambah Data
        </button>
      </div>
    </div>
  );
};

export default UpdateKategori;
