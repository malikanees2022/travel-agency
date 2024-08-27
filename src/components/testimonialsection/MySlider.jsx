import React, { useState } from 'react';
import Client from "../../assets/client.png"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const MySlider = () => {
  // check active slide
  const [activeIndex, setActiveIndex] = useState(0);

  // slides data
  const slides = [
    { id: 1,  author:"Mike taylor" , location:"Lahore, Pakistan"},
    { id: 2,   author:"Cheris Thomas" , location:"CEO of Red Button" },
    { id: 3,  author:"Elon Mask" , location:"London, UK" },
  ];

  // For next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // For previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
   <div className=" flex items-center justify-between gap-8">
        <div className="relative w-[380px] h-[180px]  mt-10">
      {/* Slides */}
      {slides.map((slide, index) => {
        // set classes for slide positioning
        let slidePositionClass = '';

        if (index === activeIndex) {
          // The active slide
          slidePositionClass = 'z-30 text-[#5E6282] translate-y-0 translate-x-0 opacity-100';
        } else if (index === (activeIndex + 1) % slides.length) {
          // The next slide, slightly below and  left
          slidePositionClass = 'z-20 translate-y-[60px] translate-x-[30px] opacity-60';
        } else {
          // The remaining slide, further down and to the left
          slidePositionClass = 'z-10 text-white  translate-y-[120px] translate-x-[60px] opacity-30';
        }

        return (
          <div
            key={slide.id}
            className={`absolute bg-white border shadow-lg top-0 left-0 w-full h-full p-6 rounded-lg transition-all duration-500 ease-in-out transform ${slidePositionClass} `}
          >
            <p >“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            <h1 className="text-[#5E6282] font-semibold mt-6">{slide.author}</h1>
            <p className="text-[#5E6282] text-sm">{slide.location}</p>
            {index === activeIndex && (
            <div className="  absolute -top-8 -left-10">
                {/* as currently we have only one image but latter we add seperate image for each slide  */}
                <img src={Client} alt="" />
            </div>
        )}
          </div>
          
        );
      })}

     
    </div>
     {/* Navigation Buttons */}
     <div className="flex flex-col justify-between gap-4  mr-12 mt-10">
        <button
          onClick={prevSlide}
          className="px-4 py-2 hover:bg-gray-100 shadow-2xl border   text-[#5E6282] rounded"
        >
          <FaChevronUp />
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 hover:bg-gray-100 shadow-2xl border  text-[#5E6282] rounded"
        >
          <FaChevronDown />
        </button>
      </div>
   </div>
  );
};

export default MySlider;
