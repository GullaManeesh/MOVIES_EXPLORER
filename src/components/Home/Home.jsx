import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/trendingmovies";
import MovieCard from "../cards/MovieCard";
import { getSearchedMovies } from "../api/omdb";
import { fetchRating } from "../api/imdbRating";
import { useFavContext } from "../contexts/FavContext";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState("");

  const { favorites, addToFav } = useFavContext();

  const [search, setSearch] = useState("");

  const searchMovie = async (searchQuery) => {
    const data = await getSearchedMovies(searchQuery);

    if (data && Array.isArray(data)) {
      const moviesWithRatings = await Promise.all(
        data.map(async (movie) => {
          const imdbInfo = await fetchRating(movie.imdbID);
          return {
            ...movie,
            imdbRating: imdbInfo.imdbRating || "N/A",
          };
        })
      );

      setTrendingMovies(moviesWithRatings);
    } else {
      setTrendingMovies([]);
    }
  };

  useEffect(() => {
    if (search.trim() === "") {
      const getData = async () => {
        const data = await fetchTrendingMovies();
        const rating = await setTrendingMovies(data);
      };
      getData();
    }
  }, [search]);

  useEffect(() => {
    if (search.trim() !== "") {
      searchMovie(search);
    }
  }, [search]);

  return (
    <div className="bg-black w-full min-h-screen ml-5.5 p-5 overflow-hidden">
      <div className="w-full h-[45px] flex items-center justify-center  px-1.5">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="search for movies"
          className="outline-2 h-full px-5  outline-amber-600 rounded-tl-2xl rounded-bl-2xl w-[60%]  "
        />
        <button className=" ml-0.1 rounded-tr-2xl rounded-br-2xl outline-0 bg-amber-600 text-white h-[48px] flex justify-center items-center w-13 hover:cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <h1 className="mt-10.5 ml-5 text-3xl text-amber-500">
        {search.trim() === "" ? "Trending now" : ""}
      </h1>
      <div className="p-5  grid grid-cols-4 gap-1.5">
        {trendingMovies && trendingMovies.length > 0 ? (
          trendingMovies
            .filter((movie) => movie.Title || movie.title)
            .map((movie) => (
              <MovieCard
                key={movie.id || movie.imdbID}
                title={movie.Title || movie.title}
                poster={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : movie.Poster
                }
                year={
                  movie.release_date
                    ? movie.release_date.split("-")[0]
                    : movie.Year
                }
                rating={
                  movie.vote_average?.toFixed(1) || movie.imdbRating || "N/A"
                }
                id={movie.id || movie.imdbID}
                onAddToFav={() => {
                  addToFav(movie);
                }}
              />
            ))
        ) : (
          <p className="text-white mt-4">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
