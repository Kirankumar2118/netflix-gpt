import axios from "axios";

export const fetchDatafromApi = async (path, params) => {
  try {
    const { data } = await axios.get("/api/tmdb", {
      params: {
        path: path.replace(/^\/+/, ""),
        ...params,
      },
    });

    return data;
  } catch (error) {
    console.error("TMDB Proxy Error:", {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });

    return null;
  }
};
