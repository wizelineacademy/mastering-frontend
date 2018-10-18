const complement = fn =>
  (...args) =>
    !apply(fn, args)

const isNegative = num =>
  num < 0

const isNatural = complement(isNegative)

isNegative(-4) // true
isNatural(-4) // false

const equal = (a, b) =>
  a === b

const different = complement(equal)

equal(5, 5)) // true
different(5, 5) // false
