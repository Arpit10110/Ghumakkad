"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useRef } from "react";
import { useForm } from "@formspree/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Page = () => {
  const [state, handleSubmit] = useForm("meoeyjll");
  const formRef = useRef<HTMLFormElement>(null);

  // ✅ Trigger toast only when `state.succeeded` changes
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent", { position: "top-right", autoClose: 3000, theme: "dark" });

      // ✅ Reset form using ref
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <>
      <Navbar />
      <div className="pt-[8rem] w-full flex justify-center items-center flex-col gap-[2rem]">
        <h1 className="text-[#FF6F38] mt-[1rem] font-semibold text-[3.5rem]">Contact US</h1>
        <form ref={formRef} id="myForm" onSubmit={handleSubmit} className="w-[50%] bg-gray-900 text-white flex gap-[2rem] p-[3rem] rounded-[1rem] flex-col below-tab:w-[90%] below-lgmob:w-[95%] ">
          <div className="flex w-full justify-between">
            <input type="text" placeholder="First Name" name="firstname" className="p-[1rem] text-[1.3rem] rounded-[5px] w-[45%] bg-gray-700 text-white" required />
            <input type="text" placeholder="Last Name" name="lastname" className="p-[1rem] text-[1.3rem] rounded-[5px] w-[45%] bg-gray-700 text-white" required />
          </div>
          <div className="flex w-full justify-between">
            <input type="email" placeholder="Email" name="email" className="p-[1rem] text-[1.3rem] rounded-[5px] w-[45%] bg-gray-700 text-white" required />
            <input type="text" placeholder="Phone No." name="phone" className="p-[1rem] text-[1.3rem] rounded-[5px] w-[45%] bg-gray-700 text-white" required />
          </div>
          <textarea placeholder="Message" name="message" className="w-[100%] h-[20vh] p-[1rem] text-[1.3rem] placeholder:text-center bg-gray-700 text-white" required></textarea>
          <button className="m-auto px-[3rem] hover:scale-[1.02] transition-all py-[0.5rem] text-[1.3rem] rounded-md bg-gray-700">SEND</button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  );
};

export default Page;
