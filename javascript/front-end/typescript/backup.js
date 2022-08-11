const question = []

function Question(ultraconservador, conservador, dinamico, arrojado){
    return{
        ultraconservador,
        conservador,
        dinamico,
        arrojado
    }
}

question[1] = new Question(0.3,0.7,0,0)
question[2] = new Question(0.6,0.4,0,0)

const defArrayMedias = [
    (question[1].ultraconservador + question[2].ultraconservador) / 2,
    (question[1].conservador + question[2].conservador) / 2,
    (question[1].dinamico + question[2].dinamico) / 2,
    (question[1].arrojado + question[2].arrojado) / 2
]
console.log(defArrayMedias)

/*O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, 
  resultando num único valor de retorno. (valor anterior, valor atual) => Math.max(valor anterior, valor atual), acumulador
  Math.max retorna o maior dos números passados como argumentos...
*/
let maxTipo = defArrayMedias.reduce((a, b) => Math.max(a, b), 0)

for (let i in defArrayMedias) {
    if (maxTipo === defArrayMedias[i]) {
        tipoInvestidor = Number(i) + 1
    }
}
console.log(tipoInvestidor)

switch (tipoInvestidor) {
    case 1: tipoInvestidor = `Ultraconservador`
        break;
    case 2: tipoInvestidor = `Conservador`
        break;
    case 3: tipoInvestidor = `Dinamico`
        break;
    case 4: tipoInvestidor = `Arrojado`
        break;

}

console.log(tipoInvestidor)

