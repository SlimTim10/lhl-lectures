// A node script that, given a repo, prints out the latest 20 issues for the repo and format the issue differently if they are closed vs open

var request = require('request');
require('dotenv').config();

var base = 'https://api.github.com';
var repo = '/repos/facebook/react/issues?state=all';

var options = {
  url: base+repo,
  json: true,
  headers: {
    'User-Agent': 'myscript',
    'Authorization': 'token ' + process.env.GITHUB_API_KEY
  }
};
 
function callback(error, response, data) {
  if (!error && response.statusCode == 200) {
    var info = data.slice(0, 20);
    
    var openIssues = info.filter(function(issue) {
      return issue.state === 'open';
    });
    
    var closedIssues = info.filter(function(issue) {
      return issue.state === 'closed';
    });
    
    console.log('---CLOSED---');
    for (var issue of closedIssues) {
      console.log(issue.title);
      console.log();            // Insert line break for formatting
    }

    console.log('---OPEN---');
    for (var issue of openIssues) {
      console.log(issue.title);
      console.log();            // Insert line break for formatting
    }
  } else {
    console.log('Status code:', response.statusCode);
    console.log('Error:', error);
    console.log('Data:', data);
  }
}
 
request(options, callback);
