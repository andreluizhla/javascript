var pizzaTotal = 8

var pizza = pizzaTotal

while (pizza >=1){
    if (pizza == pizzaTotal){
        console.log(`Vou comer um pedaço dessa pizza que tem ${pizzaTotal} pedaços`)
        pizza--
    } else {
    console.log(`Esse pedaço de pizza está uma delicia e ainda falta ${pizza} pedaços, então comerei mais 1`)
    pizza--
    }
}
if (pizza == 0) {
    console.log('Essa pizza estava uma deícia, pena que acabou ;-;')
} 