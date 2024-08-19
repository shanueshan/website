var express = require('express');
const { log } = require('handlebars');
var router = express.Router();
var productDetails=require('../config/connection')


/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"IPHONE 11",
      category:"Mobile",
      about:"it is a good phone",
      image:"https://i.pinimg.com/236x/aa/d8/75/aad875ffc1d33bfcbf8647c747471153.jpg"

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
productDetails(req.body,(result)=>{
  res.render('admin/add-product')
})


})

module.exports = router;
