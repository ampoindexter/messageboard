'use strict';

var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function(req, res) {
  Message.find({}, function(err, messages) {
    messages.sort();
    res.status(err ? 400 : 200).render('index', {messages: messages});
  });
});

router.post('/', function (req, res) {
  var message = new Message(req.body);
  message.save(function(err, savedMessage) {
    res.status(err ? 400 : 200).send(err || savedMessage);
  });
});

module.exports = router;