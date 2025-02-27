"use client"

import Navbar from '@/components/Navbar'
import React,{useEffect,useState} from 'react'
import axios, { AxiosResponse } from 'axios';
import {
   ClerkLoading,
   ClerkLoaded,
   UserProfile,
   SignOutButton
  } from '@clerk/nextjs'
import Link from 'next/link';
const page = () => {

    const [Planhistory,SetPlanhistory] = useState([]);
    const [IsLoading,SetIsLoading] =useState(true);

    const gethistory = async(userid:string)=>{
        try {
        const res:AxiosResponse<any> = await axios.post("/api/gethistory",{
            id:userid
        })
        const resdata = res.data
        SetPlanhistory(resdata.data)
        console.log(resdata);
        SetIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const getuserid = async()=>{
        try {
            const res:AxiosResponse<any> = await axios.get("/api/user")
            const resdata = res.data
              const userid = resdata.data.id
              gethistory(userid)
          } 
          catch (error) {
            console.log(error)
          }
    }





    useEffect(() => {
     getuserid();
    }, [])
    

  return (
   <>
    <Navbar/>
    <ClerkLoading>
        <div className='pt-[8rem] flex justify-center items-center'>
        <h1 className='text-[4rem]' >Loading...</h1>
        </div>
    </ClerkLoading>
    <ClerkLoaded>
        <div className='pt-[8rem] flex flex-col gap-[2rem] '>
            <div className='flex flex-col gap-[2rem] justify-center items-center w-full  ' >
                <div className='w-[90%] flex justify-end  '>
                    <SignOutButton >
                        <button className='px-[2rem] py-[0.5rem] text-[1.3rem] hover:scale-[1.02] transition-all rounded-md text-white bg-gray-900 ' >SignOut</button>
                    </SignOutButton>
                </div>
                <UserProfile appearance={
                        {
                            variables:{
                                fontSize:'1.3rem'
                            },
                            elements:{
                                avatarBox:"w-[3rem] h-[3rem]",
                                cardBox:"w-[90rem]",
                                navbar:"w-[30rem] flex-0 basis-[20rem] max-w-[50rem] "
                            },
                        }
                    } />
            </div>
            <div className='m-auto w-[80%] bg-gray-300 flex flex-col gap-[1.5rem] my-[5rem] p-[2rem] rounded-lg below-tab:w-[95%] below-lgmob:w-[97%] below-lgmob:p-[1rem] ' >
                <h1 className='text-[2rem] font-semibold text-black' >TripPlan History</h1>
                {
                    IsLoading?
                    <div className='w-full h-[15vh] flex justify-center items-center' >
                        <h1 className='text-[2.5rem] font-semibold ' >Loading....</h1>
                    </div>:
                    <div className='w-full flex flex-wrap gap-[2rem] ' >
                        {
                            Planhistory.map((i:any,index)=>{
                                return(
                                    <Link key={index} className='w-[25%] p-[1rem] below-tab:w-[35%] below-lgmob:w-[97%] rounded-md text-[1.2rem] bg-gray-200 text-black hover:scale-[1.02] transition-all   '  href={`/planid/${i._id}`}>
                                        <h1 className='text-c'>{i.query}</h1>
                                    </Link>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    </ClerkLoaded>
   </>
  )
}

export default page