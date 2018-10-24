const Logger = require('../utils/logger')
/**
 * CASE: 0 - Quiz about async behavior
 * This function shows how the event loop behaves
 * when it has async operations in the flow.
*/
function asyncBehavior () {
  let rabbitColor

  // set time out of 1 second
  setTimeout(() => {
    rabbitColor = 'white'
  }, 1000)

  console.log(`The rabbit's color is: ${rabbitColor}`)
}

module.exports = [
  asyncBehavior
]
