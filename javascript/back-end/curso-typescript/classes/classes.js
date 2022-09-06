"use strict";
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(30, 12, 1992);
console.log(aniversario);
class DataEsperta {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(30, 12, 1992);
console.log(aniversarioEsperto);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `O Produto: ${this.nome} custa: R$${this.preco.toFixed(2)} e com desconto R$${this.desc().toFixed(2)}`;
    }
    desc() {
        return this.preco * (1 - this.desconto);
    }
}
const produto1 = new Produto('uva', 10);
const produto2 = new Produto('maçã', 5, 0.2);
console.log(produto2.resumo());
//modificadores de acesso
class Carro {
    constructor(marca, modelo, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
//herança
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const carro2 = new Ferrari('F4', 320);
//getters & setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
//Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * Math.pow(raio, 2);
    }
}
Matematica.PI = 3.14;
console.log(Matematica.areaCirc(4));
//classes abstratas
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((acumulador, atual) => acumulador + atual);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((acumulador, atual) => acumulador * atual);
    }
}
let calculo1 = new Soma;
calculo1.executar(1, 2, 3, 4, 5);
console.log(calculo1.getResultado());
let calculo2 = new Multiplicacao;
calculo2.executar(1, 2, 3, 4, 5);
console.log(calculo2.getResultado());
//construtor Privado & Singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
//Somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao(`TU-144`, `PT-ABC`);
console.log(turboHelice);
