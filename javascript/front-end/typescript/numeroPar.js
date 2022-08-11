




let j=0, nums = [], num = 13

for(let i=1; i < num; i++){
    if(i%2 == 0){
        nums[j] = i
        j++
    }
}

console.log(`Qtd. de números pares: ${nums.length}, números ${nums}`)