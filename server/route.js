const express = require('express');
const Router = express.Router();

const auth = require('./middleware/Auth');

const todoController = require('./controller/todos');
const userController = require('./controller/signup');

Router.use(express.json());

//Authentication
Router.post('/user', userController.userSignUp);
Router.post('/user/login', userController.userLogin);

Router.get('/user', auth, userController.getUser);
Router.get('/user/:id', auth, userController.getUserById);
Router.delete('/user/:id', auth, userController.deleteUser);
Router.put('/user/:id', auth, userController.updateUser);

//Todo
Router.post('/todo', auth, todoController.postTodo);
Router.get('/todo', todoController.getTodo);
Router.get('/todo/:id', todoController.getByIdTodo);
Router.delete('/todo/:id', auth, todoController.deleteTodo);
Router.put('/todo/:id', auth, todoController.updateTodo);

module.exports = Router;
