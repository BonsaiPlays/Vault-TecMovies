// Created By https://github.com/BonsaiPlays
// Completed on 10-08-2024

import React from 'react'

function Pagination({handlePrev, handleNext, page}) {
  return (
    <div className='flex font-sans bg-yellow-500/50 my-10 p-2 justify-center'>
        <div onClick={handlePrev} className='px-8 py-1.5'><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-sans font-bold text-2xl'>{page}</div>
        <div onClick={handleNext} className='px-8 py-1.5'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination