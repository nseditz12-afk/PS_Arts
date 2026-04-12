/* ================= AUTH ROUTES ================= */
/* file: routes/auth.js */
require('dotenv').config();
require('dotenv').config();
process.env.JWT_SECRET
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./User');

router.post('/register',async(req,res)=>{
 const {name,email,password} = req.body;
 const hashed = await bcrypt.hash(password,10);
 const user = new User({name,email,password:hashed});
 await user.save();
 res.json({message:'User Registered'});
});

router.post('/login',async(req,res)=>{
 const {email,password} = req.body;
 const user = await User.findOne({email});

 if(!user) return res.status(404).json({message:'User not found'});

 const valid = await bcrypt.compare(password,user.password);

 if(!valid) return res.status(401).json({message:'Invalid password'});

 const token = jwt.sign({id:user._id},'secretkey');

 res.json({message:'Login success',token});
});

module.exports = router;