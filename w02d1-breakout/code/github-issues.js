var githubApi = require('./github-api');

var args = process.argv.slice(2);
var owner = args[0];
var repo = args[1];

githubApi.logIssues(owner, repo);
