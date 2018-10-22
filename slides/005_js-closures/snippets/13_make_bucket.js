const makeBucket = () => {
  const pieces = []

  const add = piece =>
    pieces.push(piece)

  const addAll = pieces =>
    pieces.forEach(piece => add(piece))

  const getPieces = () =>
    pieces.slice()

  return {add, addAll, getPieces}
}

const bucket = makeBucket()
bucket.addAll([1, 2, 3])
bucket.getPieces() // [1, 2, 3]

const pieces = bucket.getPieces()
pieces = []
bucket.getPieces() // [1, 2, 3]
