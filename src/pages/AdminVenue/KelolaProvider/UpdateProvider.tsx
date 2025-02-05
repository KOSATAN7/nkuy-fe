import SweetAlert from "@/components/Alert/swal";
import CustomButton from "@/components/Button/CustomButton";
import ImageUpload from "@/components/Field/ImageUpload";
import SelectField from "@/components/Field/SelectField";
import TextField from "@/components/Field/TextField";
import UploadField from "@/components/Field/UploadField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import {
  getListMetodePembayaran,
  getProviderById,
  postProvider,
  putProvider,
} from "@/service/index";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProvider = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [selectedPayment, setSelectedPayment] = useState<
    { value: string; label: string }[]
  >([]);
  const [payment, setPayment] = useState("");
  const [nama, setNama] = useState("");
  const [noRek, setNorek] = useState("");
  const [namaProvider, setNamaProvider] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setTitle("Ubah Provider");
    setButtonLabel("Kembali");
    setButtonLink("/admin_venue/kelola_provider");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    const fetchdata = async () => {
      const token = sessionStorage.getItem("token");
      const venueId = sessionStorage.getItem("venueId");
      if (!venueId || !token || !id) {
        throw new Error("Login Mas");
      }

      try {
        const response = await getProviderById(
          Number(venueId),
          Number(id),
          token
        );
        const providerData = response.data.data.provider;
        const paymentData = response.data.data["metode-pembayaran"];

        console.log(providerData);

        setNamaProvider(providerData.nama);
        setNorek(providerData.no_rek);
        setNama(providerData.penerima);
        setDeskripsi(providerData.deskripsi);
        setPayment(
          paymentData?.metode_pembayaran_id
            ? paymentData.metode_pembayaran_id.toString()
            : ""
        );
      } catch (error) {
        console.error("Gagal mengambil data provider:", error);
      }
    };

    fetchdata();
  }, [id]);

  useEffect(() => {
    const fetchPayment = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Login Mas!");
      }
      const response = await getListMetodePembayaran(token);
      setSelectedPayment(
        response.data.data
          .filter((payment: { id: string }) => payment.id)
          .map((country: { id: number; nama: string }) => ({
            value: country.id,
            label: country.nama,
          }))
      );
    };
    fetchPayment();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);

    const payload = {
      metode_pembayaran_id: Number(payment),
      nama: namaProvider,
      no_rek: noRek,
      penerima: nama,
      deskripsi: deskripsi,
      foto: "",
    };

    try {
      const token = sessionStorage.getItem("token");
      const venueId = sessionStorage.getItem("venueId");
      if (!token || !venueId) {
        throw new Error("Login Goblogggg!!!!");
      }
      await putProvider(Number(venueId), Number(id), payload, token);
      setShowSuccessAlert(true);
    } catch (error: any) {
      console.error("Error Menambah Mengubah Data Provider :", error);
      setErrorAlert({
        show: true,
        message:
          error.response?.data?.message || "Error Mengubah Data Provider",
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
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          />
          <TextField
            title="Nama Provider"
            value={namaProvider}
            onChange={(e) => setNamaProvider(e.target.value)}
          />
          <TextField
            title="Nomor Rekening"
            value={noRek}
            onChange={(e) => setNorek(e.target.value)}
          />
          <TextField
            title="Nama Penerima"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <TextField
            title="Deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
          <UploadField title={"Foto Provider"} />
        </div>
        <div>
          <CustomButton label="Ubah Provider" onClick={handleSubmit} />
        </div>
      </div>
      <SweetAlert
        show={showSuccessAlert}
        title="Success"
        text="Berhasil Mengubah Provider"
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

export default UpdateProvider;
