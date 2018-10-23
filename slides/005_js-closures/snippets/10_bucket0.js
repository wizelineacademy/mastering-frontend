const bucket1 = {
  pieces: [],
  add: function add(piece) {
    this.pieces.push(piece)
  },
  addAll: function addAll(pieces) {
    pieces.forEach(function (piece) {
      this.add(piece)
    })
  }
}

bucket1.addAll([1, 2, 3])
bucket1.pieces // ?
