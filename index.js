const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

const app = express();

dotenv.config()
mongoose.connect(process.env.MONGO_URL,{  
    useNewUrlParser: true,
    useUnifiedTopology: true},()=>{

    console.log('CONNECTED TO MONGODB');
}

);
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
/*
app.get("/",(req,res)=>{
    res.send('welcome to home page')
})

app.get("/users",(req,res)=>{
    res.send('welcome to home user')
})
*/
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)

app.listen(8800,()=>{
    console.log("Backend server is running!")
})