const question = []
let tipoInvestidor, perfil
/*
     *** Função construtora das porcentagem das perguntas  *** 
*/
function Question(ultraconservador, conservador, dinamico, arrojado) {
    return {
        ultraconservador,
        conservador,
        dinamico,
        arrojado
    }
}
/*
     *** Função que define que tipo de consumidor é, passando como parâmetro o array "defArrayMedias"  *** 
*/
const defTipoInvestidor = (array) => {

    let numArrayMax = Math.max(...array), arrayIndice

    //Varre o vetor e retorna o índice em que o "numArrayMax" se encontra
    arrayIndice = array.indexOf(numArrayMax) + 1

    switch (arrayIndice) {
        case 1: return `Ultraconservador`
            break;
        case 2: return `Conservador`
            break;
        case 3: return `Dinâmico`
            break;
        case 4: return `Arrojado`
            break;
    }
}
/*
     ******** início: Inclusão de valores externos  ******** 
*/
//Atribui à variável entrada a string passada e separa tornando-a um array
let entrada = (prompt("Insira as informações do investidor seguindo o padrão (nome, sexo, idade, renda): ")).split(", ")

// declaração das variáveis e definição de valores a partir da string de entrada
const nome = entrada[0], sexo = entrada[1], idade = entrada[2], renda = entrada[3]

/*
     ******** início: Perguntas 1 e 2  ******** 
*/
//Pergunta 1
const question1 = Number(prompt("\
    Você tem formação na área financeira?\n\
    1. Sim, sem experiência\n\
    2. Sim, com experiência\n\
    3. Não, mas tenho experiência\n\
    4. Não, com pouca experiência\n\
    5. Não, e não tenho experiência\n\
    Resposta: "))

switch (question1) {
    //Ordem % (ultraconservador, conservador, dinamico, arrojado)
    //40% conservador, 60% dinâmico
    case 1: question[1] = new Question(0, 0.10, 0.90, 0)
        break;
    //40% dinâmico, 60% arrojado
    case 2: question[1] = new Question(0, 0, 0.35, 0.65)
        break;
    //50% dinâmico, 50% arrojado
    case 3: question[1] = new Question(0, 0, 0.77, 0.23)
        break;
    //60% conservador, 40% dinâmico
    case 4: question[1] = new Question(0, 0.64, 0.36, 0)
        break;
    //60% ultraconservador, 40% conservador
    case 5: question[1] = new Question(0.75, 0.25, 0, 0)
        break;
}

//Pergunta 2
const question2 = Number(prompt("\
    Qual produto você conhece?\n\
    1. Poupança, depósito a prazo\n\
    2. Tesouro Direto, renda variável\n\
    3. Produtos 1 e 2\n\
    4. Nunca investiu, mas conheço alguns produtos\n\
    5. Nunca investi e não conheço nenhum\n\
    Resposta: "))

switch (question2) {
    //Ordem % (ultraconservador, conservador, dinamico, arrojado)
    //60% Ultraconservador, 40% conservador
    case 1: question[2] = new Question(0.6, 0.4, 0, 0)
        break;
    //40% dinâmico, 60% arrojado
    case 2: question[2] = new Question(0, 0, 0.4, 0.6)
        break;
    //30% dinâmico, 70% arrojado
    case 3: question[2] = new Question(0, 0, 0.22, 0.78)
        break;
    //70% conservador, 30% dinâmico
    case 4: question[2] = new Question(0, 0.73, 0.27, 0)
        break;
    //60% ultraconservador, 40% conservador
    case 5: question[2] = new Question(0.6, 0.4, 0, 0)
        break;
}

//Define as médias de cada % e armazena no array
const media = (a, b) => (a + b) / 2
const defArrayMedias = [
    media(question[1].ultraconservador, question[2].ultraconservador),
    media(question[1].conservador, question[2].conservador),
    media(question[1].dinamico, question[2].dinamico),
    media(question[1].arrojado, question[2].arrojado)]

