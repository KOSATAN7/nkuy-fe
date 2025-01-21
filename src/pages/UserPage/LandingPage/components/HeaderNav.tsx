import Logo from "@/assets/Logo.png";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b-2">
      <div className="p-3 flex justify-between items-center">
        <img src={Logo} alt="" className="w-[200px]" />
        <div className="flex gap-5 font-semibold">
          <p className="hover:text-primary1 cursor-pointer" onClick={() => navigate("/")}>Beranda</p>
          <p className="hover:text-primary1  cursor-pointer" onClick={() => navigate("/panduan")}>Panduan</p>
          <p className="hover:text-primary1  cursor-pointer" onClick={() => navigate("/tentang")}>Tentang</p>
          <p className="hover:text-primary1  cursor-pointer" onClick={() => navigate("/kontak")}>Kontak</p>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="bg-primary1 px-5 py-2 rounded-full text-white"
        >
          Masuk
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
