import React, { useEffect } from "react";
import { useHeaderContext } from "../../components/SideNav/components/HeaderContext";

const Film: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("Kelola Data Film");
    setButtonLabel("Tambah Film");
    setButtonLink("/create");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  return (
    <div>
      <h1>Kuda Liar Film</h1>
    </div>
  );
};

export default Film;
