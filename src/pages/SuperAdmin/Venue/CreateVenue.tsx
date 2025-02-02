import { useState, useEffect, useCallback } from "react";
import FasilitasField from "@/components/Field/FasilitasField";
import ManyFoto from "@/components/Field/ManyFoto";
import TextField from "@/components/Field/TextField";
import UploadField from "@/components/Field/UploadField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { postVenue } from "@/service/index";
import { BuatVenue } from "@/utils/interface";
import { useNavigate } from "react-router-dom";
import SweetAlert from "@/components/Alert/swal";
import CustomButton from "@/components/Button/CustomButton";

const CreateVenue = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });

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

  const [formData, setFormData] = useState({
    nama: "",
    username: "",
    alamat: "",
    kapasitas: "",
    fasilitas: [""],
    kota: "",
    kontak: "",
    foto_utama: null,
    foto_foto: [],
    video: null,
    latitude: "",
    longitude: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFasilitasChange = useCallback((newFasilitas: string[]) => {
    setFormData((prev) => ({ ...prev, fasilitas: newFasilitas }));
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Login Gobloggg");
      }
      const payload: BuatVenue = {
        nama: formData.nama,
        alamat: formData.alamat,
        kapasitas: Number(formData.kapasitas),
        fasilitas: formData.fasilitas,
        kota: formData.kota,
        kontak: formData.kontak,
        latitude: formData.latitude,
        longitude: formData.longitude,
        email: formData.email,
        // role: formData.role,
        password: formData.confirmPassword,
        // confirmPassword: formData.confirmPassword,
        foto_utama: formData.foto_utama ?? "",
        foto_foto: formData.foto_foto.length > 0 ? formData.foto_foto : [],
        video: formData.video ?? "",
        username: formData.username,
      };
      await postVenue(payload, token);
      setShowSuccessAlert(true);
    } catch (error: any) {
      console.error("Error Menambah Data Venue :", error);
      setErrorAlert({
        show: true,
        message: error.response?.data?.message || "Error Menambah Data Venue",
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
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5">Data Venue</h1>
      <div className="w-full grid grid-cols-2 gap-5">
        <TextField
          title="Nama Venue"
          placeholder="Tambah Nama Venue"
          onChange={(e) => handleChange("nama", e.target.value)}
        />
        <TextField
          title="Kapasitas"
          type="number"
          placeholder="Tambah Kapasitas"
          onChange={(e) => handleChange("kapasitas", e.target.value)}
        />
        <TextField
          title="Alamat"
          placeholder="Tambah Alamat"
          onChange={(e) => handleChange("alamat", e.target.value)}
        />
        <UploadField title="Foto Utama" maxFileSize="Maksimal 1 mb*" />
        <TextField
          title="Kontak"
          placeholder="Tambah Kontak"
          onChange={(e) => handleChange("kontak", e.target.value)}
        />
        <UploadField title="Video" maxFileSize="Maksimal 30 mb*" />
        <TextField
          title="Kota"
          placeholder="Tambah Kota"
          onChange={(e) => handleChange("kota", e.target.value)}
        />
        <div className="flex space-x-5">
          <TextField
            title="Latitude"
            placeholder="Tambah Latitude"
            onChange={(e) => handleChange("latitude", e.target.value)}
          />
          <TextField
            title="Longitude"
            placeholder="Tambah Longitude"
            onChange={(e) => handleChange("longitude", e.target.value)}
          />
        </div>
        <FasilitasField
          title="Fasilitas"
          placeholder="Tambah Fasilitas"
          onChange={handleFasilitasChange}
          value={formData.fasilitas}
        />
        <ManyFoto title="Foto Foto" />
      </div>

      <h1 className="text-2xl font-semibold mb-5 mt-5">Akun Venue</h1>
      <div className="grid grid-cols-2 gap-5 w-9/12">
        <TextField
          title="Email Venue"
          placeholder="Email Venue"
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <TextField
          title="Username"
          placeholder="Username"
          onChange={(e) => handleChange("username", e.target.value)}
        />
        <TextField
          title="Password"
          placeholder="Password"
          type="password"
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <TextField
          title="Konfirmasi Password"
          placeholder="Konfirmasi Password"
          type="password"
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
        />
      </div>
      <div className="mt-5">
        <CustomButton
          label={loading ? "Menyimpan..." : "Tambah Data"}
          disabled={loading}
          onClick={handleSubmit}
        />
      </div>
      <SweetAlert
        show={showSuccessAlert}
        title="Success"
        text="Berhasil Menambah Data Venue"
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
        onConfirm={handleErrorAlertConfirm}
      />
    </div>
  );
};

export default CreateVenue;
