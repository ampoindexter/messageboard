'use strict';

let mongoose = require('mongoose');

let Message;

let messageSchema = mongoose.Schema({
  author: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  message: { type: String, required: true }
});

Message = mongoose.model('Message', messageSchema);

module.exports = Message;