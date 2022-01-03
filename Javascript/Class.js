Class Account(amount) {
	constructor {
		this.balance = amount;
	}
	debit(amount) {
		if(debit > this.balance) {return false;}
		else {
			this.balance -= amount;
			return true;
		}
	}
	credit(amount) {
		this.balance += credit;
	}
	getBalance() {
		return this.balance;
	}
}

function Main() {
	const newAccount = new Account(10000);
	newAccount.debit(100);
	newAccount.credit(200);
	newAccount.getBalance();
}