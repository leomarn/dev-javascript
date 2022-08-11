let media

const aluno = [9, 10, 6, 3, 9, 8.5, 9.2, 3.7, 9.8, 10]

//Com o metodo reduce é somado todas as notas e divididas pela quantidade total de notas
//o médoto toFixed() formata o número para exibir somente duas casas após o ponto.
media = (aluno.reduce((atual, total) => {return total += atual},0)/aluno.length).toFixed(2)

//O sort(função de comparação) ordena os valores a paritr da função de comparação subtraindo b de a
aluno.sort((a, b) => a - b)

//o slice(início,[,fim]) retorna somente as tres notas mais altas
console.log(aluno.slice(aluno.length-3, aluno.length))

if(media < 6){
    console.log(`Nota: ${media.toString().replace(".", ",")} Conteiro: Reprovado`)
}else if(media < 7.5){
    console.log(`Nota: ${media.toString().replace(".", ",")} Conteiro: C`)
}else if(media < 9){
    console.log(`Nota: ${media.toString().replace(".", ",")} Conteiro: B`)
}else{
    console.log(`Nota: ${media.toString().replace(".", ",")} Conteiro: A`)
}

