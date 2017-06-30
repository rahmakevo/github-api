function userAccount() {

}
exports.userAccountModule = userAccount;

var userAccount = require('./../js/back-end.js').userAccountModule;

var apiKey = "YOUR_API_KEY_GOES_HERE";

$(document).ready(function() {
  $('form#interface').submit(function(event) {
    event.preventDefault();

    var account = $('#ghusername').val();
    console.log(account);

    var userAccountObject = new userAccount();
  });
});
