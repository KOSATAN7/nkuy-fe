import SelectField from "@/components/Field/SelectField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { getKategori } from "@/service/index";
import { useEffect, useState } from "react";

const CreateSubKategori = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [kategoriList, setKategoriList] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    setTitle("Tambah Data Sub Kategori");
    setButtonLabel("Kembali");
    setButtonLink("/subkategori");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getKategori();
      const formattedData = result.data.payload.map((item: { id: number; nama: string }) => ({
        value: item.id.toString(),
        label: item.nama,
      }));

      setKategoriList(formattedData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <SelectField options={kategoriList} title={"Nama Kategori"} />
      </div>
    </div>
  );
};

export default CreateSubKategori;
