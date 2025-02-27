import { NextResponse } from "next/server";
import { connectdb } from "@/db/dbconnect";
import { PlanModel } from "@/model/PlanModel";


export const POST = async(req:any)=>{
    try {

        await connectdb();

        const { id } = await req.json();

        const data = await PlanModel.find({userid:id})

        return NextResponse.json({
            success:true,
            data:data
        })
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            error:error
        })
    }
}