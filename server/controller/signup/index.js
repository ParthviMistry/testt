const Signup = require('../../model/Signup');

const getUser = async (req, res) => {
  try {
    const data = await Signup.find().sort({ createdAt: -1 });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const getUserById = async (req, res) => {
  try {
    const data = await Signup.findOne({ _id: req.params.id });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const deleteUser = async (req, res) => {
  try {
    const data = await Signup.findByIdAndDelete({ _id: req.params.id }).sort({ createdAt: -1 });

    return res.status(200).send({ message: 'User has been Deleted', data });
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const updateUser = async (req, res) => {
  try {
    const data = await Signup.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).sort({
      createdAt: -1,
    });

    return res.status(200).send({ message: 'User has been Updated', data });
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const userLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(404).send({ error: 'please enter email or password' });
    }

    const user = await Signup.findByCredentials(email, password);

    if (!user) throw new Error('unauthorized user');

    const token = await Signup.genrateAuthToken(user);
    console.log('user, token ==>', user, token);

    return res.status(200).send({ user, token });
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const userSignUp = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(404).send({ message: 'please enter email or password' });
    }

    const isMatch = await Signup.findOne({ email: email });

    if (isMatch) return res.status().send({ error: 'User Already register' });

    const user = new Signup(req.body);

    await user.save();

    return res.status(200).send({ message: 'User register', user });
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

// const postUser = async (req, res) => {
//   try {
//     const data = await Signup.insertMany({
//       ...req.body,
//     });

//     return res.status(200).send(data);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).send(error.toString());
//   }
// };

module.exports = {
  userSignUp,
  userLogin,
  getUser,
  getUserById,
  deleteUser,
  updateUser,
};
