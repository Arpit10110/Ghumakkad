import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { context } from "@/app/context";
export const POST = async(req:any)=>{
    try {
        const {data} = await req.json();


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
        `
        const result = await model.generateContent(prompt);
        const aires = await result.response.text()
        return NextResponse.json({
            success: true,
            data: aires,
            prompt: prompt
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error
        })
    }
}