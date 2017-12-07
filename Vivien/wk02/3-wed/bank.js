
var balance=document.querySelector('#bal1');

var amount= document.querySelector('#amount1');

var withdrawBtn= document.querySelector('.out');

   balance.value=2000;
 
function withdraw(){ //debugger

var balanceSavings=Number(balance.value);
var amountSavings =Number(amount.value);

 balanceSavings -= amountSavings;

 balance.value = balanceSavings;

return balanceSavings;
	
}

withdrawBtn.addEventListener('click',withdraw);

function deposit(){ //debugger
var balanceSavings=Number(balance.value);

var amountSavings =Number(amount.value);

balanceSavings += amountSavings;

 balance.value = balanceSavings;

 return balanceSavings
	
}

depositBtn= document.querySelector('.in');

depositBtn.addEventListener('click', deposit);
//
var chkBalance=document.querySelector('#bal2');
var chkAmount=document.querySelector('#amount2');

function chkWithdraw(){
var balanceChk =Number(chkBalance.value);
var amountChk=Number(chkAmount.value);

chkBalance.value = balanceChk;

 if (balanceChk - amountChk >= 0){

 	return balanceChk
 }

 else{alert('You dont have enough balance');
}
}

checkWithdrawBtn=document.querySelector('#b3');

checkWithdrawBtn.addEventListener('click', chkWithdraw) ;

//{
//var balanceChk =Number(chkBalance.value);
//var amountChk=Number(chkAmount.value)}