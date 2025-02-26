import mongoose from "mongoose";


export const connectdb = ()=>{
    mongoose.connect(String(process.env.NEXT_PUBLIC_API_MongodB_Url),{dbName:"Ghumakad"}).then(()=>{
        console.log("Db connected successfully ")
    }).catch((e)=>{
        console.log(e);
    })
}
