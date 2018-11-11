const comp = (...fns) =>
  (...args) =>
    fns.reduceRight((res, fn) => [apply(fn, res)], args)[0]

const double = a =>
  2 * a

const sumAndDouble = comp(double, sum)

sumAndDouble(300, 30, 3) // 666
