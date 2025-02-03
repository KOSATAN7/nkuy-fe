import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";
import foto from "@/assets/Nasi Goreng.jpg";
import MenuCard from "./components/MenuCard";
import { formatRupiah } from "@/utils/FormatRupiah";

const KelolaMenu = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

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

  const DummyData = [
    {
      id: 1,
      image: foto,
      nama: "Nasi Goreng",
      harga: 250000,
      description: "Nasi Goreng Enak Sekali",
    },
    {
      id: 2,
      image: foto,
      nama: "Nasi Goreng",
      harga: 250000,
      description: "Nasi Goreng Enak Sekali",
    },
    {
      id: 3,
      image: foto,
      nama: "Nasi Goreng",
      harga: 250000,
      description: "Nasi Goreng Enak Sekali",
    },
    {
      id: 4,
      image: foto,
      nama: "Nasi Goreng",
      harga: 250000,
      description: "Nasi Goreng Enak Sekali",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {DummyData.map((data, index) => (
          <MenuCard
            key={index}
            image={data.image}
            nama={data.nama}
            harga={formatRupiah(data.harga)}
            description={data.description}
            updatePath={data.id}
          />
        ))}
      </div>
    </div>
  );
};
export default KelolaMenu;
