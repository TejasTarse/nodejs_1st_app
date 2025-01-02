const express = require('express')
const app = express()
const mongo = require('./connection.js');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Welcome to the restaurant!');
})

const personRoutes = require('./routes/personRoutes.js');
app.use('/person',personRoutes);


const menuItemsRoutes = require('./routes/menuItemRoutes.js');
app.use('/menu',menuItemsRoutes);

app.listen(port, ()=>{console.log('Server is ruuning on 3000 port || http://localhost:3000/ ')});