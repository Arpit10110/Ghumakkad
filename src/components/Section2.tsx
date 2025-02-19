import React from 'react'
import img1 from "@/assets/robot.png"
import img2 from "@/assets/map.png"
import img3 from "@/assets/schedule.png"
import { StaticImageData } from 'next/image'
import Image from 'next/image';
const Section2 = () => {

    interface datatypes{
        logo:StaticImageData,
        head:string,
        Desc:string
    }

    const data: datatypes[] = [
        {
            logo: img1,
            head: "AI-Powered Planning",
            Desc: "Our advanced AI understands your preferences, budget, and travel style to craft the perfect itinerary tailored just for you.",
        },
        {
            logo: img2,
            head: "Smart Recommendations",
            Desc: "Get personalized suggestions for destinations, activities, and stays based on your budget, travel dates, and interests.",
        },
        {
            logo: img3,
            head: "Time-Efficient Scheduling",
            Desc: "Optimize your journey with AI-generated schedules, ensuring you maximize your trip while keeping everything well-organized.",
        }
    ];
    

    


  return (
    <>
        <div className='w-full my-[10rem] below-lgmob:my-[5rem] ' >
            <h1  className='text-[4rem] poppins-font word- font-semibold text-center m-auto ' >How It Works</h1>
            <div className='flex justify-evenly mt-[5rem] flex-wrap below-tab:gap-[3rem] ' >
               {
                 data.map((i,index)=>{
                    return(
                       <div className='flex w-[30%] flex-col bg-[#F0F0F2] p-[1.5rem] rounded-[1rem] gap-[1rem] transition-all hover:scale-[1.02] cursor-pointer below-tab:w-[90%]  '  key={index} >
                            <Image className='w-[10%]' src={i.logo} alt={i.head} /> 
                            <h1 className='text-[2rem] text-[#FF6F38] font-semibold '  >{i.head}</h1>
                            <h3 className='text-[1.5rem]  text-gray-8s00 ' >{i.Desc}</h3>
                       </div> 
                    )
                })
               }
            </div>
        </div>
    </>
  )
}

export default Section2
