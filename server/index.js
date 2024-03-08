require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');

const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

mongoose
  .connect(process.env.MONGOURL)
  .then((res) => console.log('connection done'))
  .catch((error) => console.log('MONGODB ERROR :', error));

const todoRouter = require('./route');

app.use('/api', todoRouter);

app.get('/', (req, res) => {
  try {
    return res.status(200).send({ message: 'Hello!!' });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`App running no ${port}`));
