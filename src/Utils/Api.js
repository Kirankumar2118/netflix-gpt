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
    console.log(error);
    return error;
  }
};
