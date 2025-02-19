import React from 'react'
import Sec4Card from './ui/Sec4Card';
const Section4 = () => {

  return (
  <>
    <div className='my-[10rem] below-lgmob:my-[5rem]  ' >
        <h1  className='text-center text-[3rem] poppins-font font-bold ' >Popular Destinations</h1>
        <div className='flex gap-[4rem] my-[5rem] flex-wrap justify-start '>
            <Sec4Card  />
        </div>
    </div>
  </>
  )
}

export default Section4
