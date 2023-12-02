let num = [ 6 , 7 , 8 , 9 , 1 , 3 , 2 , 5 , 4 , 0 ]
num.push()
num.sort()//colocar em ordem crescente

console.log(`O vetor tem ${num.length} posições`)
console.log(num[2])
console.log(num)

let valores = [8 , 1 , 7 , 4 , 2 , 9]
let pos = num.indexOf(9)
/*for(let pos= 0 ; pos < valores.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */
for (let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]} `)
}