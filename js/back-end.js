function userAccount() {
  //handle user info
}

var apiKey = ('./../.envfile').apiKey;

userAccount.prototype.getUserInfo = function(account){
  $.get('https://api.github.com/users/' +account+ '?access_token' + apiKey).then(function(response) {
  $.ajax({
    url: 'https://api.github.com/users/' +account+ '/repos',
    sort: 'created: asc',
    per_page: 5
  }).done(function(repos) {
    $.each(repos, function(index, repo) {
      console.log(repo);
      $('#repos').append('<ul><li>' +repo.name+' '+repo.created_at+' '+repo.language +'</li></ul>');
      // $('#date').text(repo.created_at);
      // $('#langs').text(repo.language);
    });
  });
    console.log(response);
    $('#avatar').html('<img src="' + response.avatar_url + '">');
  if (response.avatar_url == null) {
    response.name = "Input correct user info";
  }
  $('#avatarurl').text(response.avatar_url);
    if (response.login == null) {
      response.name = "Input correct user info";
    }
    $('#full_name').text(response.login);
    if (response.name == null) {
      response.name = "Input correct user info";
    }
      $('#ghapidata').text(response.name);
      if (response.html_url == null) {
        response.name = "Input correct user info";
      }
      $('#profile_url').text(response.html_url);
      if (response.followers == null) {
        response.name = "Input correct user info";
      }
      $('#follow').text(response.followers);
      if (response.following == null) {
        response.name = "Input correct user info";
      }
      $('#followed').text(response.following);
      // if (response.public_repos == null) {
      //   response.name = "Input correct user info";
      // }
      // $('#repos').text(response.public_repos);
      if (response.repos_url == null) {
        response.name = "Input correct user info";
      }
      $('#repo_url').text(response.repos_url);

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
}
exports.userAccountModule = userAccount;
