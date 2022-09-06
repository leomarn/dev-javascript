class Data { 
    //público por padrão
    dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(30,12,1992)

console.log(aniversario)


class DataEsperta { 
    constructor(public dia: number, public mes: number, public ano: number){}
}

const aniversarioEsperto = new DataEsperta(30,12,1992)

console.log(aniversarioEsperto)


class Produto {
    constructor(
        public nome: string, 
        public preco: number, 
        public desconto: number = 0) {

    }
    
    resumo(): string {
        return `O Produto: ${this.nome} custa: R$${this.preco.toFixed(2)} e com desconto R$${this.desc().toFixed(2)}`
    }

    desc(): number {
        return this.preco * (1-this.desconto)
    }
}

const produto1 = new Produto('uva', 10)
const produto2 = new Produto('maçã', 5, 0.2)

console.log(produto2.resumo())

//modificadores de acesso
class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string,
        private velocidadeMaxima: number){


    }
    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 
              && novaVelocidade <= this.velocidadeMaxima
        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }
    public frear(): number {
        return this.alterarVelocidade(-5)
    }

}

const carro1 = new Carro('Ford', 'Ka', 185)

//herança
class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }
    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}
const carro2 = new Ferrari('F4', 320)

//getters & setters
class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <= 120){
            this._idade = valor
        }
    }

}

//Atributos e métodos estáticos

class Matematica {
    static PI: number = 3.14

    static areaCirc(raio: number): number {
        return Matematica.PI * Math.pow(raio,2)
    }
}
console.log(Matematica.areaCirc(4))

//classes abstratas
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((acumulador, atual) => acumulador+atual)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((acumulador, atual) => acumulador*atual)
    }
}


let calculo1 = new Soma
calculo1.executar(1,2,3,4,5)
console.log(calculo1.getResultado())

let calculo2 = new Multiplicacao
calculo2.executar(1,2,3,4,5)
console.log(calculo2.getResultado())

//construtor Privado & Singleton
class Unico {
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

console.log(Unico.getInstance().agora())

//Somente leitura
class Aviao {
    public readonly modelo: string

    constructor(modelo: string, 
        public readonly prefixo: string){
            this.modelo = modelo
        }
}
const turboHelice = new Aviao(`TU-144`, `PT-ABC`)
console.log(turboHelice)