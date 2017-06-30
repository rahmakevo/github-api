var userAccount = require('./../js/back-end.js').userAccountModule;

$(document).ready(function() {
  $('form#interface').submit(function(event) {
    event.preventDefault();

    var account = $('#ghusername').val();
    console.log(account);
    var userAccountObject = new userAccount(account);
    userAccountObject.getUserInfo(account);
    console.log(userAccountObject);
  });
});
