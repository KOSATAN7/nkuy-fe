import NavButton from "./components/NavButton";
import { FaBell, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import Logo from "@/assets/Logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { CiMonitor } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";


const SideNav = () => {
  return (
    <div className="bg-white shadow-xl p-5 rounded-2xl w-72 flex flex-col h-full">
      <div className="flex flex-col items-center mb-12">
        <img src={Logo} alt="Logo" className="h-16" />
      </div>

      <div className="flex flex-col gap-4">
        <NavButton label="Dashboard" icon={<LuLayoutDashboard />} to="/dashboard" />
        <NavButton label="Kategori" icon={<RxDashboard />} to="/kategori" />
        <NavButton label="Sub Kategori" icon={<MdOutlineDashboardCustomize />} to="/subkategori" />
        <NavButton label="Film" icon={<CiMonitor />} to="/film" />
        <NavButton label="Venue" icon={<IoLocationOutline />} to="/venue" />
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-around mt-4">
        <NavButton label="" icon={<FaBell />} to="/notifications" />
        <NavButton label="" icon={<FaUserAlt />} to="/profile" />
        <NavButton label="" icon={<FaSignOutAlt />} to="/logout" />
      </div>
    </div>
  );
};

export default SideNav;
