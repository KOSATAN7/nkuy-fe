import React, { useEffect } from "react";
import { useHeaderContext } from "../../components/SideNav/components/HeaderContext";

const Kategori: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("Kelola Data Kategori");
    setButtonLabel("Tambah Kategori");
    setButtonLink("/");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  return (
    <div>
      <h1>Kuda Liar Kategori</h1>
    </div>
  );
};

export default Kategori;
