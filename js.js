let cant_monedas = parseInt( prompt("Ingrese la cantidad de diferentes tipos de monedas a vender"));
let total = calcular_suma(cant_monedas);
let beneficio = prompt("se aplica alguna mejora a la tasacion por la cantidad de dinero si o no?");

if(beneficio == "si"){
    total = calcular_beneficio(total);
    alert("El monto total a recibir es de: $"+total);
}else if(beneficio == "no"){
    alert("No hay beneficio, el monto a abonar es: $"+total);
}
else{
    alert("Ingreso incorrecto, vuelva a empezar");
    exit;
}
//DECLARACION DE FUNCIONES
function calcular_suma(c){
        if( true ==  isNaN(c)){ //isNAN devuelve un booleano, igual a 1 si No es Numero
            alert("el formato debe ser numeeeero");
            exit;
        }
        else{
        let suma = 0;
            for(let i = 0; i < c; i++){
                let moneda = parseInt(prompt("ingrese monto moneda numero: " + (i+1)));
                let costo = parseFloat(prompt("ingrese la tasacion de la moneda numero: " + (i+1)));
                multiplicacion = moneda*costo
                suma = suma + multiplicacion;
                console.log(suma);
            }
        alert("El monto total a cobrar es de: "+suma);
        return suma;
    }
}
function calcular_beneficio(d){
    let beneficio = parseFloat( prompt("ingrese el beneficio en % por el monto a cambiar"));
    let d_con_beneficio = d*(1+beneficio/100);
    return d_con_beneficio;
}


