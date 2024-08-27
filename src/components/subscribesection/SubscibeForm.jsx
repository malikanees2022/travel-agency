import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import Circle1 from "../../assets/circle1.png"
import Circle2 from "../../assets/circle2.png"
import Star from "../../assets/star2.png"
const SubscibeForm = () => {
  return (
   <div className="relative">
        <div className="bg-[#DFD7F9] relative rounded-xl rounded-tl-[100px] bg-opacity-40 py-20 overflow-hidden z-20">
    <div>
    <h1 className="text-[#5E6282] z-20 text-3xl font-bold text-center w-[70%] mx-auto leading-relaxed">Subscribe to get information, latest news and other
interesting offers about Jadoo</h1>
<div className="mt-16 flex items-center justify-center gap-4 z-20">
    <div className="flex items-center gap-2 px-6 py-3 rounded-lg text-[#5E6282] bg-white ">
    <MdOutlineMailOutline size={20} />
        <input type="text" name="" id="" placeholder="Your Email" className="w-72"/>
    </div>
    <button className="bg-[#FF946D] text-white font-semibold px-8 rounded-lg py-3">Subscribe</button>
</div>
    </div>

{/* the below spring circle  */}
<div className="absolute z-10 -bottom-16 left-12 rotate-90 opacity-30">
    <img src={Circle1} alt=""  />
</div>
{/* the other top circle  */}
<div className="absolute z-10 -top-5 -right-24 -rotate-90 opacity-30">
    <img src={Circle2} alt="" className="w-[70%]" />
</div>
    </div>\{/* small blue arrow  */}
<div className="absolute -right-3 z-30 -top-3 bg-[#747DEF] p-3 rounded-full text-white "><FaLocationArrow size={20}/></div>
{/* star image  */}
<div className="absolute -right-20 z-10 -bottom-10">
    <img src={Star} alt="" />
</div>
   </div>
  )
}

export default SubscibeForm
