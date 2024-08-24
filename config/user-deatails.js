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
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
       
       
    
})

const collection = new mongoose.model("user-details",LoginSchema)

module.exports=collection;