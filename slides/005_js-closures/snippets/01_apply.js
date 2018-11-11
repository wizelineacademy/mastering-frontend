const apply = (fn, args) =>
  fn(...args)

sum(6, 6, 6) // 18
apply(sum, [6, 6, 6]) // 18
