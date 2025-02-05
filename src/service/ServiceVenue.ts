import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_URL_NKUY_API;

// Function to get the list of venues for a specific match
export const getListVenue = async (id: number) => {
  if (!id) {
    throw new Error("pertandinganId is undefined");
  }

  try {
    const response = await axios.get(
      `${API_BASE_URL}/venue/pertandingan/${id}/aktif`,
      {
        headers: { Accept: "Application/json" },
      }
    );

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching venues:", error);
    throw error;
  }
};

// Function to get a venue by ID
export const getDetailVenue = async (id: number) => {
  console.log("Memanggil API untuk venue ID:", id); // ✅ Debugging Step 4

  try {
    const response = await axios.get(`${API_BASE_URL}/venue/${id}`, {
      headers: { Accept: "Application/json" },
    });

    console.log("Data dari API:", response.data); // ✅ Debugging Step 5
    return response.data;
  } catch (error) {
    console.error("Error fetching venue by ID:", error);
    throw error;
  }
};