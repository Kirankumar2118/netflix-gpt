export default async function handler(req, res) {
  try {
    const { path = "", ...query } = req.query;

    const tmdbUrl = new URL(`https://api.themoviedb.org/3/${path}`);

    Object.entries(query).forEach(([key, value]) => {
      if (value) {
        tmdbUrl.searchParams.set(key, value);
      }
    });

    const response = await fetch(tmdbUrl, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
        accept: "application/json",
      },
    });

    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (error) {
    console.error("TMDB Proxy Error:", error);

    return res.status(500).json({
      error: "Failed to fetch TMDB data",
    });
  }
}
