
var request = require('request');
var city = process.argv[2];
var apiKey= process.env.OPEN_WEATHER;
var url='http://api.openweathermap.org/data/2.5/weather?q=' + city + ',Australia&units=metric&appid=' + apiKey
request(url,function(err,res,body){
	if (err ) {
		console.log(error);
		
	} else {
		var data = JSON.parse(body).main.temp
	
		console.log('Temperature in ' + city + ' is :', data);
	}
  