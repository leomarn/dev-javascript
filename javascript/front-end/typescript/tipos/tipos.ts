let nome = "João"
console.log(nome)
//nome = 28

//numbers
let idade = 27

console.log(idade )

let hobbies: string[] = ['Cozinhar', 'Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)


//tuplas
let endereco: [string, number, number] = ['Av Ja fui lá', 23, 66093]
console.log(endereco)

//enum

enum Cor {
    Cinza = 1,
    Verde,
    Azul
}
let minhaCor: Cor = Cor.Verde

console.log(minhaCor)

function meuNome(): string {
    return nome
}

console.log(meuNome())

function soma(nA: number, nB: number): number {
    return nA+nB
}

console.log(soma(5,4))


let somando: (a:number, b:number) => number

somando = soma

console.log(somando(5,9))

type Funcionario = { supervisores: string[], ponto:(horas:number) => string}

let funcionario1: Funcionario = {
    supervisores: ["Lena", "Glaucia"],
        ponto(hora: number): string  {
            return hora <= 8 ? "Ponto Normal" : "Fora do Horário!!!"
        
    }

}
console.log(funcionario1.supervisores[0])
console.log(funcionario1.ponto(9))