import React from 'react'
import SmallStepCard from './SmallStepCard'
import Card1 from "../../assets/Group5.png"
import Card2 from "../../assets/group6.png"
import Card3 from "../../assets/group7.png"

const StepBox = () => {
  return (
    <div className="flex-1 ">
       <h1 className="text-[#5E6282] uppercase font-semibold ">Easy and Fast</h1>
      <h1 className="font-volkhov mt-2 text-[#14183E] text-4xl w-[75%] capitalize">Book your next trip 
in 3 easy steps</h1>
<SmallStepCard bg="#F0BB1F" Card={Card1} title="Choose Destination" para="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus."/>
<SmallStepCard bg="#F15A2B" Card={Card2} title="Make Payment " para="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus."/>
<SmallStepCard bg="#006380" Card={Card3} title="Reach Airport on Selected Date" para="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus."/>
    </div>
  )
}

export default StepBox
