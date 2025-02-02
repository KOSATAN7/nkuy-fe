import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { getVenueById, putVenue } from "@/service/index";
import { BuatVenue, UbahVenue } from "@/utils/interface";
import SweetAlert from "@/components/Alert/swal";
import TextField from "@/components/Field/TextField";
import UploadField from "@/components/Field/UploadField";
import FasilitasField from "@/components/Field/FasilitasField";
import ManyFoto from "@/components/Field/ManyFoto";
import CustomButton from "@/components/Button/CustomButton";

const UpdateVenue = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState({ show: false, message: "" });

  useEffect(() => {
    setTitle("Ubah Data Venue");
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
    alamat: "",
    kapasitas: "",
    fasilitas: [] as string[],
    kota: "",
    kontak: "",
    foto_utama: null,
    foto_foto: [],
    video: null,
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) throw new Error("Token tidak ditemukan!");

        const response = await getVenueById(Number(id), token);
        const venueData = response.data.payload;

        setFormData({
          nama: venueData.nama || "",
          alamat: venueData.alamat || "",
          kapasitas: venueData.kapasitas?.toString() || "",
          fasilitas: venueData.fasilitas || [],
          kota: venueData.kota || "",
          kontak: venueData.kontak || "",
          foto_utama: venueData.foto_utama || null,
          foto_foto: Array.isArray(venueData.foto_foto)
            ? venueData.foto_foto
            : [],
          video: venueData.video || null,
          latitude: venueData.latitude || "",
          longitude: venueData.longitude || "",
        });
      } catch (error: any) {
        console.error("Gagal mengambil data venue:", error);
        setErrorAlert({ show: true, message: "Gagal mengambil data venue." });
      }
    };

    fetchVenue();
  }, [id]);

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFasilitasChange = useCallback((newFasilitas: string[]) => {
    setFormData((prev) => ({ ...prev, fasilitas: newFasilitas }));
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const payload = {
        nama: formData.nama,
        alamat: formData.alamat,
        kapasitas: Number(formData.kapasitas),
        kota: formData.kota,
        kontak: formData.kontak,
        latitude: formData.latitude,
        longitude: formData.longitude,
        fasilitas: formData.fasilitas,
      };

      console.log("Payload to be sent:", payload);

      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Token Not Found");
      }

      await putVenue(Number(id), payload, token);
      setShowSuccessAlert(true);
    } catch (error: any) {
      console.error("Error updating venue:", error);
      setErrorAlert({
        show: true,
        message: error.message || "Failed to update venue",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5">Ubah Data Venue</h1>
      <div className="w-full grid grid-cols-2 gap-5">
        <TextField
          title="Nama Venue"
          value={formData.nama}
          onChange={(e) => handleChange("nama", e.target.value)}
        />
        <TextField
          title="Kapasitas"
          type="number"
          value={formData.kapasitas}
          onChange={(e) => handleChange("kapasitas", e.target.value)}
        />
        <TextField
          title="Alamat"
          value={formData.alamat}
          onChange={(e) => handleChange("alamat", e.target.value)}
        />
        <UploadField title="Foto Utama" maxFileSize="1MB" />
        <TextField
          title="Kontak"
          value={formData.kontak}
          onChange={(e) => handleChange("kontak", e.target.value)}
        />
        <UploadField title="Video" maxFileSize="30MB" />
        <TextField
          title="Kota"
          value={formData.kota}
          onChange={(e) => handleChange("kota", e.target.value)}
        />
        <div className="flex space-x-5">
          <TextField
            title="Latitude"
            value={formData.latitude}
            onChange={(e) => handleChange("latitude", e.target.value)}
          />
          <TextField
            title="Longitude"
            value={formData.longitude}
            onChange={(e) => handleChange("longitude", e.target.value)}
          />
        </div>
        <FasilitasField
          title="Fasilitas"
          value={formData.fasilitas}
          onChange={handleFasilitasChange}
        />
        <ManyFoto title="Foto Foto" />
      </div>

      <div className="mt-5">
        <CustomButton
          label={loading ? "Menyimpan..." : "Ubah Data"}
          disabled={loading}
          onClick={handleSubmit}
        />
      </div>

      <SweetAlert
        show={showSuccessAlert}
        title="Success"
        text="Data berhasil diperbarui!"
        type="success"
        onConfirm={() => navigate(-1)}
      />
      <SweetAlert
        show={errorAlert.show}
        title="Error"
        text={errorAlert.message}
        type="error"
        onConfirm={() => setErrorAlert({ show: false, message: "" })}
      />
    </div>
  );
};

export default UpdateVenue;
