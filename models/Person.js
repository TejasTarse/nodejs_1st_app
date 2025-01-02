const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true   
    },
    age: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager', 'cleaner'],
        required: true  // Fixed the typo here: "requird" -> "required"
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true  // Uncomment this if you want to ensure unique email addresses
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

// Create a person model from personSchema with the explicit collection name 'person'
const Person = mongoose.model('Person', personSchema, 'person');
module.exports = Person;
