function sum(...xs) {
  return xs.reduce((a, b) => a + b, 0)
}

const sum = (...xs) =>
  xs.reduce((a, b) => a + b, 0)

sum(1, 2, 3) // 6
