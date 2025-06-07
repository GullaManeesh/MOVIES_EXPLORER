const api_key = "a0486fc4";

export const fetchRating = async (id) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=a0486fc4&i=${id}`
  );
  const data = await response.json();
  return data;
};
