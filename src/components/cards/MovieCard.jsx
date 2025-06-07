import React from "react";
import { useFavContext } from "../contexts/FavContext";

const MovieCard = (props) => {
  const { favorites, addToFav, removeFromFav } = useFavContext();

  const isFavorite = favorites.some(
    (fav) => (fav.id || fav.imdbID) === (props.id || props.imdbID)
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFav(props.id || props.imdbID);
    } else {
      addToFav({
        id: props.id,
        imdbID: props.imdbID,
        title: props.title,
        Poster: props.poster,
        Year: props.year,
        release_date: props.year,
        vote_average: props.rating,
        imdbRating: props.rating,
      });
    }
  };

  return (
    <div
      key={props.id}
      className="h-fit w-[300px] border rounded-2xl p-1.5 border-amber-400 mt-4">
      <div className="h-[70%] w-full rounded-2xl bg-gray-500">
        <img
          src={props.poster}
          alt=""
          className="w-full h-full object-fill object-center rounded-2xl"
        />
      </div>
      <div>
        <p className="text-[18px] mt-1">
          <span className="text-amber-300">Title :</span> {props.title}
        </p>
        <p className="text-[18px] mt-1">
          <span className="text-amber-300">Rating :</span> {props.rating}
        </p>
        <p className="text-[18px] mt-1">
          <span className="text-amber-300">Year :</span> {props.year}
        </p>
      </div>
      <button
        onClick={handleFavoriteClick}
        className={`w-full text-center mt-1.5 p-2 rounded-xl hover:cursor-pointer ${
          isFavorite
            ? "bg-gray-500 hover:bg-gray-600"
            : "bg-red-400 hover:bg-red-500"
        }`}>
        {isFavorite ? "Remove from Favorites" : "+ Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieCard;
