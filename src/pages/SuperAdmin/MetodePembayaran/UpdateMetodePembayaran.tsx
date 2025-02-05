import { useState } from "react";
import CustomButton from "@/components/Button/CustomButton";
import TextField from "@/components/Field/TextField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";
import { getMetodePembayaranById, postMetodePembayaran, putMetodePembayaran } from "@/service/index";
import SweetAlert from "@/components/Alert/swal";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMetodePembayaran = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState({ show: false, message: "" });
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setTitle("Ubah Metode Pembayaran");
    setButtonLabel("Kembali");
    setButtonLink("/metode_pembayaran");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    const fetchMetode = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Login Goblogggg!!!");
      }
      const response = await getMetodePembayaranById(Number(id), token);
      const data = response.data.data;
      setNama(data.nama);
      setDeskripsi(data.deskripsi);
    };
    fetchMetode();
  }, []);

  const handleSubmit = async () => {
    if (!nama || !deskripsi) {
    }

    setLoading(true);
    const payload = { nama, deskripsi };

    try {
      const token = sessionStorage.getItem("token");
      if (!token) throw new Error("Anda harus login terlebih dahulu!");

      await putMetodePembayaran(Number(id),payload, token);
      setShowSuccessAlert(true);
    } catch (error: any) {
      console.error("Error Mengubah metode pembayaran:", error);
      setErrorAlert({
        show: true,
        message:
          error.response?.data?.message || "Gagal mengubah metode pembayaran.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessAlertConfirm = () => {
    setShowSuccessAlert(false);
    navigate(-1);
  };

  const handleErrorAlertConfirm = () => {
    setErrorAlert({ show: false, message: "" });
  };

  return (
    <div className="p-10">
      <div className="w-6/12">
        <h1 className="text-xl font-bold">Ubah Pembayaran</h1>
        <div className="mt-10 space-y-5">
          <TextField
            title="Jenis Pembayaran"
            placeholder="Tambah Jenis Metode Pembayaran"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <TextField
            title="Deskripsi"
            placeholder="Tambah Deskripsi Jenis Metode Pembayaran"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <CustomButton
            label={loading ? "Menyimpan..." : "Tambah Metode"}
            onClick={handleSubmit}
            disabled={loading}
          />
        </div>
      </div>

      <SweetAlert
        show={showSuccessAlert}
        title="Success"
        text="Berhasil mengubah metode pembayaran!"
        type="success"
        confirmButtonText="OK"
        onConfirm={handleSuccessAlertConfirm}
      />

      <SweetAlert
        show={errorAlert.show}
        title="Error"
        text={errorAlert.message}
        type="error"
        confirmButtonText="OK"
        onConfirm={() => handleErrorAlertConfirm}
      />
    </div>
  );
};

export default UpdateMetodePembayaran;
