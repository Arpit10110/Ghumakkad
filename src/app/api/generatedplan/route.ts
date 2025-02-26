import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { context } from "@/app/context";
import { connectdb } from "@/db/dbconnect";
import { PlanModel } from "@/model/PlanModel";

export const POST = async(req:any)=>{
    try {
        await connectdb();
        const {data,userid} = await req.json();
        console.log(userid);
        const genAI = new GoogleGenerativeAI(String(process.env.NEXT_PUBLIC_API_Gemni_Api_key ))  ;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt =`
        User's Trip Request--> 
        frominuput:${data.frominuput},
        toinuput:${data.toinuput},
        selecteddate:${data.selecteddate},
        tripduration:${data.tripduration},
        numberguest:${data.numberguest},
        tripbudget:${data.tripbudget},
        triptype:${data.triptype}
        Start Context
        ${context}
        End Context

        IMPORTANT: Return a valid JSON response **without markdown formatting or extra characters**.
        DO NOT include \`\`\`json or \`\`\` in your response.
        `
        const result = await model.generateContent(prompt);
        const aires = await result.response.text()

        PlanModel.create({
            userid:userid,
            query: `Trip plan from ${data.frominuput} to ${data.toinuput} with a budget of ₹${data.tripbudget} for ${data.numberguest} persons.`,
            response:aires
        })

        return NextResponse.json({
            success: true,
            data: aires,
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error
        })
    }
}