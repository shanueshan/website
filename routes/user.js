var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"IPHONE 11",
      category:"Mobile",
      about:"Nice phone founded by Apple",
      image:"https://i.pinimg.com/236x/aa/d8/75/aad875ffc1d33bfcbf8647c747471153.jpg"

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

module.exports = router;
