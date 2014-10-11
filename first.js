var request = require('request');
request('http://www.nytimes.com',function(err, status, body){
	console.log(status);
});

