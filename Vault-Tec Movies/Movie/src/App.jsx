// Created By https://github.com/BonsaiPlays
// Completed on 10-08-2024

import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import Watchlist from "./Components/Watchlist";
import Banner from "./Components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  let [watchlist, setWatchlist] = useState([])

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj]
    setWatchlist(newWatchlist)
    localStorage.setItem("moviesApp" , JSON.stringify(newWatchlist))
  }

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    setWatchlist(filteredWatchlist)
    localStorage.setItem("moviesApp" , JSON.stringify(filteredWatchlist))
  }

  useEffect(() => {
    let localMovies = localStorage.getItem('moviesApp')
    if(!localMovies){
      return
    }
    setWatchlist(JSON.parse(localMovies))
  }, [])

  return (
    <div
      className="flex flex-col grow min-h-[200vh] bg-cover bg-fixed"
      style={{
        backgroundImage: "url(../assets/BG.jpg)",
      }}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist} />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} setWatchlist={setWatchlist}/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
