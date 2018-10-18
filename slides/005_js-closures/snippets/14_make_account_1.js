const account = makeAccount(100)
account.withdraw(50) // 50
account.withdraw(60) // Insufficient funds
account.deposit(40) // 90
account.withdraw(60) // 30
