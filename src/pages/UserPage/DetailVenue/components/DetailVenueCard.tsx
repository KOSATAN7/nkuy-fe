import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  ZoomControl,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CiHeart } from "react-icons/ci";
import L from "leaflet";
import "leaflet-routing-machine";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import gambar from "@/assets/1.png";

interface VenueProps {
  venue?: {
    id: number;
    nama: string;
    alamat: string;
    kontak: string;
    kota: string;
    latitude: string;
    longitude: string;
    fasilitas: string | null;
    status: string;
    kapasitas: number;
    foto_utama: string | null;
    foto_foto: string[] | null;
    video: string | null;
  };
}

const RoutingControl = ({ venue }: { venue: VenueProps["venue"] }) => {
  const map = useMap();
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );

  useEffect(() => {
    if (!venue) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);

        // Tambahkan routing control
        const routingControl = L.Routing.control({
          waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(parseFloat(venue.latitude), parseFloat(venue.longitude)),
          ],
          routeWhileDragging: true,
          show: false, // Sembunyikan panel petunjuk arah
          addWaypoints: false,
          fitSelectedRoutes: true,
          lineOptions: {
            styles: [{ color: "blue", weight: 5 }],
            extendToWaypoints: false,
            missingRouteTolerance: 0,
          },
          // Hapus marker default
        }).addTo(map);

        // Tambahkan marker titik awal (userLocation)
        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup("Lokasi Anda")
          .openPopup();

        // Tambahkan marker titik tujuan (venue) dengan event klik untuk membuka Google Maps
        L.marker([parseFloat(venue.latitude), parseFloat(venue.longitude)])
          .addTo(map)
          .bindPopup(`Tujuan: ${venue.nama}`)
          .on("click", () => {
            window.open(
              `https://www.google.com/maps?q=${parseFloat(venue.latitude)},${parseFloat(venue.longitude)}`,
              "_blank"
            );
          });

        // Menghapus panel routing jika ada
        const container = document.querySelector(".leaflet-routing-container");
        if (container) container.remove();

        return () => map.removeControl(routingControl);
      },
      (error) => {
        console.error("Error fetching location: ", error);
      }
    );
  }, [map, venue]);

  return null;
};

const DetailVenueCard: React.FC<VenueProps> = ({ venue }) => {
  if (!venue) {
    return (
      <p className="text-center text-gray-500">Data venue tidak tersedia</p>
    );
  }

  const navigate = useNavigate();

  const handlePesanClick = () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Anda Harus Login Terlebih Dahulu",
        text: "Silakan login untuk melanjutkan pemesanan.",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      navigate(`/menu/${venue.id}`);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-8 rounded-xl mt-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <img
          src={venue.foto_utama || gambar}
          className="w-full lg:w-1/2 h-96 object-cover rounded-xl"
        />
        <div className="mt-6 lg:mt-0 lg:ml-8 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{venue?.nama}</h1>
          <p className="text-gray-600 text-lg mt-4">{venue?.alamat}</p>

          <div className="mt-8">
            <span className="block w-16 h-1 bg-gray-800"></span>
            <p className="text-gray-800 font-medium mt-4">
              Kapasitas {venue?.kapasitas} orang
            </p>
          </div>

          <div className="flex items-center mt-8">
            <CiHeart className="w-8 h-8 text-gray-500 hover:text-blue-500 cursor-pointer mr-52" />
            <button
              className="px-8 py-3 bg-primary1 text-white font-semibold rounded-lg"
              onClick={handlePesanClick}
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Galeri Foto */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {venue?.foto_foto && venue.foto_foto.length > 0 ? (
          venue.foto_foto.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              className="w-full h-40 object-cover rounded-lg"
            />
          ))
        ) : (
          <p className="text-gray-500">Tidak ada gambar tersedia</p>
        )}
      </div>

      {/* Leaflet Map */}
      <div className="relative w-full h-96 mt-16 rounded-lg overflow-hidden z-10">
        <MapContainer
          center={[parseFloat(venue.latitude), parseFloat(venue.longitude)]}
          zoom={15}
          className="w-full h-full"
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[parseFloat(venue.latitude), parseFloat(venue.longitude)]}
          >
            <Popup>{venue.nama}</Popup>
            <Tooltip sticky>{venue.nama}</Tooltip>
          </Marker>
          <ZoomControl position="bottomright" />
          <RoutingControl venue={venue} />
        </MapContainer>
      </div>
    </div>
  );
};

export default DetailVenueCard;
