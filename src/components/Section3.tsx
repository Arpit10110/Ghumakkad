import React from 'react'
import Marquee from "react-fast-marquee";
const Section3 = () => {
  return (
   <>
    <div className='overflow-hidden bg-gray-200 p-[2.5rem]  my-[5rem] ' >
        <Marquee  >
            <div className=" flex text-[2rem]  overflow-hidden ">
                <h1 className='ml-[3rem]' >✈️AI Planning</h1>
                <h1 className='ml-[3rem]' >🌍Explore More</h1>
                <h1 className='ml-[3rem]' >🏨Perfect Stay</h1>
                <h1 className='ml-[3rem]' >🕒Time-Saving</h1>
                <h1 className='ml-[3rem]' >💰Smart Budget</h1>
                <h1 className='ml-[3rem]' >🎯Tailored Trips</h1>
                <h1 className='ml-[3rem]' >📍Discover Gems</h1>
            </div>
        </Marquee>
    </div>
   </>
  )
}

export default Section3
