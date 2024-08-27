import React from 'react'
import CategoryCard from './CategoryCard'
import Image1 from "../../assets/group1.png"
import Image2 from "../../assets/group2.png"
import Image3 from "../../assets/group3.png"
import Image4 from "../../assets/group4.png"
import StarImage from "../../assets/stars.png"


const CategorySection = () => {
  return (
    <section className="container relative ">
     <div className="mt-[10%]">
     <h1 className="text-[#5E6282] uppercase font-semibold text-center">Category</h1>
      <h1 className="font-volkhov mt-2 text-[#14183E] text-3xl  text-center">We Offer Best Services</h1>
      <div className="mt-12  flex items-center justify-center gap-12">
          <CategoryCard Image={Image1} title="Calculated Weather" para="Built Wicket longer admire do barton vanity itself do in it."/>
          <CategoryCard Image={Image2} title="Best Flights" para="Engrossed listening. Park gate sell they west hard for the."/>
          <CategoryCard Image={Image3} title="Local Events" para="Barton vanity itself do in it. Preferd to men it engrossed listening."/>
          <CategoryCard Image={Image4} title="Customization" para="We deliver outsourced
aviation services for
military customers"/>
      </div>
     </div>
     {/* star image  */}
     <div className="absolute top-[1%] -right-[5%]">
       <img src={StarImage} alt="" />
     </div>
    </section>
  )
}

export default CategorySection
