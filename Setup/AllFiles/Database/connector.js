const mongoose=require("mongoose");
const url=process.env.Mongo || "your mongo url"
mongoose.connect(url,
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log(`database connected`);
})
.catch((e)=>{
    console.log("database disconnected ",e.message);
})
