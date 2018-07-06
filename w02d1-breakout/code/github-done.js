// A node script that, given a repo, prints out the latest 20 issues for the repo and format the issue differently if they are closed vs open

var request = require('request');

var base = 'https://api.github.com';
var repo = '/repos/facebook/react/issues?state=all';

var options = {
  url: base+repo,
  headers: {
    'User-Agent': 'myscript'
  }
};
 
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body).slice(0, 20);
    console.log('number of issues:', info.length);
    
    var openIssues = info.filter(function(issue) {
      return issue.state === 'open';
    });
    
    var closedIssues = info.filter(function(issue) {
      return issue.state === 'closed';
    });
    
    console.log('---OPEN---');
    for (var issue of openIssues) {
      console.log(issue.body);
      console.log('---------------------------------');
    }

    console.log('---CLOSED---');
    for (var issue of closedIssues) {
      console.log(issue.body);
      console.log('---------------------------------');
    }

  }
}
 
request(options, callback);
