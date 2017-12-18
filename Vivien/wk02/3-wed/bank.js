
var balance=document.querySelector('#bal1');

var amount= document.querySelector('#amount1');

var withdrawBtn= document.querySelector('.out');
var depositBtn = document.querySelector('.in');
	
	balance.value = 200.00;
 
function withdraw(){ 
	//debugger

	var balanceSavings=Number(balance.value);

	var amountSavings =Number(amount.value);
	balance.value = balanceSavings;
 	balanceSavings -= amountSavings
 if(balanceSavings === 0){

  	balance.style.backgroundColor='red';

 }else if(
 	balanceSavings - amountSavings < 0){

 	alert('Not enough balance');

  }else{

	return balanceSavings;
	}	
}

withdrawBtn.addEventListener('click',withdraw);

function deposit(){ 
	
	var balanceSavings = Number(balance.value);

	var amountSavings = Number(amount.value);

	balanceSavings += amountSavings;

 	balance.value = balanceSavings;

 	return balanceSavings
 }

depositBtn.addEventListener('click', deposit);

//CHECKINGS ACCOUNT 

var chkBal= document.querySelector('#bal2');
var chkAmount= document.querySelector('#amount2');

function chkWithdraw(){

	var balanceChk = Number(chkBal.value);
	var amountChk = Number(chkAmount.value);

	chkBal.value = balanceChk;

	chkBal.value=20000;

 	balanceChk -= amountChk;
 if(balanceChk - amountChk < 0){
 	return;

 }else if(balanceChk - amountChk === 0){
	chkBal.style.backgroundColor='red';
 }else{
 	return balanceChk;
}
}

checkWithdrawBtn = document.querySelector('#b3');

checkWithdrawBtn.addEventListener('click', chkWithdraw) ;
