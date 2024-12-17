import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_URL_NKUY_API;

interface POSTFILM {
    judul: string;
    kategori: number;
    jadwal: number;
    harga: string;
    status: string;
}

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

export const getFilm = async () => {
    const response = await axios.get(`${API_BASE_URL}/film`);
    return response;
}

export const postFilm = async (data: POSTFILM) => {
    const response = await axios.post(`${API_BASE_URL}/film`,data)
    return response;
}

export const deleteFilm = async (id: number) => {
    const response = await axios.delete(`${API_BASE_URL}/film/${id}`);
    return response;
}

export const getVenue = async () => {
    const response = await axios.get(`${API_BASE_URL}/venue`);
    return response;
}

export const deleteVenue = async (id: number) => {
    const response = await axios.delete(`${API_BASE_URL}/venue/${id}`);
    return response;
}