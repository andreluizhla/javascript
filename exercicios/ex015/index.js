let num = [5, 8, 4, 6, 1, 9, 7, 2]
num.sort()
/*
console.log(`Nosso vetor tem: ${num}`)
console.log(`E na vaga 3 temos ${num[2]}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O vetor oragnizado ficaria: ${num.sort()}`)
console.log('E para mostrar todos os elementos uma em cada linha seria: ')
for (var ele = 0; num.length > ele; ele++){
    console.log(`O valor ${ele} tem o elemento: ${num[ele]}`)
}
for (let pos in num){    
    console.log(`O valor ${pos} tem o elemento: ${num[pos]}`)
}
*/
var val = 3
var pos = num.indexOf(val)
if (pos == -1){
    console.log(`O valor ${val} não foi encontrado`)
} else {
    console.log(`O valor ${val} está na posição ${pos}`)
}