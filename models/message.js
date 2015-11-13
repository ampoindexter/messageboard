'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  createdAt: { type: Date, default: new Date() }
});

var User = mongoose.model('User', userSchema