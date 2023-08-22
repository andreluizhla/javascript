function soma(x=0, y=0){
    return x + y
}
function sub(x=0, y=0){
    return x - y
}
function multi(x=1, y=1){
    return x * y
}
function divi(x=1, y=1){
    return x / y
}
function resto(x=1, y=1){
    return x % y
}
var x = 6
var y = 2
console.log(`Os valores são: ${x} e ${y}`)
console.log(`A soma entre eles é: ${soma(x, y)}`)
console.log(`A subtração entre eles é: ${sub(x, y)}`)
console.log(`A multiplicação entre eles é: ${multi(x, y)}`)
console.log(`E a divisão entre eles é: ${divi(x, y)}, se for uma divisão inteira, então vai ter o resto ${resto(x, y)}`)
console.log('obrigado!')