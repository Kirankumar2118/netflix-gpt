import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchDatafromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzZhMDFiYTZlNjAzZDI5M2JlY2Q1MTExOWEyZjJlNiIsIm5iZiI6MTc4MzUyMDA3OC45OTIsInN1YiI6IjZhNGU1YjRlZTU0MzM2NGIxMjdiOWRmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JmcMErDmKwZccIYmkfO-7Vi_yL7mQY5vSZOb8cb0I0",
      },
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
