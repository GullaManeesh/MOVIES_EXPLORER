const apiKey = "96078fadf60638c713bd0dc3849f3f4d";
const baseUrl = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const response = await fetch(
    `${baseUrl}/trending/all/week?api_key=${apiKey}`
  );
  const data = await response.json();
  return data.results;
};
