import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from 'nodemailer';
const app=express();

import Products from "./models/Products.js";

import { products,category } from "./data/data1.js";
import Productsroute from "./routes/Products.js"
app.use(express.json());
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());
app.use("/",Productsroute)
const subject="Thank you for applying"
const text="We received your message and our team has already started working on it. If the inquiry is urgent, it’s best to use the number listed below to talk to our team. Otherwise, we’ll reply by email asap. \nTalk to you soon, and thanks again for being awesome! \nSiol"
dotenv.config()
// app.post('/send-email', (req, res) => {
//     const { email } = req.body;
  
//     res.status(200).json({ message: 'Email received', email });
//   });
  
app.post('/send-email', async (req, res) => {
    const { email} = req.body;
  
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
    });
  
    const mailOptions = {
      from: "shawnstanley123@gmail.com", // Your email
      to:email,
      subject,
      text,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    }
  });
const PORT = process.env.PORT||6001;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`Mongodb connected at PORT ${PORT}`))
   // Products.insertMany(products)
   
}).catch((error)=>console.log(`error occured`,error))