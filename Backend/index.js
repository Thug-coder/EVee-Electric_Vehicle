const connectToMongo = require("./db");
const express = require("express");
const jwt = require('jsonwebtoken');
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')
const cors=require("cors");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const FreeRide = require("./models/FreeRide");

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}


connectToMongo();

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors(corsOptions))


// app.get("/", (req, res) => {
//   res.send("Hello aman!");
// });

// app.get("/login", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });

app.post(
  "/signup",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.json({
          error: "A person with the same email already exists",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const passHas = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: passHas,
      });
      const data = {
        user:{
          id:user.id
        }
      }
      const token = jwt.sign(data, process.env.SECRET_SIGN);
      res.json({token});
    } catch (error) {
      console.error(error.message)
      res.json({error: "Some error occured"})
    }
  }
);

app.post('/login',async (req,res)=>{
  try {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email}, (err, user)=>{
      if (err) {
        console.log(err.message);
      }else{
        if(user){
          bcrypt.compare(password, user.password).then((valid)=>{
            if(valid){
              const data = user.id;
              // const token = jwt.sign(data, process.env.SECRET_SIGN);
              // res.status(200).json({token})
              res.status(200).json({username:user.name, userid:data})
            }else{
              res.json({error:"Email or Password incorrect"});
            }
          })
        }else{
          res.json({error:"Email or Password incorrect"});
        }
      }
    });
  } catch (error) {
    res.json({error:"some error occured"})
    console.log(error.message);
  }
});


app.post('/addProduct',async (req,res)=>{
  try {
    const data = {
      name:req.body.name,
      range:req.body.range,
      topSpeed:req.body.topSpeed,
      speedrange:req.body.speedrange,
      timerange:req.body.timerange,
      speedrange2:req.body.speedrange2,
      timerange2:req.body.timerange2,
      price:req.body.price,
      aboutcar:req.body.aboutcar,
      aboutcar2:req.body.aboutcar2,
      modes:req.body.modes,
      chargetime:req.body.chargetime,
      power:req.body.power,
      weight:req.body.weight,
    }
      let product = await Product.findOne({ name: data.name });
      if (product) {
        return res.json({
          error: "That Product already exists",
        });
      }
      await Product.create(data);
      res.json({message:"Successfully added it to The DB"});
  } catch (error) {
    res.json({error:"some error occured"})
    console.log(error.message);
  }
});



app.post('/addorder',async (req,res)=>{
  try {
    const data = {
      userid:req.body.userid,
      address:req.body.address,
      productid:req.body.productid,
      paymentid:req.body.paymentid,
      amount:req.body.amount,
      productname:req.body.productname,
    }
      let product = await Product.findById(data.productid);
      let user = await User.findById(data.userid);
      if (product && user) {
        await Order.create(data);
        res.json({message:"Order Placed Successfully"})
      }else{
        res.json({message:"Some thing went wrong"});
      }
  } catch (error) {
    res.json({error:"some error occured"})
    console.log(error.message); 
  }
});


app.get('/gethomeproduct',async (req,res)=>{
  try {
    let homedata = await Product.find().sort({_id:-1}).limit(1);
    res.json(homedata[0])
  } catch (error) {
    res.json({error:"some error occured"})
    console.log(error.message);
  }
});


app.post('/getorders',async (req,res)=>{
  try {
    let userid = req.body.userid;
    let orders = await Order.find({userid}).sort({_id:-1});
    res.json(orders)
  } catch (error) {
    res.json({error:"some error occured"})
    console.log(error.message);
  }
});


app.get('/getproducts',async (req,res)=>{
  try {
    let products = await Product.find().sort({id:-1});
    res.json(products)
  } catch (error) {
    res.json({error:"some error occured"})
    console.log(error.message);
  }
});


app.post('/addfreeride',async (req,res)=>{
  try {
    const data = {
      name:req.body.name,
      phone:req.body.phone,
    }
      let freeride  = await FreeRide.findOne({ phone: data.phone });
      if (freeride) {
        return res.json({
          message: "Already registered",
        });
      }
      await FreeRide.create(data);
      res.json({message:"Successfully Registered"});
  } catch (error) {
    res.json({error:"some error occured"})
    console.log(error.message);
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
