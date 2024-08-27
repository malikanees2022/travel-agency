import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Google from "../../assets/google.png"
import Playstore from "../../assets/playstore.png"

const Footer = () => {
  return (
    <footer className="container">
      <div className="mt-[10%] flex-wrap flex justify-between">
          <div>
              <h1 className="text-[#181E4B] font-bold text-3xl">Jadoo.</h1>
              <p className="text-xs font-semibold  text-[#5E6282] mt-6 w-[60%]">Book your trip in minute, get full
Control for much longer.
</p>
          </div>
          <div>
              <h1 className="text-[#080809] font-bold text-lg">Company</h1>
              <ul className="mt-6 text-[#5E6282] font-semibold text-sm">
                  <li className="">About</li>
                  <li className="mt-1">Careers</li>
                  <li className="mt-1">Mobile</li>
              </ul>
          </div>
          
          <div>
              <h1 className="text-[#080809] font-bold text-lg">Contact</h1>
              <ul className="mt-6 text-[#5E6282] font-semibold text-sm">
                  <li className="">Help/FAQ</li>
                  <li className="mt-1">Press</li>
                  <li className="mt-1">Affilates</li>
              </ul>
          </div>
          <div>
              <h1 className="text-[#080809] font-bold text-lg">More</h1>
              <ul className="mt-6 text-[#5E6282] font-semibold text-sm">
                  <li className="">Airlinefees</li>
                  <li className="mt-1">Airline</li>
                  <li className="mt-1">Low fare tips</li>
              </ul>
          </div>
          <div>
              <div className="flex items-center gap-2 text-[#181E4B]">
                  <button className="bg-white shadow-2xl p-2 rounded-full"><FaFacebookF size={10}/></button>
                  <button className=" bg-custom-gradient p-2 rounded-full"><FaInstagram size={10}/></button>
                  <button className="bg-white shadow-2xl p-2 rounded-full"><FaTwitter size={10}/></button>
              </div>
              <h1 className="mt-4 text-sm font-semibold text-[#5E6282]">Discover our app</h1>
              <div className="flex gap-2 items-center mt-2">
                  <img src={Google} alt="" />
                  <img src={Playstore} alt="" />
              </div>
          </div>

      </div>
      <h1 className="text-[#5E6282] font-semibold text-sm mt-[5%] mb-[5%] text-center">All rights reserved@jadoo.co</h1>
    </footer>
  )
}

export default Footer
