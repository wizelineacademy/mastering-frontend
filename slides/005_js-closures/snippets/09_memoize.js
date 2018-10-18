const memoize = f => {
  const memo = {}

  return (...args) => {
    const elem = memo[args]

    if (elem) {
      return elem
    }

    const result = apply(f, args)
    memo[args] = result
    return result
  }
}

const slowIdentity = x => {
  console.log('Searching...')
  return x
}

slowIdentity('Mr. Fantastico') // Searching... Mr. Fantastico
slowIdentity('Mr. Fantastico') // Searching... Mr. Fantastico

const memoSlowIdentity = memoize(slowIdentity)

memoSlowIdentity('Mr. Fantastico') // Searching... Mr. Fantastico
memoSlowIdentity('Mr. Fantastico') // Mr. Fantastico
