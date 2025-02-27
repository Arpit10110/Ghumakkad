import { PlanModel } from "@/model/PlanModel";
import { connectdb } from "@/db/dbconnect";
import { NextResponse } from "next/server";

export const POST = async(req:any)=>{
    try {

        await connectdb()

        const {id} = await req.json();

        console.log(id);

        const data= await PlanModel.findById(id);


        return NextResponse.json({
            success:true,
            data:data
        },{
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        })
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:error
        },{
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        })
    }
}