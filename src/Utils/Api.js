import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_BEARER_TOKEN = process.env.REACT_APP_TMDB_BEARER_TOKEN;

export const fetchDatafromApi = async (url, params = {}) => {
  try {
    const headers = { accept: "application/json" };

    if (!API_KEY && API_BEARER_TOKEN) {
      headers.Authorization = `Bearer ${API_BEARER_TOKEN}`;
    }

    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params: API_KEY ? { api_key: API_KEY, ...params } : params,
    });

    return data;
  } catch (error) {
    console.error("TMDB API Error:", {
      status: error.response?.status,
      message: error.message,
      data: error.response?.data,
    });

    return null;
  }
};
