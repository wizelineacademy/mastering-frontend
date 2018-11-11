const jayz = {problems: 99}

const get = (obj, prop) =>
  obj[prop]

get(jayz, 'problems') // 99

const flip = null

const get2 = flip(get)

get2('problems', jayz) // 99
