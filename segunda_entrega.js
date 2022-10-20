class Disponibles{
    constructor(monedas,valoracion){
        this.monedas = monedas;
        this.valoracion = valoracion;
    }
    get_datos(){
        console.log("<----------------------->")
        console.log("Moneda: " , this.monedas);
        console.log("Tasacion de la moneda en pesos: ", this.valoracion);
    }
}
function buscar_disponibles( disponibles ){
    return disponibles.monedas == compra_usuario
}
//Alta monedas
let lista_monedas = [];
for(let i=0 ; i <= 1 ; i++){
    let monedas = prompt("Ingrese el nombre de la moneda a cargar");
    let valoracion = parseInt(prompt("Ingrese la tasacion de dicha moneda en $"));
    let moneda = new Disponibles( monedas , valoracion);
    lista_monedas.push(moneda);
}
console.log(lista_monedas)

// Vista de monedas disponibles
for(let disponibles of lista_monedas){
    disponibles.get_datos();
}
// Simulacion operacion de compra
let compra_usuario = prompt("Ingrese el nombre de la moneda que quiere comprar");
let monto = prompt("Ingrese monto de la moneda que quiere comprar")
let resultado_find = lista_monedas.find(buscar_disponibles)
console.log(resultado_find);

//Monto a pagar por el usuario
if (compra_usuario == lista_monedas[0].monedas) {
    let total = lista_monedas[0].valoracion*monto
    console.log("Usted debe abonar la suma en pesos de " + total) 
} else if (compra_usuario == lista_monedas[1].monedas){
    let total = lista_monedas[1].valoracion*monto
    console.log("Usted debe abonar la suma en pesos de " + total) 
} else {
    console.log("Error")
}


