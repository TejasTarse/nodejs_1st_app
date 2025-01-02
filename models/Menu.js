const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{type:String},
    price:{
        type:String,
        required:true
    },
    taste:{
        type:String,
        enum:["spicy","sour"],
        required:true
    },
    isDrink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
});

const Menu = mongoose.model('Menu',menuSchema,'menu');

module.exports = Menu;