import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect, useState } from "react";
import MenuCard from "./components/MenuCard";
import { formatRupiah } from "@/utils/FormatRupiah";
import { Menu } from "@/utils/interface";
import { getMenubyVenueId, putStatusMenu } from "@/service/index";

const KelolaMenu = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [menuData, setMenuData] = useState<Menu[]>([]);

  useEffect(() => {
    setTitle("Kelola Menu");
    setButtonLabel("Tambah Menu");
    setButtonLink("/admin_venue/kelola_menu/create");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      const venueId = sessionStorage.getItem("venueId");

      if (!venueId || !token) {
        throw new Error("Login Goblogg!!!");
      }

      const response = await getMenubyVenueId(Number(venueId), token);
      setMenuData(response.data);
    };
    fetchData();
  }, []);

  const handleToggleStatus = async (id: number, currentStatus: string) => {
    setMenuData((prevData) =>
      prevData.map((menu) =>
        menu.id === id
          ? {
              ...menu,
              status: currentStatus === "aktif" ? "tidak_aktif" : "aktif",
            }
          : menu
      )
    );

    try {
      const token = sessionStorage.getItem("token");
      const venueId = sessionStorage.getItem("venueId");

      if (!venueId || !token) {
        throw new Error("Login Goblogg!!!");
      }
      await putStatusMenu(Number(venueId), id, token);
    } catch (error) {
      console.error("Gagal memperbarui status menu:", error);

      setMenuData((prevData) =>
        prevData.map((menu) =>
          menu.id === id
            ? {
                ...menu,
                status: currentStatus,
              }
            : menu
        )
      );
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {menuData.map((data, index) => (
          <MenuCard
            key={index}
            image=""
            nama={data.nama}
            harga={formatRupiah(Number(data.harga))}
            description={data.deskripsi}
            kesediaan={data.status}
            id={data.id}
            updatePath={data.id}
            onToggleStatus={handleToggleStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default KelolaMenu;
