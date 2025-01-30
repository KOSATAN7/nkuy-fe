import SelectField from "@/components/Field/SelectField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect, useState } from "react";
import PenggunaCard from "./components/PenggunaCard";
import { KelolaUser } from "@/utils/interface";
import { getUser, deleteUser } from "@/service/index";
import Swal from "sweetalert2";

const KelolaPenggunaPage = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [userData, setUserData] = useState<KelolaUser[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("");

  useEffect(() => {
    setTitle("Kelola Data Pengguna");
    setButtonLabel("");
    setButtonLink("");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  const fetchUsers = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const result = await getUser(token);
      setUserData(result.data.data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Hapus Pengguna?",
      text: "Apakah Anda yakin ingin menghapus pengguna ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Batal",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          throw new Error("Token tidak ditemukan. Silakan login ulang.");
        }

        await deleteUser(id, token);
        setUserData(userData.filter((user) => user.id !== id));
        Swal.fire({
          title: "Berhasil!",
          text: "Pengguna berhasil dihapus.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        console.error("Gagal menghapus pengguna:", error);
        Swal.fire({
          title: "Gagal!",
          text: "Terjadi kesalahan saat menghapus pengguna.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  const formatRole = (role: string): string => {
    switch (role) {
      case "super_admin":
        return "Super Admin";
      case "admin_venue":
        return "Admin Venue";
      case "infobar":
        return "Infobar";
      default:
        return role;
    }
  };

  const filteredUserData = selectedRole
    ? userData.filter((user) => user.role === selectedRole)
    : userData;

  const roleOption = [
    { value: "", label: "Semua" },
    { value: "super_admin", label: "Super Admin" },
    { value: "admin_venue", label: "Admin Venue" },
    { value: "infobar", label: "Infobar" },
  ];

  return (
    <div>
      <div className="flex justify-end border-b-2 p-5 border-black">
        <SelectField
          options={roleOption}
          title={""}
          onChange={handleRoleChange}
        />
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {filteredUserData.map((data, index) => (
          <PenggunaCard
            key={index}
            email={data.email}
            nama={data.username}
            role={formatRole(data.role)}
            id={data.id}
            onDelete={() => handleDelete(data.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default KelolaPenggunaPage;
