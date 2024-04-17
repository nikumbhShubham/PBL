import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express()
app.use(cors(
    
))
app.use(express.json({
    limit: "64kb"
}))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

// Connect to MongoDB database using Mongoose
let DB_NAME = "pbl"
let MONGODB_URL = "mongodb+srv://shubham:pbl12345@cluster0.gy72dm6.mongodb.net"

try {
    mongoose.connect(`${MONGODB_URL}/${DB_NAME}`)
        .then(() => {
            app.listen(8000, () => {
                console.log("Server is running")
            })
        }).catch(err => console.log("mongodb connection failed", err))


} catch (error) {
    console.log("ERROR: ", error)
}

import userRouter from './routes/user.routes.js'


//routes declaration

app.use("/users", userRouter)




