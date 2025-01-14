import Logo from "@/assets/Logo.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative p-10 flex h-screen w-full items-center justify-center overflow-hidden bg-white">
      <div className="content z-20 w-full max-w-md rounded-3xl bg-white px-6 py-10 text-left text-neutral100 shadow-md  md:w-5/12 md:text-left">
        <div className="mb-4">
          <img src={Logo} alt="" className="m-auto w-32 md:w-52" />
        </div>
          <h1 className="text-xl mt-10 mb-10 md:text-3xl text-center">Selamat Datang!</h1>
        <form className="flex flex-col">
          <div>
            <p>Email</p>
            <input
              type="email"
              required
              placeholder="Masukkan Email anda!"
              className="w-full border-2 focus:outline-none rounded-xl px-5 py-3"
            />
          </div>
          <div className="pt-8">
            <p>Password</p>
            <input
              type="password"
              required
              placeholder="Masukkan Kata Sandi anda!"
              className="w-full border-2 focus:outline-none rounded-xl px-5 py-3"
            />
          </div>
          <button
            type="submit"
            className="py-3 rounded-xl bg-primary1 mt-5 text-white font-semibold"
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
