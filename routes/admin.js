var express = require('express');
const { log } = require('handlebars');
var router = express.Router();
var productDetails=require('../config/connection');
const { Error } = require('mongoose');


/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"IPHONE 11",
      category:"Mobile",
      about:"it is a good phone",
      image:"https://www.bing.com/images/search?view=detailV2&ccid=Ekk1jXJU&id=F72A2ED1DCFCD3F4300946C78E340E3A252B2C30&thid=OIP.Ekk1jXJUJ1H4ywlnGJaz5AHaIw&mediaurl=https%3a%2f%2fraylo.imgix.net%2fiphone-11-purple.png&exph=1112&expw=940&q=iphone+11&simid=608029780719786566&FORM=IRPRST&ck=DF7DEAA65B406FFB08764AA65A16DAD0&selectedIndex=38&itb=1"

    },
    {
      name:"OPPO",
      category:"Mobile",
      about:"Nice phone  ",
      image:"https://i.pinimg.com/236x/95/67/f6/9567f6d956e79be94101a432de252e60.jpg"

    },
    {
      name:"OPPO",
      category:"Mobile",
      about:"Nice phone ",
      image:"https://i.pinimg.com/236x/0c/e6/fc/0ce6fcba10c6453cb3e7e0895f3f3f14.jpg" 
    },
    {
      name:"ONE PLUSE",
      category:"Mobile",
      about:"Nice phone ",
      image:"https://i.pinimg.com/236x/7d/0e/ac/7d0eacb350e45a3975bb0f65ed41e6ae.jpg"
    },
    {
      name:"ONE PLUSE",
      category:"Mobile",
      about:"Nice phone ",
      image:"https://www.bing.com/images/search?view=detailV2&ccid=f8KZcev%2b&id=B207143A65A1206C4BAB8293D94727AB5636E010&thid=OIP.f8KZcev-T7hJp960aeoPiAAAAA&mediaurl=https%3a%2f%2fadminapi.applegadgetsbd.com%2fstorage%2fmedia%2flarge%2fiPhone-15-Plus-(2)-(3)-1073.jpg&exph=474&expw=474&q=iPhone+15%22+Titanium&simid=608047445892032927&FORM=IRPRST&ck=ED7E5BAB03EDF2DCEA758DF7129272FA&selectedIndex=66&itb=0"
    },
  ]
res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
   console.log(req.body)
   console.log(req.files.images);
productDetails(req.body,(id)=>{
  let image=req.files.images
  console.log(id);
  
  image.mv('./public/images/'+id+'.jpg',(err,done)=>{
    if(!err){
      res.render('admin/add-product')
    }else{
      console.log(Error);
      
    }
  })
  res.render('admin/add-product')
})


})

module.exports = router;
