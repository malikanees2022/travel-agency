import React from 'react'
import Logo from "../../assets/Logo.png"
import { FaAngleDown } from "react-icons/fa6";
const Navbar = () => {
    // add the home tabs
     const hometabs=[
         {id:1,
        name:"Destination"},
         {id:2,
        name:"Hotels"},
        {id:3,
            name:"Flights"},
            {id:4,
                name:"Bookings"},
     ];
  return (
    <nav className="container">
      <div className="flex items-center justify-between">
          {/* Logo  */}
          <img src={Logo} alt="Logo"  className="w-20 h-6"/>
          <div className="flex items-center gap-14">
          <ul className="flex items-center justify-between gap-10">
              {hometabs.map((data)=>(
                  <li className="text-[#212832] font-medium cursor-pointer" Key={data.id}>{data.name}</li>
              ))}
          </ul>
          <ul className="flex items-center justify-between gap-10">
              <li className="text-[#212832] font-medium cursor-pointer">Login</li>
              <li className="text-[#212832] font-medium cursor-pointer border-[1px] border-[#212832] px-3 py-1">Sign up</li>
              <li className="text-[#212832] font-medium flex items-center gap-1 cursor-pointer"> EN <FaAngleDown size={12} /></li>
          </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
