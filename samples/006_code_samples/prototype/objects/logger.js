const loggingInfo = require('./info')

function Logger () {
  this.statements = []
  this.log = function (file, caseNum) {
    console.log(`\n**********************`)
    console.log(`\nSCENARIO:\n\t${_getInfo('header', file, caseNum)}`)
    console.log(`\nDESCRIPTION:\n\t${_getInfo('dek', file, caseNum)}`)
    console.log(`\nRESULTS:`)
    this.statements.forEach(s => {
      console.log(`\t${s}`)
    })
    console.log(`\n**********************`)
  }
}

function _getInfo (type, file, caseNum) {
  return loggingInfo[file][caseNum][type]
}

module.exports = Logger
