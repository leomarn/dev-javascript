function user(nome,sobrenome){
    this.nome = nome;
    this.sobrenome= sobrenome; 
    this.fullnome = function(){ 
       return `${this.nome} ${this.sobrenome}`
    }
}

const nomecompleto = new user('leomar','nogueira')


console.log(nomecompleto.nome)