const incMaker = incBy =>
  n =>
    n + incBy

const inc6 = incMaker(6)
inc6(12) // 18
