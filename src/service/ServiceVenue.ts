import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_URL_NKUY_API;

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