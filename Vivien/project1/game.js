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
var all9Boxes = document.querySelectorAll('.boxes');

var currentPlayer = 1;

function checkForWinner(){

}

function flipCard(box){
	if(box.childElementCount===0){
		if (currentPlayer===1) {
			var cross=document.createElement('img');
			cross.setAttribute('src','cross.png');
			box.appendChild(cross);
			checkForWinner();
		    currentPlayer +=1;
		} else {
			var circle=document.createElement('img');
		    circle.src ='circle.png';
		    box.appendChild(circle);
		   checkForWinner();
		    currentPlayer -=1;
		}
  	} else {
  		return;
  	}
	console.log ("box" + box.textContent+'clicked')
}

function getReady() {
	all9Boxes.forEach(function(box){
		box.addEventListener('click', function() {
			flipCard(box)
		});
	});
}

getReady();


//if(player1 clicks){
//	show cross box.style.background =x}else{
//		show circle
//	}
//}

//

//for (var i=1,i<all9Boxes.length+1,i++){
//	1,3,5,7,9 player1 gets to play
//	2,4,6,8 player2 
//}