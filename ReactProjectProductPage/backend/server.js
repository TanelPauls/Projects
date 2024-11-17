//npm run dev
//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes)

connectDB();
app.listen(PORT, ()=>{
    console.log("Server started at http://localhost:"+ PORT)
});