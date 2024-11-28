import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavButtonProps {
  label: string;
  icon: React.ReactNode;
  to: string;
}

const NavButton: React.FC<NavButtonProps> = ({ label, icon, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-4 p-3 rounded-lg text-sm font-medium ${
        isActive ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default NavButton;
