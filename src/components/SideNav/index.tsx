import NavButton from "./components/NavButton";
import { FaSignOutAlt } from "react-icons/fa";
import Logo from "@/assets/Logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTrophy } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdCommentsDisabled } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CiMonitor } from "react-icons/ci";
import { Logout } from "@/service/index";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();
  const role = sessionStorage.getItem("role");

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
      navigate("/login");
    } catch (error) {
      console.error("Gagal logout:", error);
    }
  };

  return (
    <div className="bg-white shadow-xl p-5 rounded-2xl w-72 flex flex-col h-full">
      <div className="flex flex-col items-center mb-12">
        <img src={Logo} alt="Logo" className="h-16" />
      </div>
      <div className="flex flex-col gap-4">
        {role === "super_admin" && (
          <>
            <NavButton
              label="Dashboard"
              icon={<LuLayoutDashboard />}
              to="/dashboard"
            />
            <NavButton
              label="Pertandingan"
              icon={<FaTrophy />}
              to="/pertandingan"
            />
            <NavButton label="Venue" icon={<CiLocationOn />} to="/venue" />
            <NavButton
              label="Review"
              icon={<MdCommentsDisabled />}
              to="/review"
            />
            <NavButton
              label="Kelola Pengguna"
              icon={<FaUser />}
              to="/pengguna"
            />
          </>
        )}
        {role === "admin_venue" && (
          <>
            <NavButton
              label="Dashboard"
              icon={<LuLayoutDashboard />}
              to="/admin_venue/dashboard"
            />
            <NavButton
              label="Kelola Profile"
              icon={<RxDashboard />}
              to="/admin_venue/kelola_profile"
            />
            <NavButton
              label="Kelola Konten"
              icon={<MdOutlineDashboardCustomize />}
              to="/admin_venue/kelola_konten"
            />
            <NavButton
              label="Kelola Menu"
              icon={<MdOutlineDashboardCustomize />}
              to="/admin_venue/kelola_menu"
            />
            <NavButton
              label="Kelola Ulasan"
              icon={<CiMonitor />}
              to="/admin_venue/kelola_ulasan"
            />
          </>
        )}
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-around mt-4">
        <button
          onClick={handleLogout}
          className="text-xl p-3 bg-[#D9D9D9] rounded-full"
        >
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default SideNav;
