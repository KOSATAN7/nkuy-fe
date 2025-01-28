import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect, useState } from "react";

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
  return <div>CreatePertandingan</div>;
};

export default CreatePertandingan;
