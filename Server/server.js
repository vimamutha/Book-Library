const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('../db/mongoose');

const {addRoutes} = require('../Controller/controller.js');

const app = express();
const port = 3000;
app.use(bodyParser.json());


addRoutes(app);

app.listen(port, () => {
  console.log('Start server on port 3000');
});
