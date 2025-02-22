"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import AutoInput from '@/components/AutoInput';
const Page = () => {
  const [FromInuput,SetFromInput] = useState("")
  const [ToInuput,SetToInput] = useState("")
  const [SelectedDate,SetSelectedDate] = useState("")
  const [TripDuration,SetTripDuration] = useState("")
  const [NumberGuest,SetNumberGuest] = useState("")
  const [Tripbudget,SetTripbudget] = useState("")
  const [Triptype,SetTriptype] = useState("Wanderer")

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
    const data = {
      frominuput:FromInuput,
      toinuput:ToInuput,
      selecteddate:SelectedDate,
      tripduration:TripDuration,
      numberguest:NumberGuest,
      tripbudget:Tripbudget,
      triptype:Triptype
    }
    console.log(data)
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
               <input type="number" onChange={(e)=>SetTripDuration(e.target.value)} className="text-black rounded-md  px-[0.5rem] w-[12%] " required/>
            </div>
            <div className="!text-[1.2rem] flex gap-[1.5rem] " >
               <h1>How Many People Are Traveling?</h1>
               <input type="number" onChange={(e)=>SetNumberGuest(e.target.value)} className="text-black rounded-md  px-[0.5rem] w-[12%] " required/>
            </div>
            <div className="!text-[1.2rem] flex gap-[1.5rem] " >
               <h1>How Much Do You Plan to Spend ₹ ?</h1>
               <input type="number" onChange={(e)=>SetTripbudget(e.target.value)} className="text-black rounded-md  px-[0.5rem] w-[12%] " required/>
            </div>
            <div className="!text-[1.2rem] flex flex-col gap-[1rem] " >
               <h1>Select Trip Type -</h1>
               <div className="w-full flex gap-[3rem] " >
                  <div onClick={()=>SetTriptype("Wanderer")} className={`w-[15%] flex justify-center item-center rounded-[1rem] cursor-pointer hover:scale-[1.02] transition-all  p-[3rem]  ${Triptype=="Wanderer"? "bg-[#468D93]":"bg-gray-800" }  `} >
                      <h1  >Wanderer 🌍 </h1>
                  </div>
                  <div  onClick={()=>SetTriptype("Adventurer")} className={`w-[15%] flex justify-center item-center rounded-[1rem] cursor-pointer hover:scale-[1.02] transition-all  p-[3rem]  ${Triptype=="Adventurer"? "bg-[#468D93]":"bg-gray-800" }  `}  >
                      <h1 >Adventurer ⛰️ </h1>
                  </div>
                  <div  onClick={()=>SetTriptype("Professional")} className={`w-[15%] flex justify-center item-center rounded-[1rem] cursor-pointer hover:scale-[1.02] transition-all  p-[3rem]  ${Triptype=="Professional"? "bg-[#468D93]":"bg-gray-800" }  `}  >
                      <h1 >Professional 💼</h1>
                  </div>
               </div>
            </div>
            <button className="w-fit px-[4rem] m-auto mb-[1rem] mt-[3rem] bg-gray-900  rounded-[1rem] hover:scale-[1.01] transition-all  text-[1.5rem]  py-[1rem] "  >Generate Trip🪄</button>
        </form>
      </div>
    </>
  );
};

export default Page;
