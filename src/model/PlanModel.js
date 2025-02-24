import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    query : {
        type: String,
        required: true,
    },
    response:{
        type: String,
        required: true,
    }
});

export const PlanModel = mongoose.Model(Schema)