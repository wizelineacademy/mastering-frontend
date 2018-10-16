const general = [
  {
    header: `FILE: general, CASE: 0`,
    dek: `Behavior when assigning a variable's value, which holds an object, to another variable`
  },
  {
    header: `FILE: general, CASE: 1`,
    dek: `Copying an object into another variable using Object.assign()`
  },
  {
    header: `FILE: general, CASE: 2`,
    dek: `Functions as 'first-class' objects`
  },
  {
    header: `FILE: general, CASE: 3`,
    dek: `Functions behave like plain objs and can be assigned props`
  }
]

const prototype = [
  {
    header: `FILE: prototype, CASE: 0`,
    dek: `Object prototype, first approach. Prototype link when creating objects with Object.create()`
  },
  {
    header: `FILE: prototype, CASE: 1`,
    dek: `Mainstream rabbit example, prototype relationship between animal and rabbit.`
  },
  {
    header: `FILE: prototype, CASE: 2`,
    dek: `Can child objects affect all their siblings by modifying a prop on their parent?`
  },
  {
    header: `FILE: prototype, CASE: 3`,
    dek: `Dynamically assign parent. Citizens example.`
  },
  {
    header: `FILE: prototype, CASE: 4`,
    dek: `Functions as constructors.`
  },
  {
    header: `FILE: prototype, CASE: 5`,
    dek: `Functions as constructors quiz, part 1. Different creation scenarios with apparently the same result.`
  },
  {
    header: `FILE: prototype, CASE: 6`,
    dek: `Functions as constructors quiz, part 2. Actual difference between creating with 'new' and as the function's return statement`
  },
  {
    header: `FILE: prototype, CASE: 7`,
    dek: `What happens if a function constructor is called without 'new'?`
  },
  {
    header: `FILE: prototype, CASE: 8`,
    dek: `Polyfill example. Custom polyfill to String to remove letters a from a string`
  }
]

const classes = [
  {
    header: `FILE: classes, CASE: 0`,
    dek: `Classes usage demonstration. Looks like SOMEONE was right, or was he/she?`
  },
  {
    header: `FILE: classes, CASE: 1`,
    dek: `Classes syntax and its equivalent as function constructor`
  },
  {
    header: `FILE: classes, CASE: 2`,
    dek: `If a class is actually a function, can it be called?`
  }
]

module.exports = {
  general,
  prototype,
  classes
}
