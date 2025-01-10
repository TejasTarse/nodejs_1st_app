const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
});

personSchema.pre('save', async function (next) {
    try {
        const person = this;
        
        if (!person.isModified('password')) {
            return next();
        }

        const salt = await bcrypt.genSalt(10);
        person.password = await bcrypt.hash(person.password, salt);

        next();
    } catch (err) {
        next(err);
    }
});

personSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (err) {
        throw err;
    }
};


// Create a person model from personSchema with the explicit collection name 'person'
const Person = mongoose.model('Person', personSchema, 'person');
module.exports = Person;
