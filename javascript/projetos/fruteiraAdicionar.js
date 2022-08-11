//Vairáveis globais
let kgCondicaoAtacado = 5, 
    addFruta = true, 
    i=0,
    validador,
    fruta = []

//Função construtora #01, inclui no objeto as variaveis de nome, kg, preço no atacado e varejo.
function Compra(fruta, kg, kgVarejo, kgAtacado) {
    return {
        fruta,
        kg,
        kgVarejo,
        kgAtacado,
        //Função que retorna o valor da fruta, com kg total se for em varejo ou atacado.
        valorCompra(){
            let valorfruta
            if(kg <= kgCondicaoAtacado){
                valorfruta = kg*kgVarejo
            }else{
                valorfruta = kg*kgAtacado
            }
            return valorfruta
        },
    }
}

//Função validadora das entradas, se não for número ou se "undefined", alerta o usuário
const validadorNumero = (x) => {
    if (isNaN(x) || typeof x === "undefined"){
        return console.log(`Insira um valor válido`)
    }else{
        return validador = false
    }
}

//A cada interação, pergunta se o usuário quer adicionar uma fruta, se a entrada for "S" ou "s"
//solicita os dados da fruta, para qualquer valor diferente, reconhece como "N", e sai do laço.
while(addFruta){
    addFruta = prompt('Deseja adicionar uma fruta? SIM = S NÃO = N')
    if(addFruta==`S` || addFruta== `s`){
        addFruta =true
        validador = true
        //Enquanto não incluir uma string, alerta o usuário que a entrada é invalida
        while(validador){
            nome = prompt('Nome: ')
            if (!isNaN(nome/1) || typeof nome === "undefined"){
                console.log(`Insira um nome valido.`)
            }else{
                validador = false
            }
        }
        validador = true
        //Enquanto não incluir um número, alerta o usuário que a entrada é invalida
        while(validador){
            kg = Number(prompt('Kg: '))
            validadorNumero(kg)
        }
        validador = true
        while(validador){
            kgVarejo = Number(prompt('Preço Varejo: '))
            validadorNumero(kgVarejo)
        }
        validador = true
        while(validador){
            kgAtacado  = Number(prompt('Preço Atacado: '))
            validadorNumero(kgAtacado)
        }//fim

        //Instancia um objeto a partir da Função construtora #01
        fruta[i] = new Compra(nome,kg,kgVarejo,kgAtacado)
        i++
    }else{
        addFruta = false
        console.log(`Cadastro de mercadoria finalizado!`)
    }
}

console.log(fruta)
let valorCompraTotal=0,kgCompraTotal=0
for(let i=0;i<fruta.length;i++){
    console.log
    (`
    Nome: ${fruta[i].fruta}
    kg:${fruta[i].kg} 
    Varejo: ${fruta[i].kgVarejo}
    Atacado: ${fruta[i].kgAtacado}  
    Valor: ${fruta[i].valorCompra().toFixed(2)}
    `)
    valorCompraTotal+=fruta[i].valorCompra()
    kgCompraTotal+=fruta[i].kg
}

valorDesconto =  (x, y) => { return (x > 8) || (y> 25) ? y * 0.9 : y}

let valorFinal = valorDesconto(kgCompraTotal,valorCompraTotal)

console.log
    (`
    Peso Total: ${kgCompraTotal.toFixed(2)}
    Valor sem desconto: ${valorCompraTotal.toFixed(2)}
    Valor com desconto: ${valorFinal.toFixed(2)}
    `)

