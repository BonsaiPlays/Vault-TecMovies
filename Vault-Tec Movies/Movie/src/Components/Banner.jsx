// Created By https://github.com/BonsaiPlays
// Completed on 10-08-2024

import React from "react";

function Banner() {
  return (
    <div
      className="flex flex-row shrink h-[60vh] md:h[100vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url(https://wallpapercave.com/wp/wp2906350.jpg)",
      }}
    >
      <div className="font-sans w-full text-xl self-end text-yellow-500 text-center text-bold bg-zinc-900/50 p-4">
        Join Vault-Tec Today, For A Brighter Tomorrow!!
      </div>
    </div>
  );
}

export default Banner;
