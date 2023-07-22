var idade = 22
console.log(`Você tem ${idade}`)
if (idade < 16) {
    console.log('Você NÃO Vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto Opcional')
} else {
    console.log('Voto Ogrigatório')
}