
import React,{useEffect} from 'react'
import Link from 'next/link'
const Section1 = () => {


  return (
   <>
    <div className='relative flex items-center h-[100vh] pt-[10rem] below-lgmob:pt-[5rem] below-lgmob:h-[90vh]  ' >
        <video   className='brightness-[0.5] z-[-5] absolute top-0 w-[100%] h-[100vh] object-fill filter:opacity-[0.6] below-tab:h-[95vh] below-lgmob:h-[90vh]  below-tab:object-cover ' src="/heroSectionVideo.mp4" autoPlay={true} muted={true} loop={true}></video>
        <div  className='bg-[#0000004d] backdrop-blur-[0.2rem]  ml-[3rem] px-[1rem] py-[3rem] rounded-[1rem] w-[50%] flex gap-[1rem] flex-col text-white below-tab:w-[90%] below-lgmob:w-[95%] below-tab:m-auto ' >
            <h6 className=' bg-[#492A31] w-fit text-[#FF6F38] px-[1rem] py-[0.4rem] text-[1.2rem] rounded-[1rem] ' >AI-Powered Travel Planning</h6>
            <h1 className='text-[5.5rem] font-semibold text-[#ff4800] ' >Your Journey Reimagined by AI</h1>
            <p className='text-[2rem]' >Experience travel planning like never before. Our AI creates personalized itineraries that match your style, preferences, and dreams.</p>
            <Link className='bg-[#ff4800] px-[2rem] py-[1rem] text-[1.5rem] w-fit rounded-[1rem] hover:scale-[1.02] transition-all hover:bg-[#ff4800da] '  href={"/planatrip"} > 🪄 Generate Trip</Link>
        </div>
    </div>
   </>
  )
}

export default Section1
