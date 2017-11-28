
//INPUT.md HOMEWORK PART1:
var name = prompt("whats your name?");
console.log("hey" + ' ' + name);

 
 // INPUT.md HOMEWORK PART2 :
var choice = prompt ("Do you eat steak & pork chops?");

if (choice === "yes" || "YES" || "Yes"){
	console.log('This cuisiine is vegan friendly.');
} else {console.log('vegans be aware!');}


//#The Fortune Teller:
var where = prompt("where do you live?");
var spouse = prompt ("what's your patner's name?");
var jobTitle= prompt ("what do you do?");
var kids= 2 ;
console.log('you will be a ' + jobTitle + 'in '+ where + ' and married to ' + spouse + ' with' + kids + ' kids');


//#The Age Calculator
var birth=prompt("which year were you born in?")
var d= new Date();
var now = d.getFullYear();

console.log("you're " + " " + (now-birth) + "or" + (now-birth-1) + "years old.")

//#The Lifetime Supply Calculator
var ageNow=prompt("How old are you?");
var ageMax= 80;
var daily=2;
console.log('You will need about' + (ageMax-ageNow)*2*365 + 'packs of chipsto last you until the ripe old age of 80')


