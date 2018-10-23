const obj = {foo: 42}

const get = (obj, prop) =>
  obj[prop]

get(obj, 'foo') // 42

const flip = null

const get2 = flip(get)

get2('foo', obj) // 42
