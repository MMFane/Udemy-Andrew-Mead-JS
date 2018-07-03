const account = {
    name: 'Sam Yeager',
    expenses: [],
    income: [],
    addExpense: function (description, amt) {
        this.expenses.push({
            description: description,
            amount: amt
        })
    },
    addIncome: function(description, amt) {
        this.income.push({
            description: description,
            amount: amt
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalIncome = 0;
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount
        })
        this.income.forEach(function (income) {
            totalIncome += income.amount
        })
        return `${this.name} has a balance of $${totalIncome - totalExpenses}, $${totalIncome} in income and $${totalExpenses} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 5)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())