const express=require("express")
const app=express();
const sendMail=require("./controllers/sendMail");
app.get("/",(req,res)=>{
    res.send("i am server");
})

app.get("/mail",sendMail)

app.listen(4000,()=>{
    console.log("server running on 5000!");
})