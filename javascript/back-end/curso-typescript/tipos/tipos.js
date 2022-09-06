"use strict";
//string
let nome = 'Leomar';
console.log(nome);
// nome = 29
//numbers
let idade = 28;
// idade = 'Pedro'
console.log(idade);
//boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
//tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = '27';
console.log(typeof minhaIdade);
//arrays
let hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies.push(100, 200, 300);
console.log(hobbies);
//tuplas
let endereco = ['Av Principal', 90, 123];
console.log(endereco);
console.log(typeof endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul"; //2
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(6, 7));
//tipo função
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: 'Leomar',
    idade: 29
};
let funcionario1 = {
    supervisores: ['leomar', 'pedro', 'joão'],
    baterPonto(horas) {
        return horas <= 8 ? 'ponto normal' : 'fora do horario';
    }
};
let funcionario2 = {
    supervisores: ['ana', 'maria', 'tereza'],
    baterPonto(horas) {
        return horas <= 8 ? 'ponto normal' : 'fora do horario';
    }
};
console.log(funcionario1.supervisores[0], funcionario1.baterPonto(8));
//Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
//never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 9,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
