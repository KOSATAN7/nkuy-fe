import Logo from "@/assets/Logo.png";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative p-10 flex h-screen w-full items-center justify-center overflow-hidden bg-white">
      <div className="content z-20 w-full max-w-9/12 rounded-3xl bg-white px-6 py-10 text-left text-neutral100 shadow-md  md:w-5/12 md:text-left">
        <div className="mb-4">
          <img src={Logo} alt="" className="m-auto w-32 md:w-52" />
        </div>
        <h1 className="text-xl mt-1 mb-1 md:text-1xl text-center">
          Belum Punya Akun? Daftar Dulu Yuk!
        </h1>
        <form className="flex flex-col">
          <div className="pt-5">
            <p>Nama</p>
            <input
              type="text"
              required
              placeholder="Masukkan Nama anda!"
              className="w-full border-2 focus:outline-none rounded-xl px-5 py-3"
            />
          </div>
          <div className="pt-2">
            <p>Email</p>
            <input
              type="email"
              required
              placeholder="Masukkan Email anda!"
              className="w-full border-2 focus:outline-none rounded-xl px-5 py-3"
            />
          </div>
          <div className="pt-2">
            <p>No Telp</p>
            <div className="flex items-center border-2 rounded-xl">
              <span className="px-3 py-3 border-r-2 text-neutral-400">+62</span>
              <input
                type="tel"
                required
                placeholder="823-2521-4327"
                className="w-full focus:outline-none px-3 py-3"
              />
            </div>
          </div>
          <div className="pt-2">
            <p>Kata Sandi</p>
            <input
              type="Password"
              required
              placeholder="Masukkan Kata Sandi anda!"
              className="w-full border-2 focus:outline-none rounded-xl px-5 py-3"
            />
          </div>
          <div className="pt-2">
            <p>Ulang Kata Sandi</p>
            <input
              type="password"
              required
              placeholder="Masukkan Ulang Kata Sandi anda!"
              className="w-full border-2 focus:outline-none rounded-xl px-5 py-3"
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
            className="mt-5 hover:text-primary1 "
            onClick={() => navigate("/login")}
          >
            Sudah Punya Akun? masuk sekarang
          </button>
        </div>
      </div>
      <div className="absolute -left-96  -top-60 h-full w-full bg-primary1 -rotate-45"></div>
      <div className="absolute -bottom-60 -left-96 h-full w-full  bg-primary1 rotate-45"></div>
    </div>
  );
};

export default RegisterPage;
