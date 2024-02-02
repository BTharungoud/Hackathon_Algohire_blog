import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Routes/Blogroutes.js";
const app = express(); 
app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.send("server started")
})

app.use('/blog',router)

app.listen(9000, async ()=>{
    await mongoose.connect('mongodb+srv://tharungoud:Tharun07235@cluster0.rmaw4ke.mongodb.net/BlogDB');
    console.log(`server started sucessfully at 9000 and mongodb connected`)
})