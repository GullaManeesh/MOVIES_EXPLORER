import React from "react";

const FavMovieCard = (props) => {
  return (
    <div
      key={props.id }
      className="h-fit w-[300px] border rounded-2xl p-1.5 border-amber-400 mt-4">
      <div className=" h-[70%] w-full rounded-2xl bg-gray-500">
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
        onClick={props.removeFav}
        className="w-full text-center mt-1.5 p-2 bg-gray-500 hover:bg-gray-600 rounded-xl hover:cursor-pointer ">
        - remove from Favourites
      </button>
    </div>
  );
};

export default FavMovieCard;
