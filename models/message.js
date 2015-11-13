'use strict';

let mongoose = require('mongoose');

let User;

let userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  createdAt: { type: Date, default: new Date() }
});

User = mongoose.model('User', userSchema);

module.exports = User;