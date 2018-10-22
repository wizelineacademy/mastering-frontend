const account = makeAccount(100, 'secret password')
account.withdraw('secret password', 40) // 60
account.deposit('some other password', 50) // Incorrect password
