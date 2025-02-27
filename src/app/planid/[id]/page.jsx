"use client"
import React,{useEffect,useState} from 'react'
import Navbar from '@/components/Navbar';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';
import Footer from '@/components/Footer';
const page = ({params}) => {
  const [open, setOpen] = useState(true);
  const [PlanDataQuery,SetPlanDataQuery] = useState();
  const [PlanDataRes,SetPlanDataRes] = useState();
  const getplan = async(id)=>{
    try {
      const {data} = await axios.post("/api/getplantrip",{
        id: id,
      }) 
      if(data.success == true){
        const res=data.data;
        const resobj = JSON.parse(res.response)
        SetPlanDataQuery(res.query)
        SetPlanDataRes(resobj.tripDetails);
        console.log(resobj);
      }else{

      }
      setOpen(false);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { 
  params.then((res)=>{
    getplan(res.id)
  }).catch((error) => {
    console.log(error)
  })
  }, [])
  
  
  return (
    <>
     <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        <Navbar/>
        {
          open?
        <div></div>:
        <div className='pt-[10rem] justify-center items-center flex flex-col gap-[2rem] mb-[10rem]' >
          <div className='w-[90%] justify-end flex below-tab:w-[95%] ' >
            <Link className='bg-black px-[2rem] py-[0.5rem] text-[1.2rem] hover:scale-[1.02] rounded-[5px] transition-all text-white  ' href={"/planatrip"} >Plan A New Trip</Link>
          </div>
          <div className='bg-gray-300 w-[90%] rounded-[1rem] py-[2rem] cursor-default below-tab:w-[95%] below-lgmob:w-[97%] ' >
              <div className='pb-[1.5rem] ' >
                  <h1  className='text-[1.5rem] font-[600] text-center  ' >{PlanDataQuery}</h1>
              </div>
              <div className='bg-white p-[1rem] rounded-[1rem] w-[95%] m-auto flex flex-col gap-[1rem]  ' >
                  <div>
                     <h4>Note:- {PlanDataRes.notes}</h4>
                  </div>
                  <div className='flex flex-col gap-[1rem]' >
                    <h1 className='font-semibold text-[1.5rem]  ' >Suggested Transport:-</h1>
                      {
                        PlanDataRes.suggestedTransport.map((i,index)=>{
                          return(
                            <div key={index} className='mb-[1rem] flex flex-col gap-[5px] bg-gray-100 p-[0.5rem] rounded-[10px] text-[1.2rem] ' >
                                <h1>Mode: {i.mode}</h1>
                                <div className='flex gap-[1rem] '>
                                  <h1>{i.name} </h1> 
                                  <h1>⏰Timing- {i.arrivalTime} - {i.departureTime}</h1>
                                </div>
                                <div className='flex gap-[1rem] ' >
                                  <h1>💸Price Per Person- ₹{i.pricePerPerson} </h1>
                                  <h1>💸Total Cost- ₹{i.totalCost} </h1>
                                </div>
                            </div>
                          )
                        })
                      }
                  </div>
                  <div className='flex flex-col gap-[1rem]' >
                    <h1 className='font-semibold text-[1.5rem]  ' >Accommodation:-</h1>
                      {
                        PlanDataRes.accommodation.map((i,index)=>{
                          return(
                            <div key={index} className='mb-[1rem] flex flex-col gap-[5px] bg-gray-100 p-[0.5rem] rounded-[10px] text-[1.2rem] ' >
                                <div className='flex gap-[1.2rem] '>
                                  <h1>Hotel- {i.name} </h1> 
                                  <h1>Rating - {i.rating}⭐</h1>
                                </div>
                                <div className='flex gap-[1rem] ' >
                                  <h1>💸Price PerNight- ₹{i.pricePerNight} </h1>
                                  <h1>💸Total Cost- ₹{i.totalCost} </h1>
                                </div>
                                <h1>📍Locaotion:-{i.location}</h1>
                            </div>
                          )
                        })
                      }
                  </div>
                  <div className='flex flex-col gap-[1rem]' >
                    <h1 className='font-semibold text-[1.5rem]  ' >Itinerary:-</h1>
                      {
                        PlanDataRes.itinerary.map((i,index)=>{
                          return(
                            <div key={index} className='mb-[1rem] flex flex-col gap-[5px] bg-gray-100 p-[0.5rem] rounded-[10px] text-[1.2rem] ' >
                                <div className='flex gap-[1.2rem] '>
                                  <h1>☀️ Day {i.day}</h1>
                                  <h1>💸Estimated Cost:- ₹{i.estimatedCost}</h1>
                                </div>
                                <div>
                                     {
                                       i.activities.map((i,index)=>{
                                        return(
                                          <h1 key={index} >👉{i}</h1>
                                        )
                                      })
                                     }
                                </div>
                            </div>
                          )
                        })
                      }
                  </div>
                  <div className='mb-[1rem] flex flex-col gap-[5px] bg-gray-100 p-[0.5rem] rounded-[10px] text-[1.2rem] '>
                    <h1>📍From:- {PlanDataRes.from}</h1>
                    <h1>📍To:- {PlanDataRes.to}</h1>
                    <div className='flex gap-[1.2rem] '>
                      <h1>💸Total Estimated Cost:- ₹{PlanDataRes.totalEstimatedCost}</h1>
                      <h1>🌎tripType:- {PlanDataRes.tripType}</h1>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        }
    </>
  )
}

export default page