const vet=[10,8,7,6,5,4,9,2,3,1]

//spread operator: Mudancas em array nao afetarao copyWithSpread copyWithSpread = [...array]
const vetaux = [...vet]

var aux;


for(let i=0;i<vetaux.length;i++){

    for(let j=i+1;j<vetaux.length;j++){

        if(vetaux[j] < vetaux[i]){
            
            aux = vetaux[i];
            vetaux[i] = vetaux[j];
            vetaux[j] = aux;
        }
    }
}

console.log(vet)
console.log(vetaux)
