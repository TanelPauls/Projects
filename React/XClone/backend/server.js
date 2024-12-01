import express from "express";
import dotevn from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotevn.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true })); // to parse formdata(urlencoded)

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
