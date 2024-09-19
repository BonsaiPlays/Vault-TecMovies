// Created By https://github.com/BonsaiPlays
// Completed on 10-08-2024

import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({handleAddToWatchlist, handleRemoveFromWatchlist, watchlist}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1)

  const handlePrev =() => {
    if(page==1)
      setPage(1)
    else
      setPage(page-1)
  }

  const handleNext =() => {
      setPage(page+1)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2f0768af62edb3e2904df68c9b33e437&language=en-US&page=${page}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [page]);

  return (
    <div>
      <h1 className="w-full text-center text-yellow-500 text-sans text-2xl font-bold text-left py-6">
        Trending Now
      </h1>

      <div className=" flex flex-row flex-wrap justify-around">
        {movies.map((movieObj) => {
          return <MovieCard key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title} movieObj={movieObj} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>;
        })}
      </div>

      <Pagination handlePrev={handlePrev} handleNext={handleNext} page={page}/>

    </div>
  );
}

export default Movies;
