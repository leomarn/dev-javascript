const carrinho = [
    {nome: 'caneta', qtd: 10, preco: 7.99},
    {nome: 'impressora', qtd: 0, preco: 649.5},
    {nome: 'caderno', qtd: 4, preco: 17.1},
    {nome: 'lápis', qtd: 3, preco: 5.82},
    {nome: 'tesoura', qtd: 1, preco: 19.2}
]

// filter por dentro
Array.prototype.meufilter = function (callback) {
    const novoArray = []
    for(let index = 0; index < this.length; index++){
        if(callback(this[index],index, this)){
            novoArray.push(this[index])
        }
    }
    return novoArray
}

const qtdMaiorQueZero = valor => valor.qtd > 0

console.log(carrinho.meufilter(qtdMaiorQueZero))