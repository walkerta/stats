const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));

//GET	/activities	Show a list of all activities I am tracking, and links to their individual pages
let users = mongoose.model('users');
let activities = mongoose.model('activities');
let userStats = mongoose.model('userStats');


module.exports = Router;
