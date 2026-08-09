import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_BEARER_TOKEN = process.env.REACT_APP_TMDB_BEARER_TOKEN;

export const fetchDatafromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: {
        Authorization: `Bearer ${API_BEARER_TOKEN}`,
      },
      params,
    });

    return data;
  } catch (error) {
    const status = error.response?.status;
    const message = error.response?.data?.status_message || error.message;

    console.error("TMDB ERROR:", status, message);

    // TEMPORARY: show the actual error on the phone
    alert(`TMDB Error\nStatus: ${status}\n${message}`);

    return null;
  }
};
