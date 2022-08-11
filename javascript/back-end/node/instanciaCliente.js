const moduluA = require('./instanciaUnica')
const moduluB = require('./instanciaUnica')

moduluA.inc()
moduluA.inc()

console.log(moduluA.valor,moduluB.valor)




const moduloC = require('./instanciaNova')()
const moduloD = require('./instanciaNova')()

moduloC.inc()
moduloC.inc()

console.log(moduloC.valor, moduloD.valor)

