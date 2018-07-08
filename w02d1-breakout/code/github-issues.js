var request = require('request');

var args = process.argv.slice(2);
var owner = args[0];
var repo = args[1];

var API_BASE = 'https://api.github.com';
var ISSUES_ENDPOINT = API_BASE + '/repos/' + owner + '/' + repo + '/issues?state=all';
 
var options = {
  url: ISSUES_ENDPOINT,
  headers: {
    'User-Agent': 'myawesomeapp'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var issues = JSON.parse(body).slice(0, 20);
    var closedIssues = issues.filter(function(issue) {
      return issue.state === 'closed';
    });
    var openIssues = issues.filter(function(issue) {
      return issue.state === 'open';
    });
    console.log('CLOSED ISSUES:');
    for (var issue of closedIssues) {
      console.log('Title: ' + issue.title);
    }
    console.log('OPEN ISSUES:');
    for (var issue of openIssues) {
      console.log('Title: ' + issue.title);
    }
  } else {
    console.log('ERROR:', body);
  }
}

request(options, callback);
