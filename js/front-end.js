var userAccount = require('./../js/back-end.js').userAccountModule;

var apiKey = ('./../.envfile').userAccountModule;

$(document).ready(function() {
  $('form#interface').submit(function(event) {
    event.preventDefault();

    var account = $('#ghusername').val();
    console.log(account);
    $.get('https://api.github.com/users/daneden?access_token' + apiKey).then(function(response) {
      console.log(response.login);
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    })
    var userAccountObject = new userAccount();
    var output = userAccountObject.getUserName(account);
    console.log(output);
  });
});
