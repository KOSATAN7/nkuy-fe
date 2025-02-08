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
    setTitle("Detail Venue");
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
      try {
        const result = await getVenueById(Number(id), token);
        const payload = result.data.payload;

        payload.fasilitas = payload.fasilitas
          ? JSON.parse(payload.fasilitas)
          : [];
        payload.foto_foto = payload.foto_foto
          ? JSON.parse(payload.foto_foto)
          : [];

        setVenueData(payload);
        console.log("Venue Data", payload);
      } catch (error) {
        console.error("Error fetching venue data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="p-5">
      <div>
        {venueData ? (
          <table className="w-7/12">
            <tbody>
              <tr className="mb-2">
                <td className="py-4">Nama Venue</td>
                <td className="py-4">:</td>
                <td className="py-4">{venueData.nama}</td>
              </tr>
              <tr>
                <td className="py-3">Alamat</td>
                <td className="py-3">:</td>
                <td className="py-3">{venueData.alamat}</td>
              </tr>
              <tr>
                <td className="py-3">Kontak</td>
                <td className="py-3">:</td>
                <td className="py-3">{venueData.kontak}</td>
              </tr>
              <tr>
                <td className="py-3">Kota</td>
                <td className="py-3">:</td>
                <td className="py-3">{venueData.kota}</td>
              </tr>
              <tr>
                <td className="py-3">Kapasitas</td>
                <td className="py-3">:</td>
                <td className="py-3">{venueData.kapasitas}</td>
              </tr>
              <tr>
                <td className="py-3 align-top">Fasilitas</td>
                <td className="py-3 align-top">:</td>
                <td className="py-3">
                  {Array.isArray(venueData.fasilitas) ? (
                    <ul>
                      {venueData.fasilitas.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>Tidak ada fasilitas</p>
                  )}
                </td>
              </tr>
              <tr>
                <td className="py-3">Foto Utama</td>
                <td className="py-3">:</td>
                <td className="py-3">
                  <img
                    src={
                      `https://nobarkuy.icraftds.id/storage/${venueData.foto_utama}` ||
                      "https://dummyimage.com/600x400/caced8/000000.png&text=Gambar+Tidak+Tersedia"
                    }
                    className="w-20 h-20"
                  />
                </td>
              </tr>
              <tr>
                <td className="py-3">Foto Venue</td>
                <td className="py-3">:</td>
                <td className="py-3">
                  {venueData.foto_foto.length > 0 ? (
                    <div className="flex space-x-5">
                      {venueData.foto_foto.map(
                        (foto: string, index: number) => (
                          <img
                            key={index}
                            src={`https://nobarkuy.icraftds.id/storage/${foto}`}
                            alt={`Foto Venue ${index + 1}`}
                            className="w-20 h-20 object-cover"
                          />
                        )
                      )}
                    </div>
                  ) : (
                    "Tidak tersedia"
                  )}
                </td>
              </tr>

              <tr>
                <td className="py-3">Video Venue</td>
                <td className="py-3">:</td>
                <td className="py-3">{venueData.video || "Tidak tersedia"}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ShowVenue;
