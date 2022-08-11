const somar = (x,y) => x+y, 
      subtrair = (x,y) => x-y,
      exec = (fn, x, y) => console.log(fn(x,y))

exec(somar, 56, 38)
exec(subtrair, 182, 26)