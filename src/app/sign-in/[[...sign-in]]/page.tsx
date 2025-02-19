import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs'
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <>
    <Navbar/>
        <div className='w-full flex justify-center items-center pt-[12rem] ' >
        <ClerkLoading>
            <h1 className='text-[2rem]' >Loading...</h1>
        </ClerkLoading>
        <ClerkLoaded>
          <SignIn appearance={{
            variables:{
                fontSize:"1.3rem",
            },
            elements: {
               cardBox:"w-[35rem]"
              },
          }}  />
        </ClerkLoaded>
        </div>
    </>
  )
}