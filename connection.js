const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27017/MyDB";

mongoose.connect(mongoURL,{
    // useNewUrlParser:true,
    // useunifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('MongoDB Connected');
})

db.on('error',(err)=>{
    console.log('MongoDB connection error:', err);
})

db.on('disconnected', ()=>{
    console.log('MongoDB Disconnected');
})

module.exports = db;