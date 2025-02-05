import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../LandingPage/Layout";
import DetailVenueCard from "./components/DetailVenueCard";
import { getDetailVenue } from "@/service/ServiceVenue";
const DetailVenue: React.FC = () => {
  const { venueId } = useParams<{ venueId: string }>();
  const [venueData, setVenueData] = useState<any | null>(null);

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await getDetailVenue(parseInt(venueId!));
        console.log("Data venue yang diterima:", response); // Debugging
        setVenueData(response.payload); // 🔥 Fix di sini
      } catch (error) {
        console.error("Gagal mengambil data venue:", error);
      }
    };

    if (venueId) fetchVenue();
  }, [venueId]);


  if (!venueData) return <p>Loading...</p>;


  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center py-10">
        <DetailVenueCard venue={venueData} />
      </div>
    </MainLayout>
  );
};

export default DetailVenue;
