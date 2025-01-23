import CustomButton from "@/components/Button/CustomButton";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { getFilmById, getKategori } from "@/service/index";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface UpdateFilm {
  id: string;
  judul: string;
  kategori: {
    id: string;
    nama_kategori: string;
  };
  jadwal: number;
  harga: string;
  status: string;
}

const UpdateFilm: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [formState, setFormState] = useState<{
    judul: string;
    kategori: string;
    jadwal: string;
    harga: string;
    status: string;
  }>({
    judul: "",
    kategori: "",
    jadwal: "",
    harga: "",
    status: "",
  });
  const [kategoriList, setKategoriList] = useState<{ id: number; nama: string }[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setTitle("Ubah Data Film");
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
      if (id !== undefined) {
        try {
          const result = await getFilmById(id);
          const data = result.data.payload;
          console.log(data)
          setFormState({
            judul: data.judul,
            kategori: data.kategori.id,
            jadwal: new Date(data.jadwal * 1000).toISOString().split("T")[0],
            harga: data.harga,
            status: data.status,
          });
        } catch (error) {
          console.error("Error fetching film data:", error);
        }
      }
    };
    fetchData();
  }, [id]);

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
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div className="flex flex-col gap-7 py-10 px-10">
        <div>
          <h1 className="px-2 pb-3">Judul</h1>
          <input
            type="text"
            name="judul"
            value={formState.judul}
            onChange={handleInputChange}
            placeholder="Masukkan Judul Film"
            className="w-80 border-2 px-3 p-2 rounded-xl focus:outline-none"
          />
        </div>
        <div>
          <h1 className="px-2 pb-3">Kategori</h1>
          <select
            name="kategori"
            value={formState.kategori}
            onChange={handleInputChange}
            className="w-80 border-2 p-2 rounded-xl"
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
          <h1 className="px-2 pb-3">Jadwal</h1>
          <input
            type="date"
            name="jadwal"
            value={formState.jadwal}
            onChange={handleInputChange}
            className="w-80 border-2 p-2 rounded-xl"
          />
        </div>
        <div>
          <h1 className="px-2 pb-3">Harga</h1>
          <input
            type="text"
            name="harga"
            value={formState.harga}
            onChange={handleInputChange}
            placeholder="Masukkan Harga Film"
            className="w-80 border-2 px-3 p-2 rounded-xl focus:outline-none"
          />
        </div>
        <div>
          <h1 className="px-2 pb-3">Status</h1>
          <select
            name="status"
            value={formState.status}
            onChange={handleInputChange}
            className="w-80 border-2 p-2 rounded-xl"
          >
            <option value="" disabled>
              Pilih Status
            </option>
            <option value="outdate">Outdate</option>
            <option value="ongoing">Ongoing</option>
            <option value="comingsoon">Coming Soon</option>
          </select>
        </div>
        <div className="mt-10">
          <CustomButton label="Ubah Data" />
        </div>
      </div>
    </div>
  );
};

export default UpdateFilm;
