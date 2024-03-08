const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const signupSchema = mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: {
      type: String,
      trim: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email Id is Not Valid');
        }
      },
    },
    password: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    zip: { type: Number, trim: true },
  },
  {
    timestamps: true,
  }
);

signupSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) user.password = await bcrypt.hash(user.password, 8);

  next();
});

signupSchema.statics.genrateAuthToken = async function (user) {
  const token = jwt.sign({ _id: user._id.toString(), email: user.email }, 'jwttoken');

  return token;
};

signupSchema.statics.findByCredentials = async (email, password) => {
  const user = await Signup.findOne({ email });

  if (!user) throw new Error('Login unable');

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error('User Password Wrong');

  return user;
};

signupSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;
