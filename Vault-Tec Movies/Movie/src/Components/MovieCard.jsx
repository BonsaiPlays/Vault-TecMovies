// Created By https://github.com/BonsaiPlays
// Completed on 10-08-2024

import React from "react";

function MovieCard({
  poster_path,
  name,
  watchlist,
  handleAddToWatchlist,
  movieObj,
  handleRemoveFromWatchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
  }

  return (
    <div
      className="h-[30vh] w-[155px] content-end bg-center bg-cover rounded-xl flex flex-col justify-between items-end  hover:cursor-pointer hover:scale-110 duration-500 m-4"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="flex justify-center items-center h-6 w-6 m-3 rounded-lg bg-zinc-900/60 hover:cursor-pointer hover:scale-110 duration-500"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchlist(movieObj)}
          className="flex justify-center items-center h-6 w-6 m-3 rounded-lg bg-zinc-900/60 hover:cursor-pointer hover:scale-110 duration-500"
        >
          &#10024;
        </div>
      )}

      <div className="flex justify-center self-center w-full font-sans text-yellow-500 text-center text-bold bg-zinc-900/50 p-2">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
