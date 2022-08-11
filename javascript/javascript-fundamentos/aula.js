function valorEntrada(x1,x2,x3) {
    switch(x3){
        case "add": return x1+x2 
        break;
        case "sub": return x1-x2
        break;
        case "div": return x1/x2
        break;
        case "mul": return x1*x2
        break;
    }
}

console.log(valorEntrada(12,10,"sub"))