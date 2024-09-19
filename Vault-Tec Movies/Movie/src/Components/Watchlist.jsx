// Created By https://github.com/BonsaiPlays
// Completed on 10-08-2024

import React, { useEffect, useState } from "react";
import genreId from "../assets/genreId";

function Watchlist({ watchlist, handleRemoveFromWatchlist, setWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortInc = () => {
    let sortIncreased = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchlist([...sortIncreased]);
  };

  let sortDec = () => {
    let sortDecreased = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    setWatchlist([...sortDecreased]);
  };

  useEffect(() => {
    let temp1 = watchlist.map((movieObj) => {
      return genreId[movieObj.genre_ids[0]];
    });
    temp1 = new Set(temp1);
    setGenreList(["All Genres", ...temp1]);
  }, [watchlist]);

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 py-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currentGenre == genre
                  ? "mx-4 font-sans rounded-full font-bold text-yellow-50 h-[3rem] w-[8rem] bg-fuchsia-500 flex justify-center items-center hover:bg-fuchsia-700 active:bg-fuchsia-800"
                  : "mx-4 font-sans rounded-full font-bold text-yellow-50 h-[3rem] w-[8rem] bg-yellow-500 flex justify-center items-center hover:bg-fuchsia-700 active:bg-fuchsia-800"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Sreach Movies"
          className="font-sans rounded-full h-[2rem] px-4 w-[20rem] font-bold text-zinc-900 bg--500 border-yellow-500 border-2 hover:border-fuchsia-700"
        />
      </div>

      <div className="rounded-lg overflow-hidden m-0 py-5">
        <table className="w-full text-center text-yellow-500">
          <thead className="border-yellow-500 border-b-2">
            <tr>
              <th className="pb-4">Name</th>
              <div className="flex justify-center text-center space-x-4">
                <div
                  onClick={sortInc}
                  className="hover:cursor-pointer hover:scale-110 duration-500 active:text-fuchsia-800"
                >
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <th>Ratings</th>
                <div
                  onClick={sortDec}
                  className="hover:cursor-pointer hover:scale-110 duration-500 active:text-fuchsia-800"
                >
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </div>
              <th className="pb-4">Popularity</th>
              <th className="pb-4">Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currentGenre == "All Genres") {
                  return true;
                } else {
                  return genreId[movieObj.genre_ids[0] ] == currentGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2 border-dashed border-yellow-500 hover:text-fuchsia-700">
                    <td className="flex items-center pl-4 py-3">
                      <img
                        className=" h-[5rem] rounded-lg"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      />
                      <div className="mx-6 font-bold text-2xl">
                        {movieObj.title}
                      </div>
                    </td>
                    <td className="font-bold">{movieObj.vote_average}</td>
                    <td className="font-bold">{movieObj.popularity}</td>
                    <td className="font-bold">
                      {genreId[movieObj.genre_ids[0]]}
                    </td>
                    <td
                      onClick={() => handleRemoveFromWatchlist(movieObj)}
                      className="hover:cursor-pointer hover:scale-110 duration-500"
                    >
                      &#10060;
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
