const mongoose=require("mongoose");
const url=process.env.Mongo || "mongodb+srv://jumf:711179@cluster0.66bqn.mongodb.net/Projeto3000?retryWrites=true&w=majority"
mongoose.connect(url,
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log(`database connected`);
})
.catch((e)=>{
    console.log("database disconnected ",e.message);
})
