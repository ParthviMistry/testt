const Signup = require('../model/Signup');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decode = jwt.verify(token, 'jwttoken');

    const user = await Signup.findOne({
      _id: decode._id,
      email: decode.email,
    });

    if (!user) throw new Error();

    req.user = user;

    next();
  } catch (error) {
    res.status(401).send({ error: 'Please Authenticate.' });
  }
};

module.exports = auth;
