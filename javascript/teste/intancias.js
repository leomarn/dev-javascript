const instA = require('./instanciaA')
const instB = require('./instanciaA')

const instC = require('./instanciaB')()
const instD = require('./instanciaB')()

instA.inc()
instA.inc()

console.log(instA.count, instB.count)

instC.inc()
instC.inc()

console.log(instC.count, instD.count)
