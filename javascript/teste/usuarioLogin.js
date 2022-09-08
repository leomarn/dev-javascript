module.exports = (...nome) => {
    const acesso = require('./acesso')(nome)
    let array = []
    for( i = 0; i < 90000; i++){
        array.push(i)
    }
    return acesso
}