"use strict";
let nome = "João";
console.log(nome);
//nome = 28
//numbers
let idade = 27;
console.log(idade);
let hobbies = ['Cozinhar', 'Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
//tuplas
let endereco = ['Av Ja fui lá', 23, 66093];
console.log(endereco);
//enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 1] = "Cinza";
    Cor[Cor["Verde"] = 2] = "Verde";
    Cor[Cor["Azul"] = 3] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
function meuNome() {
    return nome;
}
console.log(meuNome());
function soma(nA, nB) {
    return nA + nB;
}
console.log(soma(5, 4));
let somando;
somando = soma;
console.log(somando(5, 9));
let funcionario1 = {
    supervisores: ["Lena", "Glaucia"],
    ponto(hora) {
        return hora <= 8 ? "Ponto Normal" : "Fora do Horário!!!";
    }
};
console.log(funcionario1.supervisores[0]);
console.log(funcionario1.ponto(9));
