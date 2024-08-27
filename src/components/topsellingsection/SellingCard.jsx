import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
const SellingCard = ({Card,palce,price,day}) => {
  return (
    <div className="rounded-2xl hover:shadow-2xl shadow-slate-400">
      <div className="relative cursor-pointer ">
        <img src={Card} alt="" />
        <div className="absolute bottom-[24%] bg-white  h-24  left-[16%] right-[16%] px-4 py-4 shadow-xl rounded-b-2xl">
          <h1 className="flex justify-between items-center text-sm text-[#5E6282] font-semibold ">
            <span>{palce}</span>
            <span>{price}</span>
          </h1>
          <h1 className="mt-2 flex gap-2 items-center text-sm text-[#5E6282] font-semibold "><FaLocationArrow size={10}/> <span>{day} Days Trip</span></h1>
        </div>
      </div>
      
    </div>
  )
}

export default SellingCard
