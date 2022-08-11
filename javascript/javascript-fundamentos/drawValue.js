//Operador destructuring
function rand([min = 0, max = 1000]) {
    (min > max)[min, max] = [max, min]
    const m = ( min>=0 && min <=1000 ), n = ( max>=0 && max <=1000 )
    if(m && n){
        valor = Math.random() * (max - min) + min
        valor = Math.floor(valor)
    } else{
        if(!m && !n){
            valor ='Valores "min" e "max" fora dos parâmetros da função'
        } else if(!m && n){
            valor ='Valor "min" fora dos parâmetros da função'
        }else{
            valor ='Valor "max" fora dos parâmetros da função'
        }
    }
    return valor
}
console.log(rand([0,1000])) //rang(mínimo, maxímo) a ordem dos fatores não altera o resultado.

//Operador destructuring + operador ternário
const rand2 = ([min = 0,max = 1000]) => {
    (min > max)[min, max] = [max, min]
    const m = (min>=0&&min<=1000), n = (max>=0&&max<=1000)
    return ( m&& n) ? valor = Math.floor(Math.random()*(max - min) + min) : 
           (!m&&!n) ? valor ='Valores "min" e "max" fora dos parâmetros da função' :
           (!m&& n) ? valor ='Valor "min" fora dos parâmetros da função': 
                      valor ='Valor "max" fora dos parâmetros da função'
}
console.log(rand2([0,1000]))//rang(mínimo, maxímo) a ordem dos fatores não altera o resultado.