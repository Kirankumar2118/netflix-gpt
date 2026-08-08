const API_BEARER_TOKEN = process.env.REACT_APP_TMDB_BEARER_TOKEN;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_BEARER_TOKEN}`,
  },
};

export const url = "https://api.themoviedb.org/3/movie/now_playing?&page=1";
