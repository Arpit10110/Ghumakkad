"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import AutoInput from '@/components/AutoInput';
const Page = () => {
  const [FromInuput,SetFromInput] = useState("")
  const [ToInuput,SetToInput] = useState("")
  const [SelectedDate,SetSelectedDate] = useState("")
  const [TripDuration,SetTripDuration] = useState("")

  const SetingFromvalue = (value:string)=>{
    SetFromInput(value);
    console.log(value);
  }

  const SetingTovalue = (value:string)=>{
    SetToInput(value);
    console.log(value);
  }

  const setthedata = (e:any)=>{
    e.preventDefault();
  }
  return (
    <>
    <Navbar />
      <div className="pt-[10rem] justify-center items-center flex ">
        <form onSubmit={setthedata} className="w-[80%]  p-[1rem] rounded-[1rem] bg-gray-700 flex flex-col gap-[1.5rem] text-white " >
            <div className="!text-[1.2rem]" >
               <h1>From📍</h1>
               <AutoInput Setfromavalue={SetingFromvalue} />
            </div>
            <div className="!text-[1.2rem]" >
               <h1>To📍</h1>
               <AutoInput Setfromavalue={SetingTovalue} />
            </div>
            <div className="!text-[1.2rem] flex gap-[1rem] " >
               <h1>Select the Date</h1>
               <input  onChange={(e)=>SetSelectedDate(e.target.value)} type="date" className="text-black rounded-md  px-[0.5rem] " required/>
            </div>
            <div className="!text-[1.2rem] flex gap-[2rem] " >
               <h1>Trip Duration</h1>
               <input type="number" onChange={(e)=>SetTripDuration(e.target.value)} className="text-black rounded-md  px-[0.5rem] w-[12%] " />
            </div>
        </form>
      </div>
    </>
  );
};

export default Page;
