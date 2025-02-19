import React from 'react';
import Image from 'next/image';
import Image1 from "@/assets/Sec4Img1.jpg"
import Image2 from "@/assets/Sec4Img2.jpg"
import Image3 from "@/assets/Sec4Img3.jpg"
import {
  ArrowBigDown,
  ArrowRight,
  ChevronRight,
  ChevronsRight,
  Heart,
} from 'lucide-react';

import { StaticImageData } from 'next/image';

function Sec4Card() {


    interface datatype{
        logo:StaticImageData,
        head:string,
        desc:string
    }

    const data: datatype[] = [
        {
            logo: Image1,
            head: "Santorini, Greece",
            desc: "Experience  beauty of white-washed buildings and breathtaking sunsets that will leave you in awe.",
        },
        {
            logo: Image2,
            head: "Kyoto, Japan",
            desc: "Dive into the rich culture and traditions of Kyoto, where history and modernity blend seamlessly.",
        },
        {
            logo: Image3,
            head: "Machu Picchu, Peru",
            desc: "Explore the ancient Incan civilization, hidden high in the Andes, and uncover its timeless mysteries.",
        },
    ];
    







  return (
    <>
    {
        data.map((i,index)=>{
            return(
                <div key={index} className='w-[28%] relative mt-4  group mx-auto text-black bg-[#F2F2F2] dark:border-0 border overflow-hidden rounded-md dark:text-white below-tab:w-[45%] below-lgmob:w-[90%] '>
                <figure className='w-full h-[30vh] rounded-md  overflow-hidden'>
                  <Image
                    src={i.logo}
                    alt='shoes'
                    width={600}
                    height={600}
                    className='h-full w-full  scale-[1.07] group-hover:scale-100 rounded-lg object-cover transition-all duration-300'
                  />
                </figure>
                <div className='p-4 space-y-1  transition-all duration-300 text-black flex flex-col gap-[1rem] '>
                  <h1 className='text-[2.5rem] font-semibold capitalize '>{i.head}</h1>
                  <h3 className='text-[1.5rem] text-gray-800 ' >{i.desc}</h3>
                  <a
                    href='#'
                    className='bg-[#FF6F38] text-[1.3rem] w-fit  dark:text-white rounded-md text-blue-600 font-normal p-2 flex justify-center '
                  >
                    Explore Now
                    <span className='relative'>
                      <ChevronRight className='group-hover:opacity-0 opacity-100 translate-y-0 group-hover:translate-y-2 transition-all duration-300 ' />
                      <ChevronsRight className='absolute top-0 group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ' />
                    </span>
                  </a>
                </div>
              </div>
            )
        })
    }
     
    </>
  );
}

export default Sec4Card;
