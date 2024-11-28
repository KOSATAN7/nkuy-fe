import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_URL_VENUE_API;

export const getVenue = async () => {
    const response = await axios.get(`${API_BASE_URL}/venue`);
    return response;
}