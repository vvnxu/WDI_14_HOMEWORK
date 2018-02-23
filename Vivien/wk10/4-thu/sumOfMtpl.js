console.log(process.argv)


var num=Number(process.argv[2])

function sumUp(num){
	var range=[]
	for (var i=0;i<=num ;i++){
		if(i%3===0 || i%5===0){
			// console.log(i)
			range.push(i)
		}
		// console.log(range)
	}
	
	var sum=range.reduce(function(a,b){return a+b}, 0)
	console.log(sum)


}
 sumUp(num)