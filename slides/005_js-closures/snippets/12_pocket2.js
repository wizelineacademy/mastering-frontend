const pocket2 = {
  things: [],
  add(thing) {
    this.things.push(thing)
  },
  addAll(things) {
    things.forEach(thing => this.add(thing))
  }
}

pocket2.addAll(['keys', 'phone', 'wallet'])
pocket2.things // ['keys', 'phone', 'wallet']
