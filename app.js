var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var userRouter = require("./routes/user");
var adminRouter = require("./routes/admin");
var multer = require("multer");
var hbs = require("express-handlebars");
var app = express();
var fileupload = require("express-fileupload");
var db = require("./config/connection");
var userdb=require("./config/user-deatails")
var bcrypt=require('bcrypt');
const collection = require("./config/connection");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layout",
    partialsDir: __dirname + "/views/partials/",
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileupload());
app.post("/admin/add-product", async (req, res) => {
  // database
  const data = {
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    description: req.body.description,
    images: req.body.images,
  };
  await db.insertMany(data);
  console.log(req.body);
  console.log(req.files.images);
  
});
//user data base
app.post("/signup", async (req,res)=>{
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }
  const existinguser = await userdb.findOne({name: data.name});
  if(existinguser){
    res.send("user aldredy exist plaese try another user name or login with thi user name")
  }
  else {
    // passwor hashing
    const saltRounds = 10
    const hashPassword=await bcrypt.hash(data.password, saltRounds)
    data.password = hashPassword
    const userdata = await userdb.insertMany(data);
    console.log(userdata);
  
  }
});
//login
app.post("/signup", async (req,res)=>{
    try{
      const check= await userdb.findOne({email: req.body.email});
      if(!check){
        res.send("this user cannot found please check!")
        
      }


      const ispasswordMatch=await bcrypt.compare(req.body.password, check.password)
      if(ispasswordMatch){
        res.render('admin/add-product')
      }
      else{
        res.send("password incorrect")
      }
    }
    catch{
       res.render('/login')
    }
})
//finish
app.use("/", userRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
