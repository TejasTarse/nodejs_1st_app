
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person.js');

passport.use(new LocalStrategy(async (username,password,done)=>{
  try{
    const user = await Person.findOne({username:username});

    if(!user){
      return done(null,false,{message:'User not found'});
    }
    const ispsswordValid = user.comparePassword(password);
    if(ispsswordValid){
      return done(null,user );
    }else{
      return done(null,false,{message:'Password is incorrect'});
    }
  }catch(err){
    return done(err);
  }
}))

// app.use(logRequest);

module.exports = passport;