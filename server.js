const express=require("express");
const PORT=process.env.PORT || 3001;
const app=express();
app.get("/",(req,res)=>res.send("Hello world deployment"));
app.listen();
app.listen(PORT, () => console.log(`Now listening ${PORT}`));