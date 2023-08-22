function parimp(n) {
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'ímpar'
    }
}
var val = 485
var res = parimp(val)
console.log(`O valor ${val}, é: ${res}`)