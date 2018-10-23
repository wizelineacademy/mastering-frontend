const juxt = null
const getA = partial(get2, 'a')
const getB = partial(get2, 'b')
const getAB = juxt(getA, getB)
const obj = {a: 1, b: 2, c: 3, d: 4}

getAB(obj) // [1, 2]
