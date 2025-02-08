import React, { useState } from "react";
import Logo from "@/assets/Logo.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { postRegister } from "@/service/index";
import SweetAlert from "@/components/Alert/swal";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.password_confirmation) {
      Swal.fire({
        title: "Error",
        text: "Password Tidak Sama",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
    };

    try {
      await postRegister(payload);
      setShowSuccessAlert(true);
    } catch (error: any) {
      console.error("Error Membuat Akun :", error);
      setErrorAlert({
        show: true,
        message: error.response?.data?.message || "Error Membuat Akun",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessAlertConfirm = () => {
    setShowSuccessAlert(false);
    navigate("/login");
  };

  const handleErrorAlertConfirm = () => {
    setErrorAlert({ show: false, message: "" });
  };

  return (
    <div className="relative p-10 flex h-screen w-full items-center justify-center overflow-hidden bg-white">
      <div className="content z-20 w-full max-w-9/12 rounded-3xl bg-white px-6 py-10 text-left text-neutral100 shadow-md md:w-5/12 md:text-left">
        <div className="mb-4">
          <img src={Logo} alt="" className="m-auto w-32 md:w-52" />
        </div>
        <h1 className="text-xl mt-1 mb-1 md:text-1xl text-center">
          Belum Punya Akun? Daftar Dulu Yuk!
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="pt-5">
            <p>Nama</p>
            <input
              type="text"
              name="username"
              required
              placeholder="Masukkan Nama anda!"
              className="w-full border-2 focus:outline-none rounded-xl px-5 py-3"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="pt-2">
            <p>Email</p>
            <input
              type="email"
              name="email"
              required
              placeholder="Masukkan Email anda!"
              className="w-full border-2 focus:outline-none rounded-xl px-5 py-3"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="pt-2">
            <p>No Telp</p>
            <div className="flex items-center border-2 rounded-xl">
              <span className="px-3 py-3 border-r-2 text-neutral-400">+62</span>
              <input
                type="tel"
                name="phone"
                required
                placeholder="823-2521-4327"
                className="w-full focus:outline-none px-3 py-3"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="pt-2">
            <p>Kata Sandi</p>
            <input
              type="password"
              name="password"
              required
              placeholder="Masukkan Kata Sandi anda!"
              className="w-full border-2 focus:outline-none rounded-xl px-5 py-3"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="pt-2">
            <p>Ulang Kata Sandi</p>
            <input
              type="password"
              name="password_confirmation"
              required
              placeholder="Masukkan Ulang Kata Sandi anda!"
              className="w-full border-2 focus:outline-none rounded-xl px-5 py-3"
              value={formData.password_confirmation}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="py-3 rounded-xl bg-primary1 mt-5 text-white font-semibold"
          >
            Register
          </button>
        </form>
        <div className="flex items-center justify-center">
          <button
            className="mt-5 hover:text-primary1"
            onClick={() => navigate("/login")}
          >
            Sudah Punya Akun? masuk sekarang
          </button>
        </div>
      </div>
      <div className="absolute -left-96 -top-60 h-full w-full bg-primary1 -rotate-45"></div>
      <div className="absolute -bottom-60 -left-96 h-full w-full bg-primary1 rotate-45"></div>
      <SweetAlert
        show={showSuccessAlert}
        title="Success"
        text="Berhasil Membuat Akun"
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

export default RegisterPage;
