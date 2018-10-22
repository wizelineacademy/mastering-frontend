const bucket2 = {
  pieces: [],
  add(piece) {
    this.pieces.push(piece)
  },
  addAll(pieces) {
    pieces.forEach(piece => this.add(piece))
  }
}

bucket2.addAll([1, 2, 3])
bucket2.pieces // [1, 2, 3]
