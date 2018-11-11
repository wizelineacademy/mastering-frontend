const juxt = null
const getFirstName = partial(get2, 'fname')
const getLastName = partial(get2, 'lname')
const getNames = juxt(getFirstName, getLastName)
const person = {fname: 'Vincent', lname: 'Vega'}

getNames(person) // ['Vincent', 'Vega']