tipoInvestidor = defTipoInvestidor(defArrayMedias)

//Operador ternário que define o tipo de investidor
tipoInvestidor == 'Ultraconservador' || tipoInvestidor == 'Conservador' ? perfil = 'Renda fixa' : perfil = 'Renda variável'

console.log(`
    SIMULADOR DE INVESTIMENTO

    Nome: ${nome}
    Sexo: ${sexo}
    Idade: ${idade}
    Renda Mensal: ${renda}
    Perfil do Investidor: ${tipoInvestidor}
    Sugestão de investimento: ${perfil}`)
/*
     ******** início: Simulação de Investimento  ******** 
*/
//Função que torna percentagem
const percentagem = (a) => a / 100
//Função que formata as entradas para US
const convertUS = (entrada) => entrada.replace('R$', '').replace(' ', '').replace('.', '').replace(',', '.')
//Função que converte para BRL
const toBRL = (value) => Number(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

if (perfil == 'Renda fixa') {

    let capital, juros, tempoDeInvestimento, juroSimples, juroComposto, lucroPossivelJS, lucroPossivelJC, rentabilidadeJS,
        rentabilidadeJC, taxaJS, taxaJC, inflacao

    capital = convertUS(prompt("Valor que irá investir: "))
    juros = percentagem(Number(prompt("Informe a taxa de juros (consultar juros atual da Poupança e taxa SELIC): ")))
    tempoDeInvestimento = Number(prompt("Quanto tempo pretende deixar o capital investido (Inserir em meses): "))
    inflacao = percentagem(Number(prompt("Informe a taxa de inflacão: ")))

    //Cálculo jurus símples, percentual de lucro e rentabilidade
    juroSimples = capital * juros * tempoDeInvestimento
    lucroPossivelJS = juroSimples.toFixed(2)
    taxaJS = ((1 + (lucroPossivelJS / capital)) / (1 + inflacao) - 1)
    rentabilidadeJS = (capital * taxaJS).toFixed(2)

    //Cálculo jurus composto, percentual de lucro e rentabilidade
    juroComposto = capital * Math.pow((1 + juros), tempoDeInvestimento)
    lucroPossivelJC = (juroComposto - capital).toFixed(2)
    taxaJC = (1 + (lucroPossivelJC / capital)) / (1 + inflacao) - 1
    rentabilidadeJC = (capital * taxaJC).toFixed(2)
 
    console.log(`
    - Simulação de investimento -

    Com juros simples
    Lucro possível: ${toBRL(lucroPossivelJS)}
    Rentabilidade Real: ${toBRL(rentabilidadeJS)}

    Com juros compostos
    Lucro possível: ${toBRL(lucroPossivelJC)}
    Rentabilidade Real: ${toBRL(rentabilidadeJC)}`)
} else {
    let valorAcoesMC, valorAcoesMV, qtdAcoes, juro, lucroPossivel

    valorAcoesMC = prompt("Valor da Ação no momento da compra - inserir o valor da ação que pretende comprar: ")
    valorAcoesMC = convertUS(valorAcoesMC)

    valorAcoesMV = prompt("Valor da Ação no momento da venda - inserir o valor da ação no momento que pretende vender: ")
    valorAcoesMV = convertUS(valorAcoesMV)

    qtdAcoes = Number(prompt("Quantidade de ações - quantas ações comprou ou pretende comprar: "))
    //Cálculo percentual de lucro
    juro = (valorAcoesMV / valorAcoesMC) * 100 - 100
    //Para obter o valor do lucro basta multiplicar (valor da acão anterior)*(percentual de lucro)*(quantidade de ações)
    lucroPossivel = (valorAcoesMC * (percentagem(juro)) * qtdAcoes).toFixed(2)

    console.log(`
    - Simulação de investimento -

    Lucro possível: ${toBRL(lucroPossivel)}`)
}