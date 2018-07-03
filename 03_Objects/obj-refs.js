let myAccount = {
    name: 'Sam Yeager',
    expenses: 0,
    income: 0
};

// let otherAccount = myAccount;
// otherAccount.income = 1000;

let addExpense = function(account, amount) {
    account.expenses += amount;
    // account = {};
    // console.log(account);
};



// Challenge
let addIncome = function(account, amount) {
    account.income += amount;
};

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
};

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses.`
};

console.log(getAccountSummary(myAccount));
addIncome(myAccount, 80);
addExpense(myAccount, 5);
addIncome(myAccount, 200);
addExpense(myAccount, 25);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
