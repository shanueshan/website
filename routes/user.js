var express = require('express');
var router = express.Router();

const userDeatails = require('../config/user-deatails');

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"IPHONE 11",
      category:"Mobile",
      about:"Nice phone founded by Apple",
      image:"https://www.bing.com/images/search?view=detailV2&ccid=po%2bKWyjH&id=94D18B44A271BBD0A2F0542B6DA73EEAB0A7EBE5&thid=OIP.po-KWyjHUoT_yMADFB6XcAHaIw&mediaurl=https%3a%2f%2fpngimg.com%2fuploads%2fiphone_11%2fiphone_11_PNG21.png&exph=1112&expw=940&q=iphone+11&simid=608025563026634052&FORM=IRPRST&ck=70406A485D2FA49A127F38161A3AF961&selectedIndex=11&itb=1"

    },
    {
      name:"OPPO",
      category:"Mobile",
      about:"Nice phone ",
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
    }
  ]
  res.render('index', {products,admin:false});
});
router.get('/login',(req,res)=>{
  res.render('user/login')

})
router.get('/signup',(req,res)=>{
  res.render('user/signup')
  
})
router.post('/signup',(req,res)=>{

    console.log(req.body);
    
 
})

module.exports = router;
