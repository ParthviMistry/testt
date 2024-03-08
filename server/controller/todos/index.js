const Todo = require('../../model/Todo');

const getTodo = async (req, res) => {
  try {
    const data = await Todo.find().sort({ createdAt: -1 });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const getByIdTodo = async (req, res) => {
  try {
    const data = await Todo.findOne({ _id: req.params.id });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const deleteTodo = async (req, res) => {
  try {
    const data = await Todo.findByIdAndDelete({ _id: req.params.id }).sort({ createdAt: -1 });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const updateTodo = async (req, res) => {
  try {
    const data = await Todo.findByIdAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true }).sort({
      createdAt: -1,
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error.toString());
  }
};

const postTodo = async (req, res) => {
  try {
    const data = await Todo.insertMany({
      ...req.body,
    });

    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.toString());
  }
};

module.exports = {
  postTodo,
  getTodo,
  getByIdTodo,
  deleteTodo,
  updateTodo,
};
