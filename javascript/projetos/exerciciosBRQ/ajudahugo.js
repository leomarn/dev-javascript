let kgCondicaoAtacado = 5
function Compra(fruta, kg, kgVarejo, kgAtacado) {
    return {
        fruta,
        kg,
        kgVarejo,
        kgAtacado, 
        valorCompra(){
            let valorFinal
            if(kg <= kgCondicaoAtacado){
                valorFinal *= kgVarejo
            }else{
                valorFinal *= kgAtacado
            }
            return valorFinal
        },
    }
}


let qtd = prompt("Quantidade de Frutas: ")
let i = 0
let fruta = []

while(i<qtd){
    fruta[i] = new Compra(prompt())
    i++
}

console.log(fruta)


