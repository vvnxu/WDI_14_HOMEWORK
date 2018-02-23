class atm{

	constructor(type,money){
		this.type=type
		this.money=money
		this.transctionHistory=[]
	}

	showBalance(){
		return this.money
	}

	withdraw(amt){
		if (amt<=money){
			this.money -=amt
			this.transctionHistory.push({withdraw: amt})
		}else{
			break
		}
	}

	deposit(amt){
		
			this.money +=amt
			this.transctionHistory.push({deposit: amt})
		
	}


	
}

