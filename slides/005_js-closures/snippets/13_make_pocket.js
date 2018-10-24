const makePocket = () => {
  const things = []

  const add = thing =>
    things.push(thing)

  const addAll = things =>
    things.forEach(thing => add(thing))

  const getContent = () =>
    things.slice()

  return {add, addAll, getContent}
}

const pocket = makePocket()
pocket.addAll(['keys', 'phone', 'wallet'])
pocket.getContent() // ['keys', 'phone', 'wallet']

const things = pocket.getContent()
things = []
pocket.getContent() // ['keys', 'phone', 'wallet']
