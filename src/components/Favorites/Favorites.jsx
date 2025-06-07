import React from "react";
import FavMovieCard from "../cards/favMovieCard";
import { useFavContext } from "../contexts/FavContext";

function Favorites() {
  const { favorites, removeFromFav } = useFavContext();

  return (
    <div className="bg-black w-full min-h-screen ml-5.5 p-5 overflow-auto">
      <h1 className="mt-10.5 ml-5 text-3xl text-amber-500">FAVOURITES</h1>
      <div className="p-5 grid grid-cols-4 gap-1.5">
        {favorites && favorites.length > 0 ? (
          favorites.map((movie) => {
            // Safely handle rating conversion
            const rating =
              typeof movie.vote_average === "number"
                ? movie.vote_average.toFixed(1)
                : movie.imdbRating || "N/A";

            return (
              <FavMovieCard
                key={movie.id || movie.imdbID}
                title={movie.Title || movie.title}
                poster={movie.Poster}
                year={
                  movie.release_date
                    ? movie.release_date.split("-")[0]
                    : movie.Year
                }
                rating={rating}
                id={movie.id || movie.imdbID}
                removeFav={() => removeFromFav(movie.id || movie.imdbID)}
              />
            );
          })
        ) : (
          <p className="text-white col-span-full text-center mt-10">
            No favorites added yet
          </p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
