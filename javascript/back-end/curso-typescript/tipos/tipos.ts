//string
let nome: string = 'Leomar'
console.log(nome)
// nome = 29

//numbers
let idade: number = 28
// idade = 'Pedro'
console.log(idade)

//boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

//tipos explícitos
let minhaIdade: any
minhaIdade = 27
console.log(typeof minhaIdade)
minhaIdade = '27'
console.log(typeof minhaIdade)

//arrays
let hobbies: any[] = ['Cozinhar', 'Praticar Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies.push(100, 200, 300)

console.log(hobbies)

//tuplas
let endereco: [string, number, number]= ['Av Principal', 90, 123]
console.log(endereco)
console.log(typeof endereco)

//enums
enum Cor {
    Cinza, //0
    Verde, //1
    Azul //2
}

let minhaCor = Cor.Verde
console.log(minhaCor)

//any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019}
console.log(carro)

//funções
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(6,7))

//tipo função
let calculo: (numeroA: number, numeroB: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5,6))


// objetos
let usuario: {nome: string, idade: number} = {
    nome: 'Leomar',
    idade: 29
}

// usuario = {}
// usuario = {
//     name: 'Leo',
//     age: 39
// }

//Alias
type Funcionario = { supervisores: string[], baterPonto: (horas: number) => string }

let funcionario1: Funcionario = {
    supervisores: ['leomar', 'pedro', 'joão'],
    baterPonto(horas){
        return horas<=8 ? 'ponto normal' : 'fora do horario'
    }
}

let funcionario2: Funcionario = {
    supervisores: ['ana', 'maria', 'tereza'],
    baterPonto(horas){
        return horas<=8 ? 'ponto normal' : 'fora do horario'
    }
}

console.log(funcionario1.supervisores[0],funcionario1.baterPonto(8))


//Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)

//never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 9,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if( this.preco <= 0){
            falha('Preço inválido')
        }
    }
}

produto.validarProduto()