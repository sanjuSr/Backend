const express=require("express");
const app=express();
const AuthRoute=require("./routes/auth");

app.use(express.json());
app.use("/",AuthRoute);

// app.get("/",(req,res)=>{
//     res.send("GOT IT");
// })

// app.post("/",(req,res)=>{
//     res.send(req.body);
//     console.log(req.body);
// })


app.listen(8000,()=>{
    console.log("SERVER LISTENING AT PORT NO 8000");
})