const express = require('express');
const router = express.Router();

const Person = require('../models/Person.js');
  
  router.post('/', async (req, res)=>{
    try{
      const data = req.body;
      const person = new Person(data);
      const response = await person.save();
  
      console.log('Data saved successfully');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({err:"Inretal server error"});
    }
  })
  
  router.get('/',async(req,res)=>{
    try{
        const data =await Person.find();
        console.log("Data fetched successfully");
        res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({err:"Internal server error"});
    }
  });
  
  router.get('/:workType',async(req,res)=>{
    try{
      const workType = req.params.workType;
      if(workType == "chef" || workType =="waiter" || workType =="manager"){
          const response = await Person.find({work:workType});
          console.log('Datafetched successfully');
          res.status(200).json(response);
      }
      else{
        console.log("Work type is invalid");
        res.status(400).json({err:"Invalid work type"});
  
      }
    }
    catch(err){
      console.log(err);
      res.status(500),json({err:"Internal server error"});
    }
  })

  router.put('/:id',async(req,res)=>{
    try{
      const personId = req.params.id;
      const data = req.body;

      const response = await Person.findByIdAndUpdate(personId,data,{
        new:true, // This will return the updated data
        runValidators:true // This will run the validators on the updated data
      });

      if(!response){
        console.log("Person not found");
        res.status(404).json({err:"Person not found"});
      }
      
        console.log("Person updated successfully");
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server error"});
    }
  })
  
  router.delete('/:id',async(req,res)=>{
  try{
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);
    if(!response){
      console.log("Person not found");
      res.status(404).json({err:"Person not found"});
    }
    console.log("Person deleted successfully");
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({err:"Internal server error"});
  }


  })
  module.exports = router;