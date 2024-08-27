import React from 'react'
import SellingCard from './SellingCard'
import Card1 from "../../assets/Rectangle1.png"
import Card2 from "../../assets/Rectangle2.jpg"
import Card3 from "../../assets/Rectangle3.png"
import SpringImage from "../../assets/spring.png"

const TopSelling = () => {
  return (
    <section  className="container  ">
    <div className="mt-[10%]">
    <h1 className="text-[#5E6282] uppercase font-semibold text-center">Top Selling</h1>
      <h1 className="font-volkhov mt-2 text-[#14183E] text-3xl  text-center">Top Destinations</h1>
     <div className="relative">

{/* the reason for more gap and absolute positions is beacuse on figma these cards image are not available it is available in full rectangle form so i adjust it in that way and also the Spring Image on side which i set by absolute also make problem if screen size is below 120px so if i get the card single just image so i will adjust it right */}

     <div className="mt-12 flex items-center justify-center gap-8  relative z-20">
          <SellingCard Card={Card1} palce="Rome,Italty" price="$5,42k" day="10"/>
          <SellingCard Card={Card2} palce="London,UK" price="$4.2k" day="12"/>
          <SellingCard Card={Card3} palce="Full Europe" price="$15k" day="28"/>
      </div>
      <div className="z-10 absolute right-[1%] lg:top-[16%] top-[5%]">
            <img src={SpringImage} alt="" />
          </div>
     </div>

    </div>
    </section>
  )
}

export default TopSelling
