var request = require('request');

function handleResponse(error, response, body) {
  if (!error && response.statusCode == 200) {
    var issues = JSON.parse(body).slice(0, 20);
    var closedIssues = issues.filter(function(issue) {
      return issue.state === 'closed';
    });
    var openIssues = issues.filter(function(issue) {
      return issue.state === 'open';
    });
    console.log('CLOSED ISSUES:');
    closedIssues.forEach(function(issue) {
      console.log('Title: ' + issue.title);
    });
    console.log('OPEN ISSUES:');
    openIssues.forEach(function(issue) {
      console.log('Title: ' + issue.title);
    });
  } else {
    console.log('ERROR:', body);
  }
}

function logIssues(owner, repo) {
  var API_BASE = 'https://api.github.com';
  var ISSUES_ENDPOINT = API_BASE + '/repos/' + owner + '/' + repo + '/issues?state=all';
  
  var options = {
    url: ISSUES_ENDPOINT,
    headers: {
      'User-Agent': 'myawesomeapp'
    }
  };
  
  request(options, handleResponse);
}

module.exports = {
  logIssues: logIssues
};
