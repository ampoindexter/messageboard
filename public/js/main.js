'use strict';

$(document).ready(init);

function init() {
  $('#submit').click(addMessage);
}

function addMessage() {
  var message = {};
  message.author = $('.input#name').val();
  message.message = $('.input#message').val();
  $('.input').each(function(index, input) {
    $(.input).val('')
  });
}