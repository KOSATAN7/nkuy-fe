import CustomButton from "@/components/Button/CustomButton";
import SelectField from "@/components/Field/SelectField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";

const CreateKonten = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("Tambah Konten");
    setButtonLabel("Kembali");
    setButtonLink("/admin_venue/kelola_konten");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  return (
    <div className="w-6/12">
      <div className="space-y-10 p-20">
        <h1>Tambahkan Konten yang tersedia untuk nobar di tempat anda</h1>
        <SelectField options={[]} title={"Nama Konten"} />
        <CustomButton label="Tambah Pertandingan" />
      </div>
    </div>
  );
};

export default CreateKonten;
