
function executar(fn, n1=null,n2=null){
    if(typeof fn === `function`){
        console.log(fn(n1,n2))
    }
}
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mult(a,b){
    return b!=null? a*b:`"enter the second number"`
}
function div(a,b){
    return b!=null? a/b:`"enter the second number"`
}

executar(mult, 3,4)