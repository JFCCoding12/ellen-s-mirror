var test = 'pong';

var CLIENT_ID = '1683dd145fd44d5d9858ca8d608056bd';
var SCOPES = [
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-modify-playback-state'
];
var accessToken = 'hey';


function login() {
  var redirect_uri = location.protocol + '//' + location.host + location.pathname;
  var url = 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
            '&redirect_uri=' + encodeURIComponent(redirect_uri) +
            '&scope=' + SCOPES.join('%20') +
            '&response_type=token';
  console.log('login url', url);
    console.log(accessToken + 'accessToken');
  //location.href = url;
  console.log('The token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    console.log('The refresh token is ' + data.body['refresh_token']);
}
function work(){
createAuthorizedRequest(POST, "https://accounts.spotify.com/api/token", function (request) {
    if (request.status >= 200 && request.status < 400) {
      console.log('commant response', request.responseText);
    }
  }).send();

}

function createAuthorizedRequest(method, url, onload) {
  var request = createRequest(method, url, onload);
  request.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  return request;
}

function sendCommand(method, command) {
  console.log('COMMAND: ' + command);
  var url = 'https://accounts.spotify.com/api/token';
  createAuthorizedRequest(POST, "https://accounts.spotify.com/api/token", function (request) {
    if (request.status >= 200 && request.status < 400) {
      console.log('commant response', request.responseText);
    }
  }).send();
}

function connect() {
  console.log('Connecting with access token: ' + accessToken);
  getUserInformation(function(userinfo) {
    if (!userinfo) {
      accessToken = 'BQBJ2cQnZevfTx-YtVvr64HH3syY5zvmA1Wlf-R_2VKYJNPFlMgW7hqm01Qewkj9QY_VEuU0ycGHfwvVWPGKiJdlsLkP7DJLLU9GKWdbZPd7qiz5KsTMM-YoTU-EFsglgKlCJ67aOy1S2MuWGn-pPvhXCA';
      showLogin();
      return;
    }

    hideLogin();
    toast('Hello ' + (userinfo.display_name || userinfo.id) + '!', 'Make sure you\'re playing something in Spotify!');
    pollCurrentlyPlaying(2000);
  });
}

function validateAuthentication() {
  console.log('location.hash', location.hash);
  var lochash = location.hash.substr(1);
  var newAccessToken = lochash.substr(lochash.indexOf('access_token=')).split('&')[0].split('=')[1];
  console.log(access_token + 'access_token');
    console.log(accessToken + 'accessToken');

  /*if (newAccessToken) {
    localStorage.setItem('access_token', newAccessToken);
    accessToken = newAccessToken;
  } else {
    accessToken = localStorage.getItem('access_token');
  }
  if (accessToken) {
    console.log(access_token + 'access_token');
    console.log(accessToken + 'accessToken');
  } else {
    showLogin();
  }*/
}