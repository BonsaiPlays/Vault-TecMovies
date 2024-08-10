// Created By https://github.com/BonsaiPlays
// Completed on 10-08-2024

import React from "react";
import logo from "../assets/moviereel.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex border-zinc space-x-4 items-center pl-3 py-4">
      <img className="w-[90px]" src={logo} alt="" />
      <Link to='/' className="w-1/2 justify-center text-yellow-500 font-sans hover:text-fuchsia-700 text-2xl font-bold text-left active:text-fuchsia-800">
        Vault-Tec Movies
      </Link>
      <div className="flex w-full justify-end space-x-9 items-center pl-4 py-4 pr-10">
        <Link to="/" className="text-yellow-500 font-sans hover:text-fuchsia-700 text-2xl font-bold active:text-fuchsia-800">
          Movies
        </Link>
        <Link
          to="/watchlist"
          className="text-yellow-500 font-sans hover:text-fuchsia-700 text-2xl font-bold active:text-fuchsia-800"
        >
          Watchlist
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
