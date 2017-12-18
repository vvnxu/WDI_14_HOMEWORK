console.log("transport");

// train lines
var lines = {
	  alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
  glenWaverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
  sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]}

// user input
var origin= prompt('where are you getting on');

var destination= prompt('where are you getting off');

// calculating indexes

// calculating number of stops

// creating journey(city to )
debugger
var keys =Object.keys(lines);
keys.forEach(function(key){
	var originIndex = key.indexOf(origin);
    var destIndex  = key.indexOf(destination);
 if (originIndex > -1 && destIndex>-1){
  	 var numberOfStops = destIndex - originIndex;
  	 var journey = key.slice(originIndex, destIndex+1)
 }else if(originIndex > destIndex){
 	numberOfStops=orginIndex -destIndex;
 	journey=key.slice(originIndex,destIndex-1)
   }
   outputToUser();
})


function outputToUser () {
	
	console.log("origin: " + origin);
	console.log("destination: " + destination);

	console.log(numberOfStops + " stops");
	console.log(journey.join(" ---> "))
}

