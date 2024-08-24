
const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/zoppi-add-product")
.then(()=>{
    console.log("mongoDB connected");
    
})
.catch(()=>{
console.log("failed to connect mongodb");

})


const LoginSchema=mongoose.Schema({
    
        name:{
            type:String,
            require:true
        },
        category:{
            type:String,
            require:true
        },
       price :{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true
        },
      images:{
       DATA:Buffer,
       contentType:String
      }
       
    
})

const collection=new mongoose.model("details",LoginSchema)

module.exports=collection