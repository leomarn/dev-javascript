"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
const minhaFuncaoArrow = (numero1 = 10, numero2 = 10) => {
    let msg;
    if (numero1 > numero2) {
        msg = 'numero1 é maior';
    }
    else if (numero1 < numero2) {
        msg = 'numero2 é maior';
    }
    else {
        msg = 'são iguais';
    }
    console.log(msg);
};
minhaFuncaoArrow(1, 2);
//operador spread & rest
const numbers = [1, 10, 55, 78, 90, 102];
console.log(Math.max(...numbers));
const turmaA = ['maria', 'luiza', 'raimunda', 'vania'];
const turmab = ['miguel', 'jhonatan', 'sergio', 'luiz'];
const turmaC = [...turmaA, ...turmab];
console.log(turmaC);
// destructuring
//array
const [Name, Age, Phone] = ['leomar', 27, '9124324543'];
const pessoa = ['leomar', 27, '9124324543'];
const [pessoaName, pessoaAge, pessoaPhone] = pessoa;
//objeto
const item = {
    nome: 'SSD 480GB',
    preco: 200
};
const { nome: itemNome, preco: itemPreco } = item;
console.log(itemNome, itemPreco);
