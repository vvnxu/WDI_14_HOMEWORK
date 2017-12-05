var trainStops =[
	['FlindersStreet','Richmond','EastRichmond','Burnley','Hawthorn','Glenferrie'],
	['FlagStaff','MelbourneCentral ','Parliament','Richmond','Kooyong','tooronga'],
	['SouthernCross','Richmond','SouthYarra','Prahran','Windsor']
];

var showStops=function(getOn,getOff){

	var getOn=prompt('where are you getting on');
	var getOff = prompt('where are you getting off')
    var stops =[];


	for (i=0; i<trainStops.length; i++){
		if (trainStops[i].indexOf(getOn)<trainStops[i].indexOf(getOff)){

			stops.push(trainStops[i].slice(trainStops[i].indexOf(getOn),trainStops[i].indexOf(getOff)+1));
			
			return stops 
		}

		else {
			debugger
			 stops.push(trainStops[i].slice(trainStops[i].indexOf(getOff),trainStops[i].indexOf(getOn)+1));
              var goingToCity= stops.reverse();
              
			 return goingToCity;
		}
	}

	
}
