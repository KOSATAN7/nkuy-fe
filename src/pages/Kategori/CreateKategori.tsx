import React, { useEffect, useState } from "react";
import { postKategori } from "@/service/index";
import Alert from "@/components/Alert";
import { useNavigate } from "react-router-dom";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";

const CreateKategori: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [namaKategori, setNamaKategori] = useState("");
  const [showAlert, setShowAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle("Tambah Kategori");
    setButtonLabel("Kembali");
    setButtonLink("/kategori");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamaKategori(e.target.value);
  };

  const handleSubmit = async () => {
    if (!namaKategori.trim()) {
      setShowAlert({ type: "error", message: "Nama kategori tidak boleh kosong." });
      setTimeout(() => setShowAlert(null), 2000);
      return;
    }

    try {
      await postKategori(namaKategori);
      setShowAlert({ type: "success", message: "Data berhasil ditambahkan." });
      setNamaKategori("");
      setTimeout(() => {
        navigate("/kategori")
      }, 2000)

      
    } catch (error) {
      setShowAlert({ type: "error", message: "Gagal menambahkan data. Silakan coba lagi." });
    }

    setTimeout(() => setShowAlert(null), 3000);
  };

  return (
    <div className="p-10 flex flex-col h-full">
      {showAlert && <Alert type={showAlert.type} message={showAlert.message} />}
      <div className="flex-1">
        <h1 className="pb-2">Nama Kategori</h1>
        <input
          type="text"
          className="border-2 border-gray-300 w-1/4 p-2 rounded-lg"
          placeholder="Masukkan Nama Kategori"
          value={namaKategori}
          onChange={handleInputChange}
        />
      </div>

      <div className="pt-6">
        <button
          onClick={handleSubmit}
          className="bg-primary1 text-white px-4 py-2 rounded-lg"
        >
          Tambah Data
        </button>
      </div>
    </div>
  );
};

export default CreateKategori;
