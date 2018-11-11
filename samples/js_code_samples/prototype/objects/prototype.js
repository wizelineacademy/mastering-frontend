const Logger = require('../../utils/logger')

/**
 * CASE 0: Quiz about object passing thru variables vs
 * Object.create()
*/
function objPassingVsObjCreate () {
  const dog = {
    color: 'white'
  }

  const firulais = dog

  const cat = {
    color: 'black'
  }

  const misifus = Object.create(cat)

  const dogColor = dog.color
  const firulaisColor = firulais.color
  const catColor = cat.color
  const misifusColor = misifus.color
  const dogHasColor = dog.hasOwnProperty('color')
  const firulaisHasColor = firulais.hasOwnProperty('color')
  const catHasColor = cat.hasOwnProperty('color')
  const misifusHasColor = misifus.hasOwnProperty('color')

  // log results
  const logger = new Logger()
  logger.statements = [
    `dog's color: ${dogColor}`,
    `Firulais' color: ${firulaisColor}`,
    `cat's color: ${catColor}`,
    `Misifus' color: ${misifusColor}`,
    `does dog have prop color? ${dogHasColor}`,
    `does Firulais have prop color? ${firulaisHasColor}`,
    `does cat have prop color? ${catHasColor}`,
    `does Misifus have prop color? ${misifusHasColor}`
  ]
  logger.log('prototype', 0)
}

/**
 * CASE 1: Mainstream animal -> rabbit -> specific rabbit example
 * to explain prototype inheritance and behavior delegation.
*/
function mainstreamRabbitExample () {
  const animal = {
    eat: function () {
      return `Look, ma! I'm an animal that eats!`
    }
  }

  const rabbit = Object.create(animal)
  rabbit.jump = function () {
    return `Look, ma! I'm not only an animal, but a rabbit that jumps!`
  }

  const grayRabbit = Object.create(rabbit)
  grayRabbit.jump = function () {
    return `Look, ma! I'm a gray rabbit jumping!`
  }

  const babyGrayRabbit = Object.create(grayRabbit)

  let animalEating = ''
  let rabbitEating = ''
  let animalJumping = ''
  let rabbitJumping = ''
  let grayRabbitEating = ''
  let grayRabbitJumping = ''
  let babyGrayRabbitEating = ''
  let babyGrayRabbitJumping = ''

  try {
    animalEating = animal.eat()
  } catch (error) {
    animalEating = error
  }

  try {
    rabbitEating = rabbit.eat()
  } catch (error) {
    rabbitEating = error
  }

  try {
    animalJumping = animal.jump()
  } catch (error) {
    animalJumping = error
  }

  try {
    rabbitJumping = rabbit.jump()
  } catch (error) {
    rabbitJumping = error
  }

  try {
    grayRabbitEating = grayRabbit.eat()
  } catch (error) {
    grayRabbitEating = error
  }

  try {
    grayRabbitJumping = grayRabbit.jump()
  } catch (error) {
    grayRabbitJumping = error
  }

  try {
    babyGrayRabbitEating = babyGrayRabbit.eat()
  } catch (error) {
    babyGrayRabbitEating = error
  }

  try {
    babyGrayRabbitJumping = babyGrayRabbit.jump()
  } catch (error) {
    babyGrayRabbitJumping = error
  }

  const logger = new Logger()
  logger.statements = [
    `Animal eating: ${animalEating}`,
    `Rabbit eating: ${rabbitEating}`,
    `Animal jumping: ${animalJumping}`,
    `Rabbit jumping: ${rabbitJumping}`,
    `Gray rabbit eating: ${grayRabbitEating}`,
    `Gray rabbit jumping: ${grayRabbitJumping}`,
    `Baby gray rabbit eating: ${babyGrayRabbitEating}`,
    `Baby gray rabbit jumping: ${babyGrayRabbitJumping}`
  ]
  logger.log('prototype', 1)
}

/**
 * CASE 2: Can child objects affect all of their siblings by writing props on their parents?
*/
function childAffectingSiblings () {
  const cat = {
    color: 'black'
  }

  const misifus = Object.create(cat)
  const figaro = Object.create(cat)

  misifus.color = 'white'

  const catColor = cat.color
  const misifusColor = misifus.color
  const figaroColor = figaro.color
  const catHasColor = cat.hasOwnProperty('color')
  const misifusHasColor = misifus.hasOwnProperty('color')
  const figaroHasColor = figaro.hasOwnProperty('color')

  // log results
  const logger = new Logger()
  logger.statements = [
    `Cat's color: ${catColor}`,
    `Misifus' color: ${misifusColor}`,
    `Figaro's color: ${figaroColor}`,
    `does cat have color? ${catHasColor}`,
    `does misifus have color? ${misifusHasColor}`,
    `does figaro have color? ${figaroHasColor}`
  ]
  logger.log('prototype', 2)
}

/**
 * CASE 3: Dynamically change an object's parent.
 * This function demonstrates that you can change dynamically an object's
 * parent based on conditions
*/
function dynamicallyAssignParent () {
  const usCitizen = {
    sayHi: function () {
      return `Hello, buddy!`
    }
  }
  const mexicanCitizen = {
    sayHi: function () {
      return `¡Hola, amigo!`
    }
  }

  const randomCitizen1 = {
    nationality: 'mexican'
  }

  const randomCitizen2 = {
    nationality: 'american'
  }

  function assignParent (citizen) {
    if (citizen.nationality === 'mexican') {
      Object.setPrototypeOf(citizen, mexicanCitizen)
    } else {
      Object.setPrototypeOf(citizen, usCitizen)
    }
  }

  assignParent(randomCitizen1)
  assignParent(randomCitizen2)

  const randomCitizen1Salute = randomCitizen1.sayHi()
  const randomCitizen2Salute = randomCitizen2.sayHi()

  // log results
  const logger = new Logger()
  logger.statements = [
    `Random citizen 1 says hi: ${randomCitizen1Salute}`,
    `Random citizen 2 says hi: ${randomCitizen2Salute}`
  ]
  logger.log('prototype', 3)
}

