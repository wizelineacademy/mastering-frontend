const incMaker = incBy =>
  n =>
    n + incBy

const inc3 = incMaker(3)
inc3(7) // 10
