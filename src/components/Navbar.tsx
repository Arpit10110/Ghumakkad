import React from 'react'
import Link from 'next/link'
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'

const Navbar = () => {
  return (
   <>
    <nav  className='bg-white text-black flex justify-between px-[2rem] py-[1rem] fixed z-[100] w-full below-mmob:px-[1rem] below-smob:px-[0rem] ' >
        <div>
            <Link href={"/"} className=' text-[2.5rem] font-semibold text-[#FF6F38]  ' >Ghumakkad</Link>
        </div>
        <div className='flex gap-[2rem] text-[1.5rem] items-center below-mmob:gap-[1.5rem] below-smob:gap-[1rem] ' >
            <Link   className='text-gray-700 hover:scale-[1.02] transition-all hover:text-[#FF6F38] '  href={"/"} >Home</Link>
            <Link   className='text-gray-700 hover:scale-[1.02] transition-all hover:text-[#FF6F38] '  href={"/planatrip"} >Plan a Trip</Link>
            <Link   className='text-gray-700 hover:scale-[1.02] transition-all hover:text-[#FF6F38] '  href={"/contact"} >Contact Us</Link>
            <SignedOut>
                <Link   className='text-white hover:scale-[1.02] transition-all bg-[#FF6F38] px-[1rem] py-[0.5rem] rounded-[0.7rem] hover:bg-[#ff7038ee]  '  href={"/sign-up"} >Sign In</Link>
            </SignedOut>
            <SignedIn >
                <UserButton appearance={
                    {
                        variables:{
                            fontSize:'1.2rem'
                        },
                        elements:{
                            avatarBox:"w-[3rem] h-[3rem]"
                        }
                    }
                } />
            </SignedIn>
        </div>
    </nav>
   </>
  )
}

export default Navbar
