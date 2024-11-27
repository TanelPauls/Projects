import express from "express";
import dotevn from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongodb.js";
import cookieParser from "cookie-parser";

dotevn.config();
const app = express();
const PORT=process.env.PORT || 5000;

app.use(express.json()); // to parse req.body
app.use(express.urlencoded({extended: true})); // to parse formdata(urlencoded)

app.use(cookieParser())

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    connectMongoDB();
})