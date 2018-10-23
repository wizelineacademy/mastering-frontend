const apply = (fn, args) =>
  fn(...args)

sum(1, 2, 3) // 6
apply(sum, [1, 2, 3]) // 6
