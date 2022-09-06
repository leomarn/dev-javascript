const pessoas = [
    {
        nome: 'Alan',
        age: 19
    },
    {
        nome: 'Maria',
        age: 32
    },
    {
        nome: 'João',
        age: 29
    },
    {
        nome: 'Paulo',
        age: 39
    },
    {
        nome: 'Tereza',
        age: 43
    },
]

const alunos = [
    [ 'Alan', { age: 19 } ],
    [ 'Maria', { age: 32} ],
    [ 'João', { age: 29} ],
    [ 'Paulo', { age: 39} ],
    [ 'Tereza', { age: 43} ],
]

for(let pessoa of pessoas){
    console.log(pessoa)
}

for(let [aluno, idade] of alunos){
    console.log(aluno, idade)
}

