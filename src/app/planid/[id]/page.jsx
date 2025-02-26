"use client"
import React,{useEffect} from 'react'
import Navbar from '@/components/Navbar';
import axios from 'axios';
const page = ({params}) => {

  const getplan = async(id)=>{
    try {
      const {data} = await axios.post("/api/getplantrip",{
        id: id,
      }) 
      console.log(data);
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
        <Navbar/>
    </>
  )
}

export default page