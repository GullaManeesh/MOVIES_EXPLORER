const api_key = "a0486fc4";
export const getSearchedMovies = async (movieName) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${api_key}&s=${movieName}`
  );
  const data = await response.json();
  return data.Search;
};
