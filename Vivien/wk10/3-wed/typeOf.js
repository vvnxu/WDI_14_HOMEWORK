typeof 15
Prediction:number
Actual:number

typeof 5.5
Prediction:number
Actual:number
typeof NaN
Prediction:number
Actual:number

typeof "hello"
Prediction:string
Actual:string

typeof true
Prediction:boolean
Actual:boolean

typeof 1 != 2
Prediction:boolean
Actual:true


"hamburger" + "s"
Prediction:'hamburgers'
Actual:'hamburgers'

"hamburgers" - "s"
Prediction:"hamburger"
Actual:NaN

"1" + "3"
Prediction:"13"
Actual:

"1" - "3"
Prediction:NaN
Actual:'-2'

"johnny" + 5
Prediction:NaN
Actual:'johnny5'

"johnny" - 5
Prediction:NaN
Actual:NaN

99 * "luftbaloons"
Prediction: NaN
Actual:NaN

// Add an element to the back of an array.
array.pop()
// Remove an element from the back of an array.
array.push()
// Add an element to the front of an array.
array.unshift()
// Remove an element from the front of an array.
array.shift()
// Concatenates all the elements in an array into a string.
 ['a','r','r','a','y'].join()
// Separates the characters of a string into an array. This one is a string method.
"string".split('')

var numbers = [2, 4, 6, 8]
// numbers.pop()
numbers=[2,4,6]
// numbers.push(10)
numbers=[2,4,6,10]
// numbers.unshift(3)
numbers=[3,2,4,6,10]

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")
['dot','dash','pause','dash','dot',]


var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
// bands.push(beatles)
bands = ["Paul", "John", "George", "Pete"]
// bands.unshift(stones)
bands=[["Brian", "Mick", "Keith", "Ronnie", "Charlie"],["Paul", "John", "George", "Pete"]]
// bands[bands.length - 1].pop()
bands=[["Brian", "Mick", "Keith", "Ronnie", "Charlie"],["Paul", "John", "George"]]
// bands[0].shift()
bands=[ "Mick", "Keith", "Ronnie", "Charlie"],["Paul", "John", "George"]]
// bands[1][3] = "Ringo"
bands=[ "Mick", "Keith", "Ronnie", "Ringo"],["Paul", "John", "George"]]


a	b	a AND b
true	true	true
true	false	false
false	true	false
false	false	false
a	b	a OR b
true	true	true
true	false	true
false	true	true
false	false	false
a	b	a != b
3	3	false
1	5	true
2	"2"	false
a	      b	!a AND (a OR b)
true	true	false
true	false	true
false	true	true
false	false	false

var id
var age
if (id){
	switch (age){
		case age>75:
			console.log("Are you sure you want to be here?")

		    break
		case age<18:
			console.log("You're too young to be in here!")
			break
		case age >=18 && age <=21:
			console.log("Come on in (but no drinking)!")
			break
		default:
			console.log("Come on in!")
	}
}else{
	console.log('NO ID,NO ENTRY')
}


//fizz-buzz

function fizzBuzz(number){
	if (number>=1 && number<=100){
		if (number%3===0){
				console.log('fizz')
			}else if(number%5===0){
				console.log('buzz')
			}else if(number%3===0&&number%5===0){
				console.log('FizzBuzz')
			}else{
				console.log(number)
			}
		}else{
			console.log('enter a new number')
			}
}

