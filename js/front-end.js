var userAccount = require('./../js/back-end.js').userAccountModule;

var apiKey = require('./../.envfile').apiKey;

$(document).ready(function() {
  $('form#interface').submit(function(event) {
    event.preventDefault();

    var account = $('#ghusername').val();
    console.log(account);
    var userAccountObject = new userAccount();
    var output = userAccountObject.getUserName(account);
    console.log(output);
  });
});
