var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var userController = require('./controllers/userController.js');
var forumController = require('./controllers/forumController.js');
var discussController = require('./controllers/discussController');
var ownerController = require('./controllers/ownerController');
const { mongoose } = require('./database/db');
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.listen(3000, () => console.log("started at 3000"));

app.use('/users',userController);
app.use('/forums',forumController);
app.use('/discuss',discussController);
app.use('/owners',ownerController);