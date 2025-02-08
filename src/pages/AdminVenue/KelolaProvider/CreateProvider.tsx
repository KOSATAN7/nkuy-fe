import SweetAlert from "@/components/Alert/swal";
import CustomButton from "@/components/Button/CustomButton";
import UploadField from "@/components/Field/UploadField";
import SelectField from "@/components/Field/SelectField";
import TextField from "@/components/Field/TextField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { getListMetodePembayaran, postProvider } from "@/service/index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProvider = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [selectedPayment, setSelectedPayment] = useState<
    { value: string; label: string }[]
  >([]);
  const [payment, setPayment] = useState("");
  const [nama, setNama] = useState("");
  const [noRek, setNorek] = useState("");
  const [namaProvider, setNamaProvider] = useState("");
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
    setTitle("Tambah Provider");
    setButtonLabel("Kembali");
    setButtonLink("/admin_venue/kelola_provider");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    const fetchPayment = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Login Mas!");
      }
      const response = await getListMetodePembayaran(token);
      setSelectedPayment(
        response.data.data.map((payment: { id: number; nama: string }) => ({
          value: payment.id,
          label: payment.nama,
        }))
      );
    };
    fetchPayment();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const token = sessionStorage.getItem("token");
      const venueId = sessionStorage.getItem("venueId");
      if (!token || !venueId) {
        throw new Error("Silakan login terlebih dahulu!");
      }

      const formData = new FormData();
      formData.append("metode_pembayaran_id", payment);
      formData.append("nama", namaProvider);
      formData.append("no_rek", noRek);
      formData.append("penerima", nama);
      formData.append("deskripsi", deskripsi);
      if (foto) {
        formData.append("foto", foto);
      }

      await postProvider(Number(venueId), formData, token);
      setShowSuccessAlert(true);
    } catch (error: any) {
      console.error("Error Menambah Data Provider :", error);
      setErrorAlert({
        show: true,
        message:
          error.response?.data?.message || "Error Menambah Data Provider",
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
    <div className="p-10 w-9/12">
      <div className="space-y-10">
        <h1 className="text-xl font-semibold">Provider</h1>
        <div className="grid grid-cols-2 gap-5">
          <SelectField
            title="Jenis Metode Pembayaran"
            options={selectedPayment}
            onChange={(e) => setPayment(e.target.value)}
          />
          <TextField title="Nama Provider" onChange={(e) => setNamaProvider(e.target.value)} />
          <TextField title="Nomor Rekening" onChange={(e) => setNorek(e.target.value)} />
          <TextField title="Nama Penerima" onChange={(e) => setNama(e.target.value)} />
          <TextField title="Deskripsi" onChange={(e) => setDeskripsi(e.target.value)} />
          <UploadField title="Foto Provider" onFileChange={(file) => setFoto(file)} />
        </div>
        <div>
          <CustomButton label="Tambah Provider" onClick={handleSubmit} disabled={loading} />
        </div>
      </div>
      <SweetAlert
        show={showSuccessAlert}
        title="Success"
        text="Berhasil Menambah Provider"
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

export default CreateProvider;
