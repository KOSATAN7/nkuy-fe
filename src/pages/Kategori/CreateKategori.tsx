import React, { useEffect, useState } from "react";
import { postKategori } from "@/service/index";
import Alert from "@/components/Alert";
import { useNavigate } from "react-router-dom";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import TextField from "@/components/Field/TextField";

const CreateKategori: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [namaKategori, setNamaKategori] = useState("");
  const [showAlert, setShowAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
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
      setShowAlert({
        type: "error",
        message: "Nama kategori tidak boleh kosong.",
      });
      setTimeout(() => setShowAlert(null), 2000);
      return;
    }

    try {
      await postKategori(namaKategori);
      setShowAlert({ type: "success", message: "Data berhasil ditambahkan." });
      setNamaKategori("");
      setTimeout(() => {
        navigate("/kategori");
      }, 2000);
    } catch (error) {
      setShowAlert({
        type: "error",
        message: "Gagal menambahkan data. Silakan coba lagi.",
      });
    }

    setTimeout(() => setShowAlert(null), 3000);
  };

  return (
    <div className="p-10 flex flex-col h-full">
      {showAlert && <Alert type={showAlert.type} message={showAlert.message} />}
      <div className="w-6/12">
        <TextField
          title="Nama Kategori"
          value={namaKategori}
          onChange={handleInputChange}
          placeholder="Masukkan Nama Kategori"
        />
      </div>
      <div className="mt-20">
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
