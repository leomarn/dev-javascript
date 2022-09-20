const somar = (x, y) => x + y,
      subtrair = (x, y) => x - y,
      exec = (fn, x, y) => console.log(fn(x, y))

exec(somar, 56, 38)
exec(subtrair, 182, 27)

const add = (...params) => {
      let total = 0
      for (let valor of params) {
            total += valor
      }
      return console.log(total)
}

const mult = (...params) => {
      let total = 1
      for (let valor of params) {
            total *= valor
      }
      return console.log(total)

}

const executar = (fn, ...params) => {
      fn(...params)
}

executar(add, 1,2,3,4,5,6,7,8,9)
executar(mult, 1,2,3,4,5,6,7,8,9)
