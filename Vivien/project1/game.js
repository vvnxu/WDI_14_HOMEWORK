var player1=document.querySelector('#player1');
var p1Score=player1.value;
var p2Score=player1.value;
var player2=document.querySelector('#player2');
var gameBoard=document.querySelector('.gameboxes')
var box1=document.querySelector('.b1');
var box2=document.querySelector('.b2');
var box3=document.querySelector('.b3');
var box4=document.querySelector('.b4');
var box5=document.querySelector('.b5');
var box6=document.querySelector('.b6');
var box7=document.querySelector('.b7');
var box8=document.querySelector('.b8');
var box9=document.querySelector('.b9');
var all9Boxes = document.querySelectorAll('.boxes')

function output(){

console.log ("box clicked")
//p1Score +=1 | p2Score+=1;
}

all9Boxes.forEach(function(box){
	box.addEventListener('click',output)
})