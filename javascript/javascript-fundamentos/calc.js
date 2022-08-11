const calc = (a,b) => {
    return (c) => {
        switch(c){
            case '+':
                return a + b
                break
            case '-':
                return a - b
                break
            case '*':
                return a * b
                break
            case '/':
                return a / b
        }
    }
}

console.log(calc(4,2)('/'))