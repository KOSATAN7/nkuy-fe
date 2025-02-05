import SweetAlert from "@/components/Alert/swal";
import CustomButton from "@/components/Button/CustomButton";
import CustomTextarea from "@/components/Field/CustomTextarea";
import ImageDrag from "@/components/Field/ImageDrag";
import SelectField from "@/components/Field/SelectField";
import TextField from "@/components/Field/TextField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { getMenubyId, putMenu } from "@/service/index";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMenu = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [foto, setFoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setTitle("Ubah Menu");
    setButtonLabel("Kembali");
    setButtonLink("/admin_venue/kelola_menu");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    const fetchMenu = async () => {
      const token = sessionStorage.getItem("token");
      const venueId = sessionStorage.getItem("venueId");

      if (!venueId || !token || !id) {
        throw new Error("Login Mass!!");
      }
      const response = await getMenubyId(Number(venueId), Number(id), token);
      const data = response.data;
      setNama(data.nama);
      setHarga(data.harga);
      setKategori(data.kategori);
      setDeskripsi(data.deskripsi);
      setFoto(data.foto);
    };
    fetchMenu();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const venueId = sessionStorage.getItem("venueId");
      const token = sessionStorage.getItem("token");

      if (!venueId || !token) {
        throw new Error("Login Goblogg!!");
      }

      const payload = {
        nama,
        kategori,
        harga,
        deskripsi,
        foto: "",
      };

      console.log("Data yang dikirim:", payload);

      await putMenu(Number(venueId), Number(id), payload, token);
      setShowSuccessAlert(true);
    } catch (error: any) {
      console.error("Error Mengubah Menu :", error);
      setErrorAlert({
        show: true,
        message: error.response?.data?.message || "Error Mengubah Menu",
      });
    } finally {
      setLoading(false);
    }
  };

  const makananOptions = [
    { value: "makanan", label: "Makanan" },
    { value: "minuman", label: "Minuman" },
  ];

  const handleSuccessAlertConfirm = () => {
    setShowSuccessAlert(false);
    navigate(-1);
  };

  const handleErrorAlertConfirm = () => {
    setErrorAlert({ show: false, message: "" });
  };

  return (
    <div className="p-10">
      <div className="grid grid-cols-2 w-9/12 gap-5 h-[400px]">
        <TextField
          title="Nama Makanan"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <TextField
          title="Harga Menu"
          type="number"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
        />
        <SelectField
          options={makananOptions}
          title={"Kategori Makanan"}
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
        />
        <CustomTextarea
          title="Deskripsi Menu"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
        />
        <ImageDrag
          title="Foto Menu"
          file={foto}
          onFileChange={(file) => setFoto(file)}
        />
      </div>
      <div className="mt-10">
        <CustomButton label="Ubah Menu" onClick={handleSubmit} />
      </div>
      <SweetAlert
        show={showSuccessAlert}
        title="Success"
        text="Berhasil Mengubah Menu"
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

export default UpdateMenu;
