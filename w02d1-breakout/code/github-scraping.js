var request = require('request');

var options = {
  url: 'https://github.com/facebook/react/issues?q=is%3Aissue',
  headers: {
    'User-Agent': 'myawesomeapp'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var re = /(\d*?) Open/m;
    var matches = body.match(re);
    var totalOpenIssues = matches[1];
    console.log(totalOpenIssues);
  }
}

request(options, callback);
