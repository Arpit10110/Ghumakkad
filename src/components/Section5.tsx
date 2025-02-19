import React from 'react'
import Image from 'next/image';
import Img from "@/assets/Section5Img.webp"
import { StaticImageData } from 'next/image';
import Img1 from "@/assets/healthcare.png"
import Img2 from "@/assets/safety.png"
import Img3 from "@/assets/emergencycall.png"
const Section5 = () => {

    interface datatypes{
        logo:StaticImageData,
        head:string,
        desc:string
    }

    const data: datatypes[] = [
        {
            logo: Img1,
            head: "Travel Safety",
            desc: "Stay updated with the latest health guidelines and travel requirements for your destination.",
        },
        {
            logo: Img2,
            head: "Safe Destinations",
            desc: "Explore our curated list of destinations with high safety ratings and reliable healthcare facilities.",
        },
        {
            logo: Img3,
            head: "24/7 Emergency Support",
            desc: "Access round-the-clock assistance from our global support team during your travels.",
        },
    ];



  return (
    <>
        <div className='my-[10rem] below-lgmob:my-[5rem] ' >
            <h1  className='text-center text-[3rem] poppins-font font-bold  '>Your Safety is Our Priority</h1>
            <div className='flex w-full justify-around mt-[10rem] flex-wrap below-tab:gap-[4rem] below-lgmob:mt-[5rem]' >
                <div className='w-[50%] below-tab:w-[90%] ' >
                    <Image  className='w-full rounded-[1rem] hover:scale-[1.02] cursor-pointer transition-all ' src={Img} alt='Img' />
                </div>
                <div  className='w-[40%] flex flex-col gap-[4rem] items-center justify-center below-tab:w-[90%] ' >
                   {
                    data.map((i,index)=>{
                        return(
                            <div key={index} className='w-full flex justify-between ' >
                                <div className='w-[10%]' >
                                    <Image className='w-full' src={i.logo} alt={i.head}  />
                                </div>
                                <div className='w-[85%]' >
                                    <h1 className=' text-[2rem] font-semibold  '>{i.head}</h1>
                                    <h3 className='text-[1.5rem] text-gray-800 ' >{i.desc}</h3>
                                </div>
                            </div>
                        )
                    })
                   }
                </div>
            </div>
        </div>
    </>
  )
}

export default Section5
