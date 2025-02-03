import CustomButton from "@/components/Button/CustomButton";
import ImageUpload from "@/components/Field/ImageUpload";
import SelectField from "@/components/Field/SelectField";
import TextField from "@/components/Field/TextField";
import UploadField from "@/components/Field/UploadField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";

const CreateProvider = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("Tambah Provider");
    setButtonLabel("Kembali");
    setButtonLink("/admin_venue/kelola_provider");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  return (
    <div className="p-10 w-9/12">
      <div className="space-y-10">
        <h1 className="text-xl font-semibold">Provider</h1>
        <div className="grid grid-cols-2 gap-5">
          <SelectField title="Jenis Metode Pembayaran" options={[]} />
          <TextField title="Nama Penerima" />
          <TextField title="Nama Provider" />
          <UploadField title={"Foto Provider"} />
          <TextField title="Nomor Rekening" />
        </div>
      <div>
        <CustomButton label="Tambah Provider" />
      </div>
      </div>
    </div>
  );
};

export default CreateProvider;
