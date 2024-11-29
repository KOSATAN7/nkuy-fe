import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_URL_NKUY_API;

export const getKategori = async () => {
    const response = await axios.get(`${API_BASE_URL}/kategori`);
    return response;
}

export const postKategori = async (nama: string) => {
    const response = await axios.post(`${API_BASE_URL}/kategori`,{nama});
    return response;
}

export const deleteKategori = async (id: number) => {
    const response = await axios.delete(`${API_BASE_URL}/kategori/${id}`);
    return response;
}