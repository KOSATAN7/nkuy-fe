import SelectField from "@/components/Field/SelectField";
import TextField from "@/components/Field/TextField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";

const CreateVenue = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("Tambah Data Venue");
    setButtonLabel("Kembali");
    setButtonLink("/venue");
    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  const role = [
    { value: "super_admin", label: "Super Admin" },
    { value: "admin_venue", label: "Admin Venue" },
    { value: "infobar", label: "Infobar" },
  ];
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5">Data Venue</h1>
      <div className="grid grid-cols-3 gap-5">
        <TextField title="Username" />
        <TextField title="Alamat" />
        <TextField title="Kota" />
        <TextField title="Email" />
        <TextField title="Kapasitas" />
        <TextField title="Kontak" />
        <TextField title="Password" />
        <TextField title="Username" />
        <TextField title="Username" />
      </div>
      <h1 className="text-2xl font-semibold mb-5 mt-5">Akun venue</h1>
      <div className="grid grid-cols-2 gap-5 w-9/12">
        <TextField title="Email Venue" />
        <SelectField options={role} title={"Role Venue"} />
        <TextField title="Password" />
        <TextField title="Konfirmasi Password" />
      </div>
    </div>
  );
};

export default CreateVenue;
