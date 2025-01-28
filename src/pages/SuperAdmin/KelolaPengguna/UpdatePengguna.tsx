import CustomButton from "@/components/Button/CustomButton";
import SelectField from "@/components/Field/SelectField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";

const UpdatePengguna = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("kelola Data Pengguna");
    setButtonLabel("Kembali");
    setButtonLink("/pengguna");
    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);
  return (
    <div className="px-16 py-10">
      <div>
        <h1 className="text-2xl font-semibold ">Edit Pengguna</h1>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <SelectField options={[]} title={"Email"} />
          <SelectField options={[]} title={"Role"} />
          <SelectField options={[]} title={"Nama Pengguna"} />
          <SelectField options={[]} title={"Status"} />
          <SelectField options={[]} title={"Nama Venue"} />
        </div>
        <div className="flex justify-end mt-5">
          <CustomButton label={"Ubah Data"} />
        </div>
      </div>
    </div>
  );
};

export default UpdatePengguna;
