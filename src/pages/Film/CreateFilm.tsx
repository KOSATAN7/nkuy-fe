import React, { useEffect, useState } from "react";
import Alert from "@/components/Alert";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { getKategori, postFilm } from "@/service/index";

interface FilmFormState {
  judul: string;
  kategori: number | null;
  jadwal: string;
  harga: string;
  status: string | null;
}

const CreateFilm: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [kategoriList, setKategoriList] = useState<{ id: number; nama: string }[]>([]);
  const [formState, setFormState] = useState<FilmFormState>({
    judul: "",
    kategori: null,
    jadwal: "",
    harga: "",
    status: null,
  });
  const [showAlert, setShowAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    setTitle("Tambah Data Film");
    setButtonLabel("Kembali");
    setButtonLink("/film");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getKategori();
        setKategoriList(result.data.payload);
      } catch (error) {
        console.error("Error fetching kategori:", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: name === "kategori" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { judul, kategori, jadwal, harga, status } = formState;

    if (!judul || !kategori || !jadwal || !harga || !status) {
      setShowAlert({ type: "error", message: "Semua kolom wajib diisi!" });
      return;
    }

    const jadwalTimestamp = Math.floor(new Date(jadwal).getTime() / 1000);

    const data = {
      judul,
      kategori,
      jadwal: jadwalTimestamp,
      harga,
      status,
    };

    try {
      const response = await postFilm(data);
      if (response.status === 201) {
        setShowAlert({ type: "success", message: "Film berhasil ditambahkan!" });
        console.log('Data Dikirimkan : ',response)
      }
    } catch (error) {
      setShowAlert({ type: "error", message: "Gagal menambahkan film." });
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-10">
      {showAlert && <Alert type={showAlert.type} message={showAlert.message} />}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5 w-2/3">
        <div>
          <label className="block mb-1 font-medium">Judul</label>
          <input
            type="text"
            name="judul"
            value={formState.judul}
            onChange={handleInputChange}
            placeholder="Tambah Judul"
            className="w-full border-2 p-2 rounded-xl"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Harga</label>
          <input
            type="text"
            name="harga"
            value={formState.harga}
            onChange={handleInputChange}
            placeholder="Tambah Harga"
            className="w-full border-2 p-2 rounded-xl"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Kategori</label>
          <select
            name="kategori"
            value={formState.kategori || ""}
            onChange={handleInputChange}
            className="w-full border-2 p-2 rounded-xl"
          >
            <option value="" disabled>
              Pilih Kategori
            </option>
            {kategoriList.map((kategori) => (
              <option key={kategori.id} value={kategori.id}>
                {kategori.nama}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            name="status"
            value={formState.status || ""}
            onChange={handleInputChange}
            className="w-full border-2 p-2 rounded-xl"
          >
            <option value="" disabled>
              Pilih Status
            </option>
            <option value="outdate">Outdate</option>
            <option value="ongoing">Ongoing</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Jadwal</label>
          <input
            type="date"
            name="jadwal"
            value={formState.jadwal}
            onChange={handleInputChange}
            className="w-full border-2 p-2 rounded-xl"
          />
        </div>
        <div className="col-span-2 text-center mt-5 justify-self-start">
          <button type="submit" className="px-6 py-2 bg-primary1 text-white font-medium rounded-lg hover:bg-blue-400">
            Tambah Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateFilm;
