import React, { useEffect } from "react";
import { useHeaderContext } from "../../components/SideNav/components/HeaderContext";

const Venue: React.FC = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("Kelola Data Venue");
    setButtonLabel("Tambah Venue");
    setButtonLink("/");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  return (
    <div>
      <h1>Kuda Liar Venue</h1>
    </div>
  );
};

export default Venue;
