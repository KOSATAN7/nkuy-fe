import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";

const CreateVenue: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("Tambah Data Venue");
    setButtonLabel("Kembali");
    setButtonLink("/venue");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  return (
    <>
      <div className="p-10">
      <form className="grid grid-cols-2 gap-5 w-2/3">
        <div>
          <label className="block mb-1 font-medium">Nama</label>
          <input
            type="text"
            placeholder="Tambah Nama"
            className="w-full border-2 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Alamat</label>
          <input
            type="text"
            placeholder="Tambah Alamat"
            className="w-full border-2 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Kontak</label>
          <input
            type="text"
            placeholder="+62 123 - 4567 - 8910"
            className="w-full border-2 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Kota</label>
          <select className="w-full border-2 p-2 rounded">
            <option>Tambah Kota</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Fasilitas</label>
          <input
            type="text"
            placeholder="Tambah Fasilitas"
            className="w-full border-2 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Kapasitas</label>
          <input
            type="text"
            placeholder="Tambah Kapasitas"
            className="w-full border-2 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Foto</label>
          <input
            type="file"
            className="w-full border-2 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Video</label>
          <input
            type="file"
            className="w-full border-2 p-2 rounded"
          />
        </div>
        <div className="col-span-2 text-center mt-5 justify-self-start ">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
          >
            Tambah Data
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CreateVenue;
