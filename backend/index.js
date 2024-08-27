const express = require('express')
const app = express();
const cors = require('cors')
const Routers = require("./Routes/route")
require('dotenv').config();
const sendEmails = require("./Utils/mail")


app.use(cors());
app.use(express.json());
app.use("/",Routers)


const start =()=>{
try {
    
    app.listen(process.env.PORT,()=>{
        console.log(`server running on the port ${process.env.PORT}`);
    })
} catch (error) {
   console.log("error while running the server",error); 
}

}

start();
