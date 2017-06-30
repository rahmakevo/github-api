function userAccount() {
  //api call
  userAccount.prototype.getUserName = function requestJSON(){
  exports.getRepos = function(){
    $.get('https://api.github.com/users/daneden?access_token=' +apiKey).then(function(response){
    console.log(response);
    }).fail(function(error){
      alert(error.responsJSON.message);
    });
  };
  };
  // handling user input
  requestJSON(username, function(json)){
    if(json.message == "Not Found" || username == ''){
      $('#ghapidata').text('<h2> No User Info Found </h2>');
    } else {
      //else we have a user and we display info
      var fullname = json.name;
      var username = json.login;
      var avatarurl = json.avatar_url;
      var profileurl = json.html_url;
      var location = json.location;
      var followersnum = json.followers;
      var followingnum = json.following;
      var reposnum = json.public_repos;

      if (fullname == undefined) {
        fullname = username;
      };
    };
  };
};

exports.userAccountModule = userAccount;
