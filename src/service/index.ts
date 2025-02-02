import { BuatVenue, UbahVenue, UpdateUser } from "@/utils/interface";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_URL_NKUY_API;

export const PostLogin = async (email: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/login`, {
    email,
    password,
  });
  return response.data;
};

export const Logout = async (token: string) => {
  const response = await axios.post(
    `${API_BASE_URL}/logout`,
    {},
    {
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const checkLogin = async (token: string) => {
  const response = await axios.get(`${API_BASE_URL}/check-login`, {
    headers: {
      Accept: "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getPertandingan = async (token: string) => {
  const response = await axios.get(`${API_BASE_URL}/pertandingan`, {
    headers: {
      Accept: "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getCabangOlahraga = async (token: string) => {
  const response = await axios.get(`${API_BASE_URL}/sports/categories`, {
    headers: {
      Accept: "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const deletePertandingan = async (id: number, token: string) => {
  const response = await axios.delete(
    `${API_BASE_URL}/pertandingan/hapus/${id}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const putStatusPertandingan = async (id: number, token: string) => {
  const response = await axios.put(
    `${API_BASE_URL}/pertandingan/status/${id}`,
    {},
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const getVenue = async (token: string) => {
  const response = await axios.get(`${API_BASE_URL}/venue`, {
    headers: {
      Accept: "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getVenueById = async (id: number, token: string) => {
  const response = await axios.get(`${API_BASE_URL}/venue/${id}`, {
    headers: {
      Accept: "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const postVenue = async (data: BuatVenue | FormData, token: string) => {
  const response = await axios.post(`${API_BASE_URL}/venue`, data, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const putVenue = async (id: number, data: UbahVenue, token: string) => {
  const response = await axios.put(`${API_BASE_URL}/venue/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const putStatusVenue = async (id: number, token: string) => {
  const response = await axios.put(
    `${API_BASE_URL}/venue/status/${id}`,
    {},
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteVenue = async (id: number, token: string) => {
  const response = await axios.delete(`${API_BASE_URL}/venue/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getUser = async (token: string) => {
  const response = await axios.get(`${API_BASE_URL}/user/`, {
    headers: {
      Accept: "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getUserById = async (id: number, token: string) => {
  const response = await axios.get(`${API_BASE_URL}/user/${id}`, {
    headers: {
      Accept: "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const putUser = async (
  id: number,
  data: UpdateUser | FormData,
  token: string
) => {
  const response = await axios.put(`${API_BASE_URL}/user/${id}`, data, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteUser = async (id: number, token: string) => {
  const response = await axios.delete(`${API_BASE_URL}/user/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
