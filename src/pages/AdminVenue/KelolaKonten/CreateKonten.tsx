import SweetAlert from "@/components/Alert/swal";
import CustomButton from "@/components/Button/CustomButton";
import SelectField from "@/components/Field/SelectField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { getPertandinganAktif, postPertandinganToVenue } from "@/service/index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateKonten = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [pertandinganOption, setPertandinganOption] = useState<
    { value: string; label: string }[]
  >([]);
  const [selectedPertandingan, setSelectedPertandingan] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });

  useEffect(() => {
    setTitle("Tambah Konten");
    setButtonLabel("Kembali");
    setButtonLink("/admin_venue/kelola_konten");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    const fetchDataPertandingan = async () => {
      try {
        const response = await getPertandinganAktif();
        setPertandinganOption(
          response.data.map(
            (teamData: {
              id: number;
              tim_tuan_rumah: string;
              tim_tamu: string;
            }) => ({
              value: teamData.id.toString(),
              label: `${teamData.tim_tuan_rumah} VS ${teamData.tim_tamu}`,
            })
          )
        );
      } catch (error) {
        console.error("Error fetching pertandingan:", error);
      }
    };

    fetchDataPertandingan();
  }, []);

  const handleSubmit = async () => {
    if (!selectedPertandingan) {
      alert("Semua field harus diisi!");
      return;
    }

    const payload = {
      pertandingan_id: Number(selectedPertandingan),
    };

    try {
      const token = sessionStorage.getItem("token");
      const venueId = sessionStorage.getItem("venueId");
      if (!venueId || !token) {
        throw new Error("Login Goblogggg!!!!");
      }
      await postPertandinganToVenue(Number(venueId), payload, token);
      setShowSuccessAlert(true);
    } catch (error: any) {
      console.error("Error Menambah Data Pertandingan :", error);
      setErrorAlert({
        show: true,
        message:
          error.response?.data?.message || "Error Menambah Data Pertandingan",
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
    <div className="w-6/12">
      <div className="space-y-10 p-20">
        <h1>Tambahkan Konten yang tersedia untuk nobar di tempat anda</h1>
        <SelectField
          options={pertandinganOption}
          title={"Nama Konten"}
          onChange={(e) => setSelectedPertandingan(e.target.value)}
        />
        <CustomButton label="Tambah Pertandingan" onClick={handleSubmit} />
      </div>
      <SweetAlert
        show={showSuccessAlert}
        title="Success"
        text="Berhasil Menambah Konten"
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

export default CreateKonten;
