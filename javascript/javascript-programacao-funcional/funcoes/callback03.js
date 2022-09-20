const nums = [1,2,3,4,5,6,7,8,9]
const dobro = valor => valor*2

// console.log(nums.map(dobro))

const carrinho = [
    {nome: 'caneta', qtd: 10, preco: 7.99},
    {nome: 'impressora', qtd: 0, preco: 649.5},
    {nome: 'caderno', qtd: 4, preco: 17.1},
    {nome: 'lápis', qtd: 3, preco: 5.82},
    {nome: 'tesoura', qtd: 1, preco: 19.2}
]

const selectName = carrinho => carrinho.nome
const totalPrice = carrinho => carrinho.preco * carrinho.qtd

const nameItens = carrinho.map(selectName)
const priceItens = carrinho.map(totalPrice)

// console.log(nameItens, priceItens)

// por dentro do map
Array.prototype.meumap = function (callback){
    const novoArray = []
    for(let index = 0; index< this.length; index++){
        novoArray.push(callback(this[index], index, this))
    }
    return novoArray
}

const nameItensMyMap = carrinho.meumap(selectName)

console.log(nameItensMyMap)