/**
 * CASE 4: Functions as constructors.
 * This function demonstrates what happens when you call a function with the
 * `new` operand. In this case, the function returns a newly created object.
 * Anything that is assigned as a property of `this` is bound to the returned object.
*/
function functionAsConstructor () {
  function Animal () {
    this.eat = function () {
      return `Look, ma! I'm an animal that eats!`
    }
  }

  const rabbit = new Animal()
  const rabbitEating = rabbit.eat()

  // log result
  const logger = new Logger()
  logger.statements = [
    `Rabbit says while eating: ${rabbitEating}`
  ]
  logger.log('prototype', 4)
}

/**
 * CASE 5: Functions as constructors quiz, part 1.
 * This function shows that, apparently, it is the same to create an object
 * using the `new` operand, or simply returning an object in the function's return
*/
function functionAsConstructorQuizPart1 () {
  function AnimalAsConstructor () {
    this.eat = function () {
      return `Look, ma! I'm an animal, built with a constructor, that eats!`
    }
  }

  function AnimalAsPlainObjectReturned () {
    return {
      eat: function () {
        return `Look, ma! I'm an animal, returned as a plain object, that eats!`
      }
    }
  }

  // build object using the `new` operand:
  const rabbit1 = new AnimalAsConstructor()

  // build object using the function's return statement:
  const rabbit2 = AnimalAsPlainObjectReturned() // please note, no `new` here.

  // log results
  const logger = new Logger()
  logger.statements = [
    `rabbit 1 eating: ${rabbit1.eat()}`,
    `rabbit 2 eating: ${rabbit2.eat()}`
  ]
  logger.log('prototype', 5)
}

/**
 * CASE 6: Functions as constructors quiz part 2.
 * This function shows the actual difference between creating an object with `new`
 * and simply returning an object in the function's return statemeng.
*/
function functionAsConstructorQuizPart2 () {
  function AnimalAsConstructor () {
    this.eat = function () {
      return `Look, ma! I'm an animal, built with a constructor, that eats!`
    }
  }

  function AnimalAsPlainObjectReturned () {
    return {
      eat: function () {
        return `Look, ma! I'm an animal, returned as a plain object, that eats!`
      }
    }
  }

  // please pay attention to these very important steps!
  const jumperAnimal = {
    jump: function () {
      return `Look, ma! I'm an animal that jumps!`
    }
  }
  AnimalAsConstructor.prototype = jumperAnimal

  AnimalAsPlainObjectReturned.prototype = jumperAnimal

  // build object using the `new` operand:
  const rabbit1 = new AnimalAsConstructor()

  // build object using the function's return statement:
  const rabbit2 = AnimalAsPlainObjectReturned() // please note, no `new` here.

  let rabbit1Eating = ''
  let rabbit2Eating = ''
  let rabbit1Jumping = ''
  let rabbit2Jumping = ''

  // make rabbit 1 eat
  try {
    rabbit1Eating = rabbit1.eat()
  } catch (error) {
    rabbit1Eating = error
  }

  // make rabbit 2 eat
  try {
    rabbit2Eating = rabbit2.eat()
  } catch (error) {
    rabbit2Eating = error
  }

  // make rabbit 1 jump
  try {
    rabbit1Jumping = rabbit1.jump()
  } catch (error) {
    rabbit1Jumping = error
  }

  // make rabbit 2 jump
  try {
    rabbit2Jumping = rabbit2.jump()
  } catch (error) {
    rabbit2Jumping = error
  }

  // log results
  const logger = new Logger()
  logger.statements = [
    `rabbit 1 eating: ${rabbit1Eating}`,
    `rabbit 2 eating: ${rabbit2Eating}`,
    `rabbit 1 jumping: ${rabbit1Jumping}`,
    `rabbit 2 jumping: ${rabbit2Jumping}`
  ]
  logger.log('prototype', 6)
}

/**
 * CASE 7: What happens if a function meant to be a constructor is called without `new`?
*/
function functionAsConstructorCalledWithoutNew () {
  function AnimalAsConstructor () {
    console.log(`I have nothing to do with 'new'`)
    this.eat = function () {
      return `Look, ma! I'm an animal, built with a constructor, that eats!`
    }
  }

  // log result
  const logger = new Logger()
  logger.statements = [
    `Function constructor called without new says: ${AnimalAsConstructor()}`
  ]
  logger.log('prototype', 7)
}

/**
 * CASE 8: Polyfills example.
 * This function will add a custom polyfill to the String built-in constructor.
*/
function polyfillExample () {
  function replaceLetterA (str) {
    return this.replace('A', '').replace('a', '')
  }

  String.prototype.replaceLetterA = String.prototype.replaceLetterA || replaceLetterA

  const replaced = 'abcABC'.replaceLetterA()

  // log result
  const logger = new Logger()
  logger.statements = [
    `Replacing all letters A from word: 'abcABC':`,
    `${replaced}`
  ]
  logger.log('prototype', 8)
}

module.exports = [
  objPassingVsObjCreate,
  mainstreamRabbitExample,
  childAffectingSiblings,
  dynamicallyAssignParent,
  functionAsConstructor,
  functionAsConstructorQuizPart1,
  functionAsConstructorQuizPart2,
  functionAsConstructorCalledWithoutNew,
  polyfillExample
]
