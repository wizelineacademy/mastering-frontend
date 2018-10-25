const yargs = require('yargs')
const general = require('./general')
const prototype = require('./prototype')
const classes = require('./classes')
const allowedParams = ['file', 'case']

function executeFunction () {
  const params = _parseParams(yargs.argv)
  const toExecute = _getFunctToExecute(params.file)
  toExecute[params.case]()
}

function _parseParams (params) {
  let toReturn = {}

  for (let param in params) {
    if (allowedParams.includes(param)) {
      toReturn[param] = params[param]
    }
  }

  return toReturn
}

function _getFunctToExecute (paramVal) {
  switch (paramVal) {
    case 'general':
      return general
    case 'prototype':
      return prototype
    case 'classes':
      return classes
    default:
      break
  }
}

executeFunction()
