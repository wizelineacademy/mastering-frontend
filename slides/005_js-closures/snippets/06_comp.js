const comp = (...fns) =>
  (...args) =>
    fns.reduceRight((res, fn) => [apply(fn, res)], args)[0]

const sumAndDouble = comp(a => a * 2, (a, b) => a + b)

sumAndDouble(3, 5) // 16
