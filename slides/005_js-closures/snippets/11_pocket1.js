const pocket1 = {
  things: [],
  add: function add(thing) {
    this.things.push(thing)
  },
  addAll: function addAll(things) {
    const self = this
    things.forEach(function (thing) {
      self.add(thing)
    })
  }
}

pocket1.addAll(['keys', 'phone', 'wallet'])
pocket1.things // ['keys', 'phone', 'wallet']
