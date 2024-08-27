import React from 'react'
import MySlider from './MySlider'

const TestimonialsSection = () => {
  return (
    <section className="container">
        <div className="mt-[10%] flex gap-10">
            <div className="flex-1 ">
            <h1 className="text-[#5E6282] uppercase font-semibold ">Testimonials</h1>
      <h1 className="font-volkhov mt-2 text-[#14183E] text-3xl w-[50%] capitalize">What people say
about Us.</h1>
{/* as cuuently i only add button functionality on arrow buttons in the slider component bullets are not working  */}
<div className=" mt-[10%] flex gap-4">
    <button className="rounded-full p-1 bg-[#39425D]"></button>
    <button className="rounded-full p-1 bg-[#E5E5E5]"></button>
    <button className="rounded-full p-1 bg-[#E5E5E5]"></button>
</div>
            </div>
            <div className="flex-1">
                <MySlider/>
            </div>
        </div>
      
    </section>
  )
}

export default TestimonialsSection
