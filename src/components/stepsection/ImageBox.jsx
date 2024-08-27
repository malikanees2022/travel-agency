import React from 'react'
import MainImage from "../../assets/stepimage.jpg"
import { FaLocationArrow } from "react-icons/fa";
import { GiZigzagLeaf } from "react-icons/gi";
import { FaMap } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Mosque from "../../assets/mosque.png"



const ImageBox = () => {
  return (
    <div className="flex-1  relative">
      <div  style={{ boxShadow: '30px -20px 20px rgba(147, 227, 253, 0.3)' }} className="bg-white p-4 rounded-xl w-[60%] ">
        <div>
          <img src={MainImage} alt="" />
        </div>
        <h1 className="text-[#080809] text-xs font-bold mt-4">Trip To Greece</h1>
        <p className="text-[#84829A] text-xs mt-2 font-semibold">14-29 June | by Robbin joseph</p>
        <div className="mt-3 flex items-center gap-3">
        <button className="bg-[#F5F5F5] p-2 rounded-full text-[#84829A]"><GiZigzagLeaf size={8}/></button>
          <button className="bg-[#F5F5F5] p-2 rounded-full text-[#84829A]"><FaMap size={8}/></button>
          <button className="bg-[#F5F5F5] p-2 rounded-full text-[#84829A]"><FaLocationArrow size={8}/></button>
        </div>
        <div className="mt-4 flex items-center justify-between ">
            <button className="flex items-center gap-2 text-[#84829A] text-xs font-semibold"> <BsBuildingsFill size={10} />24 people going</button>
            <button className="text-[#4152CA]"><FaRegHeart /></button>
          </div>
      </div>
    {/* the right small boxx mosque image of rome */}
    <div className="absolute right-[15%] shadow-lg bg-white rounded-xl p-3 w-[50%] bottom-[12%] flex gap-2">
      <div>
        <img src={Mosque} alt="" className="rounded-full" />
      </div>
      <div>
        <h1 className="text-[#84829A] text-xs font-semibold">ongoing</h1>
        <h1 className="text-[#080809] text-xs mt-1 font-semibold">Trip top rome</h1>
        <h1 className="text-[#84829A] text-xs mt-2 font-semibold">40% <span className="text-[#080809] ">completed</span></h1>
        <div className="mt-2 w-40 rounded-xl bg-[#F5F5F5] overflow-hidden">
          <div className="bg-[#8A79DF] h-1 w-[50%]"></div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default ImageBox
