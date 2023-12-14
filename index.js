import express, { urlencoded } from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/crud');

app.use(express.json())
app.use(urlencoded({extended:true}))

import  routes  from "./routes/user_route.js";
app.use('/',routes)
const port = 3000;



app.listen(port,()=>{
    console.log(`Server Running ${port}`)
})