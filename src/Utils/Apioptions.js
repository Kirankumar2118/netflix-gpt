const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_BEARER_TOKEN = process.env.REACT_APP_TMDB_BEARER_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    ...(API_KEY ? {} : { Authorization: `Bearer ${API_BEARER_TOKEN}` }),
  },
};

export const tmdbFetchUrl = (path, params = {}) => {
  const url = new URL(`${BASE_URL}${path}`);

  if (API_KEY) {
    url.searchParams.set("api_key", API_KEY);
  }

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
};

export const url = tmdbFetchUrl("/movie/now_playing", { page: 1 });
