"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import AutoInput from '@/components/AutoInput';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { AxiosResponse } from "axios";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [FromInuput,SetFromInput] = useState("")
  const [ToInuput,SetToInput] = useState("")
  const [SelectedDate,SetSelectedDate] = useState("")
  const [TripDuration,SetTripDuration] = useState("")
  const [NumberGuest,SetNumberGuest] = useState("")
  const [Tripbudget,SetTripbudget] = useState("")
  const [Triptype,SetTriptype] = useState("Wanderer")

  

  const SetingFromvalue = (value:string)=>{
    SetFromInput(value);
  }

  const SetingTovalue = (value:string)=>{
    SetToInput(value);
  }

  const generateplan = async(data:any,userid:string)=>{
    try {
      const res:AxiosResponse<any> = await axios.post("/api/generatedplan",{
        data:data,
        userid:userid
      })
      const resdata = res.data
      router.push(`/planid/${resdata.dbplan._id}`)
      setOpen(false)
    } catch (error) {
      console.log(error)
    }
  }
  

  const checkuser = async(data:any)=>{
    try {
      setOpen(true)
      const res:AxiosResponse<any> = await axios.get("/api/user")
      const resdata = res.data
      if(resdata.succes == false ){
        setOpen(false)
        toast.warn(resdata.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }else{
        const userid = resdata.data.id
        generateplan(data,userid)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const setthedata = (e:any)=>{
    e.preventDefault();
    if(FromInuput == "" || ToInuput == ""){
      toast.error('Please Fill The form ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      const data = {
        frominuput:FromInuput,
        toinuput:ToInuput,
        selecteddate:SelectedDate,
        tripduration:TripDuration,
        numberguest:NumberGuest,
        tripbudget:Tripbudget,
        triptype:Triptype
      }
      checkuser(data);
  }
  }

  
  return (
    <>
     <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    <Navbar />
      <div className="pt-[10rem] justify-center items-center flex ">
        <form onSubmit={setthedata} className="w-[80%] below-tab:w-[90%] below-lgmob:w-[95%] below-mmob:w-[98%]   p-[1rem] rounded-[1rem] bg-gray-700 flex flex-col gap-[1.5rem] text-white " >
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
               <input type="number" min={1} onChange={(e)=>SetTripDuration(e.target.value)} className="text-black rounded-md  px-[0.5rem] w-[12%] " required/>
            </div>
            <div className="!text-[1.2rem] flex gap-[1.5rem] " >
               <h1>How Many People Are Traveling?</h1>
               <input type="number" min={1} onChange={(e)=>SetNumberGuest(e.target.value)} className="text-black rounded-md  px-[0.5rem] w-[12%] " required/>
            </div>
            <div className="!text-[1.2rem] flex gap-[1.5rem] " >
               <h1>How Much Do You Plan to Spend ₹ ?</h1>
               <input type="number" min={1} onChange={(e)=>SetTripbudget(e.target.value)} className="text-black rounded-md  px-[0.5rem] w-[12%] " required/>
            </div>
            <div className="!text-[1.2rem] flex flex-col gap-[1rem] " >
               <h1>Select Trip Type -</h1>
               <div className="w-full flex gap-[3rem] below-lgmob:gap-[2rem] flex-wrap below-lgmob:justify-center  " >
                  <div onClick={()=>SetTriptype("Wanderer")} className={`w-[15%] below-tab:w-[25%] below-lgmob:w-[30%] below-mmob:w-[95%]  items-center flex justify-center item-center rounded-[1rem] cursor-pointer hover:scale-[1.02] transition-all  p-[3rem]  ${Triptype=="Wanderer"? "bg-[#468D93]":"bg-gray-800" }  `} >
                      <h1  className="text-center"  >Wanderer 🌍 </h1>
                  </div>
                  <div  onClick={()=>SetTriptype("Adventurer")} className={`w-[15%] below-tab:w-[25%] below-lgmob:w-[30%] below-mmob:w-[95%]  items-center flex justify-center item-center rounded-[1rem] cursor-pointer hover:scale-[1.02] transition-all  p-[3rem]  ${Triptype=="Adventurer"? "bg-[#468D93]":"bg-gray-800" }  `}  >
                      <h1 className="text-center"  >Adventurer ⛰️ </h1>
                  </div>
                  <div  onClick={()=>SetTriptype("Professional")} className={`w-[15%] below-tab:w-[25%] below-lgmob:w-[30%] below-mmob:w-[95%]  items-center flex justify-center item-center rounded-[1rem] cursor-pointer hover:scale-[1.02] transition-all  p-[3rem]  ${Triptype=="Professional"? "bg-[#468D93]":"bg-gray-800" }  `}  >
                      <h1 className="text-center"  >Professional 💼</h1>
                  </div>
               </div>
            </div>
            <button className="w-fit px-[4rem] m-auto mb-[1rem] mt-[3rem] bg-gray-900  rounded-[1rem] hover:scale-[1.01] transition-all  text-[1.5rem]  py-[1rem] "  >Generate Trip🪄</button>
        </form>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  );
};

export default Page;
