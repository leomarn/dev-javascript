//Lista 1 EducaSync
//Execicio 1

function kilograma (morango, maca) {
    return {
        morango,
        maca,
        //retorna a quantidade total em kg
        kgTotal() {
            return morango + maca
        },
        //verifica as condicões promocionais se ultrapassa ou não os 5kg
        valorCompra(){
            if(morango <= 5){
                morango *= 2.5
            }else{
                morango *= 2.2
            }
            if(maca <= 5){
                maca *= 1.8
            }else{
                maca *= 1.5
            }
            return morango + maca
        },
    }
}

//Aqui voce seta a quantidade em peso sendo morango e maçã respectivamente.
const compra = new kilograma(7,7)

//Funcão que gera desconto ao cliente, se o peso total for maior que 8kg ou se ultrapassa os 25 reais
valorDesconto =  (kg, valor) => { return (kg > 8) || (valor> 25) ? valor * 0.9 : valor }

let kg = compra.kgTotal()
let valor = compra.valorCompra()


let valorFinal = valorDesconto(kg,valor)

console.log(`Peso Total: ${kg.toFixed(2)}, Valor: ${valor.toFixed(2)}, Valor Promocional: ${valorFinal.toFixed(2)}`)

