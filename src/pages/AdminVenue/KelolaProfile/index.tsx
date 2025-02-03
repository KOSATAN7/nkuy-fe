import HeaderFoto from "@/assets/HeaderProfile.png";
import foto from "@/assets/people/obet.jpg";
import CustomButton from "@/components/Button/CustomButton";
import CustomTextarea from "@/components/Field/CustomTextarea";
import ImageUpload from "@/components/Field/ImageUpload";
import TextField from "@/components/Field/TextField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";

const KelolaProfile = () => {
  const name = sessionStorage.getItem("username");
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("Kelola Profile");
    setButtonLabel("");
    setButtonLink("");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  return (
    <div>
      <div className="flex my-10 mx-10 items-center space-x-5">
        <ImageUpload
          previewImage={foto}
          onUpload={function (file: File): void {
            throw new Error("Function not implemented.");
          }}
        />
        <div>
          <h1 className="text-lg font-semibold text-text1">{name}</h1>
          <h1 className="font-medium">
            <span className="text-succes">Akun kamu sudah siap,</span>
          </h1>
        </div>
      </div>
      <div className="flex space-x-5">
        <div className="flex flex-col items-start border-r-2 p-2 space-y-5 border-neutral1 w-52">
          <button className="p-2 text-neutral1 font-medium hover:text-white transition-all duration-300 hover:bg-primary1 rounded-lg w-full text-start">
            Personal
          </button>
          <button className="p-2 text-neutral1 font-medium hover:text-white transition-all duration-300 hover:bg-primary1 rounded-lg w-full text-start">
            Password & Security
          </button>
        </div>
        <div className="flex w-full space-x-5">
          <div className="w-full">
            <h1 className="text-xl font-medium text-neutral1">Edit Profile</h1>
            <h2 className="font-medium text-neutral1 py-3">Personal</h2>
            <div className="w-full space-y-5">
              <TextField titleClassName="font-medium" title="Nama Venue" />
              <TextField titleClassName="font-medium" title="Fasilitas Venue" />
              <TextField titleClassName="font-medium" title="Kapasitas Venue" />
              <CustomTextarea
                title="Alamat Venue"
                className="h-[330px]"
                titleClassName="font-medium"
              />
            </div>
          </div>
          <div className="w-full mt-20 space-y-5">
            <div>
              <h1 className="font-medium">Foto Utama Venue</h1>
              <div className="border-2 p-3 rounded-lg">
                <img
                  src={foto}
                  className="w-full object-cover h-44 rounded-lg"
                />
              </div>
            </div>
            <div>
              <h1 className="font-medium">Foto Utama Venue</h1>
              <div className="border-2 space-x-2 flex p-3 rounded-lg">
                <img
                  src={foto}
                  className="w-full object-cover h-44 rounded-lg"
                />
                <img
                  src={foto}
                  className="w-full object-cover h-44 rounded-lg"
                />
                <img
                  src={foto}
                  className="w-full object-cover h-44 rounded-lg"
                />
              </div>
            </div>
            <div>
              <TextField
                titleClassName="font-medium"
                title="No Telepon Venue"
              />
              <TextField titleClassName="font-medium" title="Kota" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-48 mt-5">
        <CustomButton label="Simpan Perubahan" />
      </div>
    </div>
  );
};

export default KelolaProfile;
