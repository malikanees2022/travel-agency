import React from 'react'
import StepBox from './StepBox'
import ImageBox from './ImageBox'

const StepSection = () => {
  return (
    <section className="container ">
      <div className="mt-[10%] flex items-center justify-between gap-32">
        <StepBox/>
        <ImageBox/>
      </div>
      
    </section>
  )
}

export default StepSection
