var collection=require("./config/connection")
app.get('views/admin/add-product.hbs',async (req,res)=>{
    await collection.insertMany([data])
  
    
    })
    
const data={
    name:req.body.name,
    category:req.body.category,
    price:req.body.price,
    description:req.body.description,
    

}