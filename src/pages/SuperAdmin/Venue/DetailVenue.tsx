import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { getVenueById } from "@/service/index";
import { Venue } from "@/utils/interface";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowVenue = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [venueData, setVenueData] = useState<Venue | null>(null);
  const { id } = useParams<{ id: string }>();

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

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Cannot Find Id Or Token");
      }
      const result = await getVenueById(Number(id), token);
      setVenueData(result.data.payload);
      console.log("Venue Data", result.data.payload);
    };
    fetchData();
  }, []);

  return (
    <div className="p-5">
      <div>
        <table className="w-9/12">
          <tbody>
            {venueData ? (
              <table className="min-w-full">
                <tbody className="">
                  <tr>
                    <td>Nama Venue</td>
                    <td>:</td>
                    <td>{venueData.nama}</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>{venueData.alamat}</td>
                  </tr>
                  <tr>
                    <td>Kontak</td>
                    <td>:</td>
                    <td>{venueData.kontak}</td>
                  </tr>
                  <tr>
                    <td>Kota</td>
                    <td>:</td>
                    <td>{venueData.kota}</td>
                  </tr>
                  <tr>
                    <td>Kapasitas</td>
                    <td>:</td>
                    <td>{venueData.kapasitas}</td>
                  </tr>
                  <tr>
                    <td className="align-top">Fasilitas</td>
                    <td className="align-top">:</td>
                    <td>
                      {venueData.fasilitas.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Foto Utama</td>
                    <td>:</td>
                    <td>{venueData.foto_utama}</td>
                  </tr>
                  <tr>
                    <td>Foto Venue</td>
                    <td>:</td>
                    <td>{venueData.foto_foto}</td>
                  </tr>
                  <tr>
                    <td>Video Venue</td>
                    <td>:</td>
                    <td>{venueData.video}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>Loading...</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowVenue;
