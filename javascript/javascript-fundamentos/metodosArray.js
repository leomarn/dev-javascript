Array.prototype.forEach2= function(callback){
    for(let i = 0; i<this.length;i++){
        callback(this[i],i, this)
    }
}

Array.prototype.map2= function(callback){
    const newArray = []
    for(let i = 0; i<this.length;i++){
            newArray.push(callback(this[i],i, this))
    }
    return newArray
}

Array.prototype.filter2= function(callback){
    const newArray = []
    for(let i = 0; i<this.length;i++){
        if(callback(this[i],i, this) == true){
            newArray.push(this[i])
        }
    }
    return newArray
}