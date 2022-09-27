Array.prototype.myMap = function (callback) {
    const newArray = []
    for(let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this))
    }
    return newArray
}
Array.prototype.myFilter = function (callback) {
    const newArray = []
    for(let index = 0; index < this.length; index++) {
        if(callback(this[index], index, this)) {
            newArray.push(this[index])
        }
    }
    return newArray
}
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue
    for(let index = 0; index < this.length; index++) {
        if (!accumulator && index === 0) {
            accumulator = this[index]
        }else {
            accumulator = callback(accumulator, this[index], index, this)
        }
    }
    return accumulator
}