import React from 'react'


const CategoryCard = ({Image,title,para}) => {
  return (
    <div className="relative group ">
      <div className="z-20  relative w-44 px-6 py-6 rounded-3xl hover:shadow-xl bg-white cursor-pointer">
      <img src={Image} alt="" className="w-16 mx-auto " />
      <h1 className="text-[#1E1D4C] mt-4 font-semibold text-sm text-center">{title} </h1>
      <p className="text-center text-sm text-[#5E6282] mt-3">{para} </p>
    </div>
    <div className="z-10 absolute bg-[#DF6951] w-14 h-14 -left-6 -bottom-4 rounded-tl-3xl rounded-br-xl hidden group-hover:block"></div>
    
    </div>
  )
}

export default CategoryCard
