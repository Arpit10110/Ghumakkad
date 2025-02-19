import React from 'react'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
   <>
    <div className='p-[2rem] bg-[#05060D] text-white mt-[12rem] py-[5rem] flex justify-between flex-wrap below-lgmob:px-[1.5rem] below-lgmob:gap-[2rem] '>
        <div className='flex gap-[5rem] flex-wrap w-[55%] pl-[1.5rem] below-lgmob:pl-[0] below-lgmob:w-[100%] '>
            <div className='flex flex-col gap-[15px] text-[1.2rem]' >
                <h3 className='text-[#FF6F38] font-semibold text-[1.35rem]'>Connect With Us Online</h3>
                <a href="https://www.instagram.com/___arpit_._/"><InstagramIcon/> Instagram</a>
                <a href="https://github.com/Arpit10110"><GitHubIcon/> Github</a>
                <a href="https://www.linkedin.com/in/arpit-agrahari-54aa192a1/"><LinkedInIcon/> LinkedIn</a>
                <a href="https://x.com/ArpitAgrahari26?t=IyDaE6R8sNL10VQlozEYrQ&s=09"><XIcon/> Twitter</a>
                <a href="https://www.facebook.com/arpit.agrahari.5"><FacebookIcon/> Facebook</a>
            </div>
            <div className='flex flex-col gap-[15px] text-[1.2rem]'>
                <h3><span className='text-[#FF6F38]  font-semibold text-[1.35rem]'> Meet the Creator </span>🧡</h3>
                <h4>Arpit Agrahari</h4>
                <a href="tel:+919599056856">Contact Number</a>
                <a href="mailto:omagrahari55@gmail.com">Email</a>
                <a href="https://helloarpit.vercel.app/">Portfolio</a>
            </div>
            <div className='flex flex-col gap-[15px] text-[1.2rem]'>
                <h3 className='text-[#FF6F38] font-semibold text-[1.35rem]'>Quick Links</h3>
                <Link href={"/"} >Home</Link>
                <Link href={"/contact"}>Contact Us</Link>
                <Link href={"/planatrip"}>Plan a Trip</Link>
            </div>
        </div>
        <div className='flex  w-[35%] cursor-default flex-col justify-start items-baseline below-lgmob:w-fit  '>
        <h1 className="text-[4rem] w-fit font-normal text-[#FF6F38]  ">
        Ghumakkad
      </h1>
      <h2 className='text-[1.5rem]' >Your AI-powered travel companion for creating unforgettable journeys. We make travel planning seamless and personalized.</h2>
        </div>
    </div>
   </>
  )
}

export default Footer