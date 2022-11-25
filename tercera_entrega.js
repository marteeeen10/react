let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let btn_compra = document.querySelectorAll(".botonCompra");
console.log(btn_compra);
let modal_div = document.getElementById("modal-div");
let clima_div = document.getElementById("clima-div");

let DateTime = luxon.DateTime;
console.log(DateTime)

for(let boton of btn_compra){
    boton.addEventListener("click" , agregar_a_carrito )
}

function agregar_a_carrito(e){
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

let nombre_producto = padre.querySelector("h5").textContent;
let precio_producto = padre.querySelector("span").textContent;
let img_producto = abuelo.querySelector("img").src;
let cantidadd = padre.querySelector("input").value;

console.log(nombre_producto);
console.log(precio_producto);
console.log(img_producto);
console.log(cantidadd);
let producto = {
    nombre: nombre_producto,
    precio: precio_producto,
    img: img_producto,
    cantidad: cantidadd,
}
carrito.push(producto);
mostrar_carrito(producto);
saveLocal();
}

function mostrar_carrito( producto ){
    let fila = document.createElement("tr");
fila.innerHTML = `<td><img src="${producto.img}"></td>
<td>${producto.nombre}</td>
<td>${producto.cantidad}</td>
<td>${producto.precio}</td>
<td><button class="btn btn-danger borrar_elemento">Borrar</td>`;

console.log( fila );      
let tabla = document.getElementById("tbody");
tabla.append( fila );

let btn_borrar = document.querySelectorAll(".borrar_elemento");

for( let boton of btn_borrar){
    boton.addEventListener("click" , borrar_producto);
}}

function borrar_producto(e){
    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove();
    Toastify({
        text: "Producto borrado del carrito",
        duration:1000,
        gravity: "bottom",
        position: "right",
        className: "producto_borrado",
        style: {
          background: "linear-gradient(to right, #9b1845, #996e7d)",
        }
      }).showToast();
}

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


//Fetch y clima
fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&lang=es&units=metric&appid=a9e10258cf0e599a2cc1fdf9eaf61083")
    .then(response => response.json())
    .then(data => {
        let d = data.main.temp;
        console.log(data.main.temp_min)
        if(d > "22"){
            clima_div.style.backgroundColor = "red";
            clima_div.innerHTML = `<h1> Dia caluroso 🌡 </h1>`;
        } 
        else{
            clima_div.style.backgroundColor = "blue";
            clima_div.innerHTML=  `<h1> Dia fresco ❄ </h1>`;
        }
    });