// function add(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// function value(a){
//     return function (b){
//         return function(fn){
//             return fn(a,b)
//         }
//     }
// }

// console.log(value(2)(5)(add))
// console.log(value(2)(5)(sub))

function operaction(a,b,c){
    if(c == "add"){
        return a+b
    }else if(c == "sub"){
        return a-b
    }
}

function calcular(a){
    return function(b){
            return function (fn){
                return fn(a,b)(c)
            }
    }
}
console.log(calcular(5)(2)(operaction("add")))