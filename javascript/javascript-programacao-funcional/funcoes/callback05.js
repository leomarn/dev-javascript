const carrinho = [
    {nome: 'caneta', qtd: 10, preco: 7.99, fragil: true},
    {nome: 'impressora', qtd: 1, preco: 649.5, fragil: true},
    {nome: 'caderno', qtd: 4, preco: 17.1, fragil: false},
    {nome: 'lápis', qtd: 3, preco: 5.82, fragil: false},
    {nome: 'tesoura', qtd: 1, preco: 19.2, fragil: true}
]

Array.prototype.meureduce = function (callback, inicial) {
    let acumulador = inicial
    for(let index = 0; index < this.length; index++) {
        if (!acumulador && index === 0) {
            acumulador = this[index]
        } else {
            acumulador = callback(acumulador, this[index], index, this)
        }
    }
    return acumulador
}

const frageis = comparar => comparar.fragil === true
const precoTotalFrageis = item => item.qtd* item.preco
const mediaGeral = (acumulador,elemento) => {
    const novaQtd = acumulador.qtd+1
    const novoTotal = acumulador.total+elemento
    return {
        qtd: novaQtd,
        total: novoTotal,
        media: novoTotal/novaQtd
    }
}
const mediaInicial = {qtd: 0, total: 0, media: 0}

const mediaTotal = carrinho
                        .filter(frageis)
                        .map(precoTotalFrageis)
                        .meureduce(mediaGeral,mediaInicial)

console.log(mediaTotal.media)


