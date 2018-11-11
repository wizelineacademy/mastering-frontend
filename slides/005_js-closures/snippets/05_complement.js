const complement = fn =>
  (...args) =>
    !apply(fn, args)

const willExplode = milesPerHour =>
  milesPerHour < 50

const areWeSafe = complement(willExplode)

willExplode(40) // true
areWeSafe(40) // false

const equal = (a, b) =>
  a === b

const different = complement(equal)

equal('Max Power', 'Homer Simpson') // false
different('Max Power', 'Homer Simpson') // true
