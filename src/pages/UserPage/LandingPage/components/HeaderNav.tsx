import Logo from "@/assets/Logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

const HeaderNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isHovered, setIsHovered] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  // Efek shadow ketika discroll
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi Logout
  const handleLogout = () => {
    alert("Logout berhasil!"); // Bisa diganti dengan fungsi logout asli
    setIsProfileOpen(false); // Tutup dropdown setelah klik logout
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white transition-shadow ${
        hasShadow ? "shadow-md" : ""
      } z-50`}
    >
      <div className="mx-20 my-3 flex justify-between items-center">
        {/* Div kiri (Logo) */}
        <div className="flex-1 flex justify-start">
          <img
            src={Logo}
            alt="Logo"
            className="w-[180px] cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Div tengah (Navigasi) */}
        <div className="flex gap-5 font-semibold text-sm flex-none">
          {[
            { name: "Beranda", path: "/" },
            { name: "Panduan", path: "/panduan" },
            { name: "Tentang", path: "/tentang" },
            { name: "Kontak", path: "/kontak" },
          ].map((item) => (
            <p
              key={item.path}
              className={`cursor-pointer hover:text-primary1 transition ${
                location.pathname === item.path
                  ? "text-primary1 font-semibold"
                  : "text-black"
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </p>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center gap-4 relative">
          {/* Tombol Love */}
          <button
            onClick={() => navigate("/favorite")}
            className={`flex items-center justify-center gap-1 transition ${
              location.pathname === "/favorite"
                ? "text-primary1"
                : "text-gray-600 hover:text-primary1"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered || location.pathname === "/favorite" ? (
              <AiFillHeart size={23} className="text-primary1" />
            ) : (
              <AiOutlineHeart size={23} />
            )}
          </button>

          {/* Tombol Masuk */}

          {/* Profil dengan Dropdown */}
          <div className="relative flex items-center">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center justify-center p-2"
            >
              <FaUserCircle
                size={28}
                className="text-gray-600 hover:text-primary1 cursor-pointer"
              />
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2 border">
                <p
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={() => {
                    navigate("/profile");
                    setIsProfileOpen(false); // Tutup dropdown setelah klik
                  }}
                >
                  Profile Saya
                </p>
                <p
                  className="cursor-pointer p-2 hover:bg-gray-100 text-red-500"
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/login")}
            className="bg-primary1 px-5 py-2 rounded-full text-white hover:bg-primary1koma2 transition "
          >
            <p className="text-sm">Masuk</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
