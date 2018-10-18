const partial = (fn, ...args) =>
  (...moreArgs) =>
    apply(fn, args.concat(moreArgs))

const add20 = partial(sum, 20)
add20(3) // 23

const add30 = partial(sum, 15, 15)
add30(3, 4) // 37
