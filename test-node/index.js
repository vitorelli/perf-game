'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/product.routes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());

app.use('/api', productRouter);

app.listen(PORT, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${PORT}`)
});