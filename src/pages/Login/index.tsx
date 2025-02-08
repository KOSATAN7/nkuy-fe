import Logo from "@/assets/Logo.png";
import { checkLogin, PostLogin } from "@/service/index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await PostLogin(email, password);
      const token = response.token;
      sessionStorage.setItem("token", token);

      console.log("Login berhasil:", response);

      const checkLoginResponse = await checkLogin(token);
      const { username, role } = checkLoginResponse.data.user;
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("role", role);
      console.log("Check login berhasil:", checkLoginResponse);

      if (role === "admin_venue") {
        const { venueId } = checkLoginResponse.data.venue;
        sessionStorage.setItem("venueId", venueId);
        navigate("/admin_venue/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error saat login:", error);
      console.log("Terjadi kesalahan saat login.");
    }
  };

  return (
    <div className="relative p-10 flex h-screen w-full items-center justify-center overflow-hidden bg-white">
      <div className="content z-20 w-full max-w-md rounded-3xl bg-white px-6 py-10 text-left text-neutral100 shadow-md  md:w-5/12 md:text-left">
        <div className="mb-4">
          <img src={Logo} alt="" className="m-auto w-32 md:w-52" />
        </div>
        <h1 className="text-xl mt-10 mb-10 md:text-3xl text-center">
          Selamat Datang!
        </h1>
        <form className="flex flex-col">
          <div>
            <p>Email</p>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan Email anda!"
              className="w-full border-2 focus:outline-none rounded-xl px-5 py-3"
            />
          </div>
          <div className="pt-8">
            <p>Password</p>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan Kata Sandi anda!"
              className="w-full border-2 focus:outline-none rounded-xl px-5 py-3"
            />
          </div>
          <button
            type="submit"
            className="py-3 rounded-xl bg-primary1 mt-5 text-white font-semibold"
            onClick={handleLogin}
          >
            Masuk
          </button>
        </form>
        <div className="flex items-center justify-center">
          <button
            className="mt-5 hover:text-primary1 "
            onClick={() => navigate("/register")}
          >
            Belum Punya Akun? buat sekarang
          </button>
        </div>
      </div>
      <div className="absolute -left-96  -top-60 h-full w-full bg-primary1 -rotate-45"></div>
      <div className="absolute -bottom-60 -left-96 h-full w-full  bg-primary1 rotate-45"></div>
    </div>
  );
};

export default LoginPage;
