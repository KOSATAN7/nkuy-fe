import SelectField from "@/components/Field/SelectField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";
import PenggunaCard from "./components/PenggunaCard";

const KelolaPenggunaPage = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("kelola Data Pengguna");
    setButtonLabel("");
    setButtonLink("");
    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  const DummyData = [
    {
      id: 1,
      email: "kuda@gmail.com",
      nama: "Black",
      nama_venue: "Coffe Kanzler",
      role: "Admin Venue",
      status: "Aktif",
    },
    {
      id: 2,
      email: "kuda@gmail.com",
      nama: "Black",
      nama_venue: "Coffe Kanzler",
      role: "Admin Venue",
      status: "Aktif",
    },
  ];

  return (
    <div>
      <div className="flex justify-end border-b-2 p-5 border-black">
        <SelectField options={[]} title={""} />
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {DummyData.map((data, index) => (
          <PenggunaCard
            key={index}
            email={data.email}
            nama={data.nama}
            nama_venue={data.nama_venue}
            role={data.role}
            status={data.status}
            id={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default KelolaPenggunaPage;
