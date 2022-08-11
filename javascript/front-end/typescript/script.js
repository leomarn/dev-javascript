function Classificar(idade,altura,peso) {
    //Verifica a idade e retorna a categoria
    this.getCategoria = function (){
        let categoria
        if(idade<12){
            categoria = "Infantil"
        }else if(idade<=20){
            categoria = "Juvenil"
        }else if(idade<=65){
            categoria = "Adulto"
        }else{
            categoria = "Idoso"
        }
        return categoria
    }
    //Calcula o IMC através da formula IMC = Peso / altura ^ 2 
    this.getIMC = function(){
        let IMC = peso/Math.pow(altura, 2)
        return IMC
    }
    //Verifica a faixa etária do IMC e retorna o Risco e Recomendações
    this.getResult = function(){
        let result
        if(this.getIMC()<20){
            result = "Risco: Muitas complicações de saúde como doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso.\
            \n\nRecomendações: Inclua carboidratos simples em sua dieta, além de proteínas indispensáveis para ganho de massa magra. Procure um profissional."
        }else if(this.getIMC()<24){
            result = "Risco: Seu peso está ideal para suas referências.\
            \n\nRecomendações: Mantenha uma dieta saudável e faça seus exames periódicos."
        }else if(this.getIMC()<29){
            result = "Risco: Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares.\
            \n\nRecomendações: Adote um tratamento baseado em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante"
        }else if(this.getIMC()<=35){
            result = "Risco: Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade.\
            \n\nRecomendações: Adote uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e um médico especialista (endócrino)."
        }else{
            result = "Risco: O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas.\
            \n\nRecomendações: Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino)."
        }
        return result
    }
}

let validador, nome, sexo, idade, altura, peso

/*Arrow Function: Validador de Número, onde num = valor inserido pelo usuário, lnum = limite a esquerda,
  rnum = a direita, text = texto para complementar a mensagem de erro*/
const validadorNumero = (num,lnum,rnum,text) => {
    //isNaN() verifica se o que foi inserido não é um número, ou se (lnum < num <= rnum) está fora dos limites
    if (isNaN(num) || !(num > lnum && num <= rnum)){
        return console.log(`Insira um valor de ${text} válido`)
    }else{
        return validador = false
    }
}

validador = true
while(validador){
    nome = prompt('Nome: ')
    if (!isNaN(nome/1) || typeof nome === "undefined" || nome.length < 2){
        console.log(`Insira um nome valido.`)
    }else{
        validador = false
    }
}

validador = true
while(validador){
    sexo = prompt('Sexo: Masculino "M" ou Feminino "F": ')
    //XOR (Ou exclusico) que compara se foi inserido conforme os parâmetros estabelecidos
    if (!((sexo != "M") != (sexo != "F"))){
        console.log(`Insira um nome valido.`)
    }else{
        validador = false
        if(sexo == "M"){
            sexo = "Masculino"
        }else{
            sexo = "Feminino"
        }
    }
}

//Enquanto não incluir um número, alerta o usuário que a entrada é invalida
validador = true
while(validador){
    idade = Number(prompt('Idade: '))
    validadorNumero(idade,0,120,'idade')
}

validador = true
while(validador){
    altura = Number(prompt('Altura: '))
    validadorNumero(altura,0,2,'altura')
}

validador = true
while(validador){
    peso = Number(prompt('Peso: '))
    validadorNumero(peso,0,200,'peso')
}

const pessoa = new Classificar(idade,altura,peso)

console.log(`
DIAGNOSTICO PRÉVIO
******************
Nome: ${nome}
Sexo: ${sexo}
Idade: ${idade}
Altura: ${altura}
Peso:  ${peso}
Categoria: ${pessoa.getCategoria()}

IMC Desejável: entre 20 e 24

Resultado IMC: ${pessoa.getIMC().toFixed(2)}

${pessoa.getResult()}
`)
