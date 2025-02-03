import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_URL_NKUY_API;

export const getPertandinganAktif = async () => {
    const response = await axios.get(`${API_BASE_URL}/konten/aktif`);
    return response;
  };