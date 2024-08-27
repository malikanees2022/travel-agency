import React from 'react'
import Sponser1 from "../../assets/sponser1.png"
import Sponser2 from "../../assets/sponser2.png"
import Sponser3 from "../../assets/sponser3.png"
import Sponser4 from "../../assets/sponser4.png"
import Sponser5 from "../../assets/sponser5.png"
import SubscibeForm from './SubscibeForm'

const SubscribeSection = () => {
  return (
    <section className="container ">
        <div className="mt-[20%] ">
            <div className="flex items-center justify-between">

                <div className="hover:bg-white hover:shadow-2xl cursor-pointer rounded-2xl">
                    <img src={Sponser1} alt="" />
                </div>
                <div className="hover:bg-white hover:shadow-2xl cursor-pointer rounded-2xl">
                    <img src={Sponser2} alt="" />
                </div>
                <div className="hover:bg-white hover:shadow-2xl cursor-pointer rounded-2xl">
                    <img src={Sponser3} alt="" />
                </div>
                <div className="hover:bg-white hover:shadow-2xl cursor-pointer rounded-2xl p-8">
                    <img src={Sponser4} alt="" />
                </div>
                <div className="hover:bg-white hover:shadow-2xl cursor-pointer rounded-2xl p-8">
                    <img src={Sponser5} alt="" />
                </div>
            </div>
{/* subscibe form  */}
            <div className="mt-[10%]">
                <SubscibeForm/>
            </div>
        </div>
      
    </section>
  )
}

export default SubscribeSection
