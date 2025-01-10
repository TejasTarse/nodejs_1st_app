const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person.js');

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    // Find user by username
    const user = await Person.findOne({ username: username });

    if (!user) {
      return done(null, false, { message: 'User not found' });
    }

    // Compare password
    const isPasswordValid = await user.comparePassword(password);
    if (isPasswordValid) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Password is incorrect' });
    }
  } catch (err) {
    return done(err);
  }
}));

module.exports = passport;
