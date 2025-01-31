import CustomButton from "@/components/Button/CustomButton";
import SelectField from "@/components/Field/SelectField";
import TextField from "@/components/Field/TextField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";

const CreatePertandingan = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  useEffect(() => {
    setTitle("Tambah Pertandingan");
    setButtonLabel("Kembali");
    setButtonLink("/pertandingan");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5">Data Pertandingan</h1>
      <div className="flex space-x-10">
        <div className="space-y-3">
          <SelectField options={[]} title={"Nama Cabang Olahraga"} />
          <SelectField options={[]} title={"Negara"} />
          <SelectField options={[]} title={"Liga"} />
          <div className="flex items-center space-x-5">
            <SelectField options={[]} title={"Tim 1"} />
            <span className="mt-8">VS</span>
            <SelectField options={[]} title={"Tim 2"} />
          </div>
        </div>
        <div className="space-y-3">
          <TextField title="Tanggal" />
          <TextField title="waktu" />
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <CustomButton label="Tambah Data" />
      </div>
    </div>
  );
};

export default CreatePertandingan;
