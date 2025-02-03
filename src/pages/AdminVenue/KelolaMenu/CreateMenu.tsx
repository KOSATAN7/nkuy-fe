import CustomButton from "@/components/Button/CustomButton";
import CustomTextarea from "@/components/Field/CustomTextarea";
import ImageDrag from "@/components/Field/ImageDrag";
import TextField from "@/components/Field/TextField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";

const CreateMenu = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("Tambah Menu");
    setButtonLabel("Kembali");
    setButtonLink("/admin_venue/kelola_menu");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  return (
    <div className="p-10">
      <div className="grid grid-cols-2 w-9/12 gap-5 h-[400px]">
        <TextField title="Nama Makanan" />
        <TextField title="Harga Menu" />
        <CustomTextarea title="Deskripsi Menu" className="h-[244px]" />
        <ImageDrag
          title={"Foto Menu"}
          file={null}
          onFileChange={function (file: File | null): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <div className="mt-10">
        <CustomButton label="Tambah Menu" />
      </div>
    </div>
  );
};

export default CreateMenu;
