import Logo from "@/assets/Logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Logout } from "@/service/index";
import SweetAlert from "@/components/Alert/swal";

const HeaderNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isHovered, setIsHovered] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  useEffect(() => {
    const storedRole = sessionStorage.getItem("role") || "";
    const storedUsername = sessionStorage.getItem("username") || "";

    setRole(storedRole);
    setUsername(storedUsername);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
        setBgColor("bg-white"); // Ubah background jadi putih saat discroll
      } else {
        setHasShadow(false);
        setBgColor("bg-transparent"); // Kembali transparan jika di atas
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("Token tidak tersedia");
      return;
    }

    try {
      await Logout(token);
      sessionStorage.clear();
      console.log("Logout berhasil");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Gagal logout:", error);
    }
  };

  return (
    <div
    className={`fixed top-0 left-0 w-full transition-shadow ${bgColor} ${hasShadow ? "shadow-md" : ""} z-50`}
  >
  
      <div className="mx-20 my-3 flex justify-between items-center">
        <div className="flex-1 flex justify-start">
          <img
            src={Logo}
            alt="Logo"
            className="w-[180px] cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="flex gap-5 font-semibold text-sm flex-none">
          {[
            { name: "Beranda", path: "/" },
            { name: "Panduan", path: "/panduan" },
            { name: "Tentang", path: "/tentang" },
            { name: "Kontak", path: "/kontak" },
          ].map((item) => (
            <p
              key={item.path}
              className={`cursor-pointer hover:text-primary1 transition ${location.pathname === item.path
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
          <button
            onClick={() => navigate("/favorite-venue")}
            className={`flex items-center justify-center gap-1 transition ${location.pathname === "/favorite-venue"
                ? "text-primary1"
                : "text-gray-600 hover:text-primary1"
              }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered || location.pathname === "/favorite-venue" ? (
              <AiFillHeart size={23} className="text-primary1" />
            ) : (
              <AiOutlineHeart size={23} />
            )}
          </button>

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

            {isProfileOpen && (
              <div className="absolute right-0 mt-40 w-40 bg-white shadow-lg rounded-md p-2 border">
                <p
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={() => {
                    navigate("/profile");
                    setIsProfileOpen(false);
                  }}
                >
                  Profile Saya
                </p>
                <p
                  className="cursor-pointer p-2 hover:bg-gray-100 text-red-500"
                  onClick={() => setShowLogoutAlert(true)}
                >
                  Logout
                </p>
              </div>
            )}
          </div>

          {role === "infobar" ? (
            <p className="text-sm font-semibold text-gray-800">{username}</p>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-primary1 px-5 py-2 rounded-full text-white hover:bg-primary1koma2 transition"
            >
              <p className="text-sm">Masuk</p>
            </button>
          )}
        </div>
      </div>
      {showLogoutAlert && (
        <SweetAlert
          show={showLogoutAlert}
          title="Apakah Kamu Yakin Ingin Keluar??"
          text="Anda akan keluar dari akun ini."
          type="warning"
          confirmButtonText="Ya, Logout"
          cancelButtonText="Batal"
          showCancelButton
          onConfirm={() => {
            setShowLogoutAlert(false);
            handleLogout();
          }}
          onCancel={() => setShowLogoutAlert(false)}
        />
      )}
    </div>
  );
};

export default HeaderNav;
