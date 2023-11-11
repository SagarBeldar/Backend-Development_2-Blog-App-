const express=require("express");
const app=express();



require("dotenv").config();
const PORT=process.env.PORT||3000;

//middlewre
app.use(express.json());

const blog=require("./routes/blog");
app.use("api/V1",blog)

const connectWithdb=require("./config/database");
connectWithdb();

app.listen(4000,()=>{
    console.log(`App is started at ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send(`<h1>Hello Sagar it almost done done </h1>`)
})





