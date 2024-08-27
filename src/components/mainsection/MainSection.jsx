import React from 'react'
import backgroundImage from "../../assets/Decore.png"
import Lady from "../../assets/lady.png"
import Navbar from './Navbar'
import { FaPlay } from "react-icons/fa";
import UnderlineImage from "../../assets/under.png"


const MainSection = () => {
  return (
    <section>
      {/* i adjust the background as try to set it as the figma design is not perfectly suit to my screen as the figma design can fit for below 1100px screen so thats i adjust the background and it is little differnt form the design beacuse of large screen  */}
     <div className="w-full min-h-[100vh]  py-8 "   style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '100% 80%', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'top', 
        }}>
         <Navbar/>
         <div className="container   flex items-center justify-between gap-4">
             <div className="flex-1 mt-4 ">
                <h1 className="text-[#DF6951] font-bold uppercase">Best Destinations around the world</h1>
                <p className="text-[#181E4B] text-6xl font-volkhov mt-3 relative w-[430px]"><span className="z-20 relative">Travel, enjoy and live a new and full life </span>
                <div className="absolute top-[30%] z-10 -right-[35%]">
                  <img src={UnderlineImage} alt="" className="w-[70%]" />
                </div>
                </p>
                <p className="text-[#5E6282] mt-6 w-96 text-sm">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className="mt-6 w-96 flex items-center  gap-6">
                    <button className="bg-[#F1A501] text-white font-semibold py-2 px-4 rounded-lg">Find out more</button>
                    <button className="flex items-center gap-2 text-[#686D77]"> <span className="bg-[#DF6951] text-white p-3 rounded-full"><FaPlay size={8} /></span> Play Demo</button>
                </div>

             </div>
             <div className="flex-1 mt-4 ">
                 <img src={Lady} alt="" className="w-full" />
             </div>
         </div>
     </div>
    </section>
  )
}

export default MainSection
