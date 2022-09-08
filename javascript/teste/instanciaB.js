module.exports = () => {
    return {
        count: 1,
        inc(){
            return this.count ++
        }
    }
}