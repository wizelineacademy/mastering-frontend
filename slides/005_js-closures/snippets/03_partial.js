const partial = (fn, ...args) =>
  (...moreArgs) =>
    apply(fn, args.concat(moreArgs))

const add6 = partial(sum, 6)
add6(6, 6) // 18

const add12 = partial(sum, 6, 6)
add12(6) // 18
