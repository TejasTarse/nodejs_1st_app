const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu.js');

router.post('/',async(req,res)=>{
    try{
      const data = req.body;
      const menu =new Menu(data);
      const response = await menu.save();
  
      console.log("Data saved successfully");
      res.status(200).json(response);
      }
      catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server error"});
    }
  });
  
  router.get('/',async(req,res)=>{
    try{
      
      const response = await Menu.find();
      console.log("Data fetched successfully");
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({err:"Internal server error"});
    }
  })
  

module.exports = router;
