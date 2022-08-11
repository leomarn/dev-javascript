function Carro(vMax = 190, acelerar = 5){
    let vAtual = 0

    this.acelerar = function() {
        if(vAtual  + acelerar < vMax){
            vAtual += acelerar
        }else{
            vAtual  = vMax
        }
    }

    this.vAtual = function(){
        return vAtual
    }
}

const uno = new Carro

uno.acelerar()

console.log(uno.acelerar())
console.log(uno.vAtual())