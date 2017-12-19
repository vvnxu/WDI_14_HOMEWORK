console.log("transport");

// train lines
var lines = {
	  alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
  glenWaverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
  sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}

// user input
var origin= prompt('where are you getting on');

var destination= prompt('where are you getting off');

// calculating indexes

// calculating number of stops

// creating journey(city to )
debugger
var keys =Object.keys(lines);
// keys:alamein,glenwaverley,sandringham

keys.forEach(function(key){
	//1st key:alamein 
	var line=lines[key]
	var originIndex = line.indexOf(origin);
	// origin="flinders"
	// var originIndex = 'Alamein'.indexOf('flinders')
    var destIndex  = line.indexOf(destination);

 if (originIndex > -1 && destIndex>-1){
  	 var numberOfStops = destIndex - originIndex;
  	 var journey = line.slice(originIndex, destIndex+1)
 }else if(originIndex > -1 && destIndex>-1&&originIndex > destIndex){
 	numberOfStops=originIndex -destIndex;
 	journey=line.slice(originIndex,destIndex-1)
   }
   if (journey.length > 0) {
   	outputToUser(numberOfStops,journey);
   }
})


function outputToUser (numberOfStops,journey) {
	
	console.log("origin: " + origin);
	console.log("destination: " + destination);

	console.log(numberOfStops + " stops");
	console.log(journey.join(" ---> "))
}

