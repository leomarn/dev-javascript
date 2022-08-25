const forma = 'quadrado'
const altura = 5;
const comprimento = 7;

const area = (altura, comprimento) =>{
    if(forma === 'quadrado'){
        const area = altura * comprimento
        return area
    }else {
        const area = (altura * comprimento) / 2
        return area
    }   
}
var variable = null
console.log(area(altura,comprimento))

console.log(5!=="5");
//console.error(new Error("deu erro"));

