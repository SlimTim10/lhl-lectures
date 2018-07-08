var ttc = require('./ttc-api');

var args = process.argv.slice(2);
var routeTag = args[0] || 504;
var stopTag = args[1] || 23895;

ttc.showPredictions(routeTag, stopTag);
