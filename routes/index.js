'use strict';

var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', function (req, res) {
  var input = req.body;
  Message.create(input, function(err) {
    if(err) return res.status(400).send(err);
    res.send('index');
  });
});