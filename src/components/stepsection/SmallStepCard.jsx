import React from 'react'

const SmallStepCard = ({bg,Card,title,para}) => {
 
  return (
    <div className="mt-6 flex items-center gap-4 w-[60%]">
      
      <div  style={{ backgroundColor: bg }} className={`rounded-xl p-3`}>
        <img src={Card} alt="" />
      </div>
      <div>
          <h1 className="text-[#5E6282 font-semibold text-xs">{title}</h1>
          <p className="text-[#5E6282] text-xs">{para}</p>
      </div>
    </div>
  )
}

export default SmallStepCard
