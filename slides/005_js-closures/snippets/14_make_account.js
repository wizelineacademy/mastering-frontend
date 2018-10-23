const makeAccount = balance =>
  amount => {
    if (balance >= amount) {
      balance = balance - amount
      return balance
    }
    throw 'Insufficient funds'
  }

const withdraw = makeAccount(100)

withdraw(25) // 75
withdraw(25) // 50
withdraw(60) // Insufficient funds
withdraw(15) // 35
