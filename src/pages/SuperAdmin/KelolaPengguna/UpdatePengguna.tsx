import SweetAlert from "@/components/Alert/swal";
import CustomButton from "@/components/Button/CustomButton";
import TextField from "@/components/Field/TextField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { getUserById, putUser } from "@/service/index"; // Import putUser
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdatePengguna = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const { id } = useParams<{ id: string }>();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });

  useEffect(() => {
    setTitle("Kelola Data Pengguna");
    setButtonLabel("Kembali");
    setButtonLink("/pengguna");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  if (!id) {
    throw new Error("Cannot Find Id");
  }

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      if (token) {
        try {
          const result = await getUserById(Number(id), token);
          const userData = result.data.data;
          setNama(userData.username || "");
          setEmail(userData.email || "");
          setPassword("");
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login ulang.");
      }

      const updatedData: { username: string; email: string; password: string } =
        {
          username: nama,
          email: email,
          password: password,
        };

      if (password) {
        updatedData.password = password;
      }

      await putUser(Number(id), updatedData, token);
      setShowSuccessAlert(true);
    } catch (error: any) {
      console.error("Error Mengubah Data Pengguna :", error);
      setErrorAlert({
        show: true,
        message:
          error.response?.data?.message || "Error Mengubah Data Pengguna",
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
    <div className="px-16 py-10">
      <div>
        <h1 className="text-2xl font-semibold">Edit Pengguna</h1>
        <div className="flex flex-col gap-5 mt-5">
          <TextField
            title="Nama Pengguna"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <TextField
            title="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            title="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-end mt-5">
          <CustomButton
            label={loading ? "Menyimpan..." : "Ubah Data"}
            onClick={handleUpdate}
            disabled={loading}
          />
        </div>
      </div>
      <SweetAlert
        show={showSuccessAlert}
        title="Success"
        text="Berhasil Mengubah Data Pengguna"
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

export default UpdatePengguna;
