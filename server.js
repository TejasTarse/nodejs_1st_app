const express = require('express')
const app = express()
const mongo = require('./connection.js');
require('dotenv').config();

const passport = require('./auth.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const logRequest =(req,res,next)=>{
  console.log(`[${new Date().toLocaleString()}] - Request URL: ${req.requestURL}`);
  next();
}
// app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local',{session:false});


app.get('/' , function (req, res) {
  res.send('Welcome to the restaurant!');
})

const personRoutes = require('./routes/personRoutes.js');
app.use('/person',localAuthMiddleware,personRoutes);

const menuItemsRoutes = require('./routes/menuItemRoutes.js');
app.use('/menu',menuItemsRoutes);

app.listen(port, ()=>{console.log('Server is ruuning on 3000 port || http://localhost:3000/ ')});