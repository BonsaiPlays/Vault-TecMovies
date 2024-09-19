// Created By https://github.com/BonsaiPlays
// Completed on 10-08-2024

import React from "react";
import logo from "../assets/moviereel.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex space-x-4 items-center pl-4 py-4">
      <div className="w-full h-90">
        <Link to='/'>
          <img className="h-full max-h-9" src={logo} alt="" />
        </Link>
        <Link to='/' className="pl-1.5 text-base text-yellow-500 font-sans hover:text-fuchsia-700 font-bold active:text-fuchsia-800">
          Vault-Tec
        </Link>
      </div>
      <div className="flex w-full justify-end space-x-8 items-center py-4 pr-6">
        <Link to="/" className="text-[2vh + 2vw] text-yellow-500 font-sans hover:text-fuchsia-700 font-bold active:text-fuchsia-800">
          Movies
        </Link>
        <Link
          to="/watchlist"
          className="text-[2vh + 2vw] text-yellow-500 font-sans hover:text-fuchsia-700 font-bold active:text-fuchsia-800"
        >
          Watchlist
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
