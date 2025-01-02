const mongoose = require('mongoose');

// const mongoURL = "mongodb://localhost:27017/MyDB";
const mongoURL= "mongodb+srv://TejasTarse:TejasTarse@cluster0.tyeyx1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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