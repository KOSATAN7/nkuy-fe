import SweetAlert from "@/components/Alert/swal";
import CustomButton from "@/components/Button/CustomButton";
import CustomTextarea from "@/components/Field/CustomTextarea";
import ImageDrag from "@/components/Field/ImageDrag";
import SelectField from "@/components/Field/SelectField";
import TextField from "@/components/Field/TextField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { postMenu } from "@/service/index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMenu = () => {
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

  useEffect(() => {
    setTitle("Tambah Menu");
    setButtonLabel("Kembali");
    setButtonLink("/admin_venue/kelola_menu");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const venueId = sessionStorage.getItem("venueId");
      const token = sessionStorage.getItem("token");

      const formData = new FormData();
      formData.append("nama", nama);
      formData.append("kategori", kategori);
      formData.append("harga", harga);
      formData.append("deskripsi", deskripsi);

      if (foto) {
        formData.append("foto", foto);
      }

      console.log("Foto yang dikirim:", formData.get("foto"));

      if (!venueId || !token) {
        throw new Error("Login Goblogg!!");
      }

      await postMenu(Number(venueId), formData, token);
      setShowSuccessAlert(true);
    } catch (error: any) {
      console.error("Error Menambah Menu :", error);
      setErrorAlert({
        show: true,
        message: error.response?.data?.message || "Error Menambah Menu",
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
      <div className="grid grid-cols-2 w-9/12 gap-5 h-full  ">
        <TextField
          title="Nama Makanan"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <TextField
          title="Harga Menu"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
        />
        <SelectField
          options={makananOptions}
          title={"Kategori Makanan"}
          onChange={(e) => setKategori(e.target.value)}
        />
        <CustomTextarea
          title="Deskripsi Menu"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
        />
        <div>
          <ImageDrag
            title="Foto Menu"
            file={foto}
            onFileChange={(file) => setFoto(file)}
          />
        </div>
      </div>
      <div className="mt-10">
        <CustomButton label="Tambah Menu" onClick={handleSubmit} />
      </div>
      <SweetAlert
        show={showSuccessAlert}
        title="Success"
        text="Berhasil Menambah Menu"
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

export default CreateMenu;
