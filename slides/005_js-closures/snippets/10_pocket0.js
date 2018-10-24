const pocket1 = {
  things: [],
  add: function add(thing) {
    this.things.push(thing)
  },
  addAll: function addAll(things) {
    things.forEach(function (thing) {
      this.add(thing)
    })
  }
}

pocket1.addAll(['keys', 'phone', 'wallet'])
pocket1.things // ?
