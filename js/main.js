const PROTECCIONES = 
    [
        {
            "id": 1,
            "nombre": "Rodillera Mc David blanca",
            "desc": "La tecnología Hex® de 9 mm de varios tamaños está diseñada específicamente para envolver, flexionar y proteger anatómicamente la rodilla. Longitud extendida para un mejor ajuste, así como protección adicional contra cortes y rasguños. Incluye un par",
            "precio": 3500,
            "img": "img/mcDavidBlanca.jpg",
            "cantidad":1
        },
    
        {
            "id": 2,
            "nombre": "Rodillera Mc David negra",
            "desc": "La tecnología Hex® de 9 mm de varios tamaños está diseñada específicamente para envolver, flexionar y proteger anatómicamente la rodilla. Longitud extendida para un mejor ajuste, así como protección adicional contra cortes y rasguños. Incluye un par",
            "precio": 3500,
            "img": "img/mcDavidNegra.jpg",
            "cantidad":1
        },
    
        {
            "id":3,
            "nombre": "Rodillera Ho-Soccer blanca",
            "desc": "Rodillera con sistema de acolchado suave muy confortable y con superficie suave y elasticidad. Molde adaptado anatómicamente para un ajuste perfecto y una amplia zona de protección. Incluye un par.",
            "precio": 2900,
            "img": "img/hoSoccerBlanca.jpg",
            "cantidad":1
        },
    
        {
            "id": 4,
            "nombre": "Rodillera Ho-Soccer negra",
            "desc": "Rodillera con sistema de acolchado suave muy confortable y con superficie suave y elasticidad. Molde adaptado anatómicamente para un ajuste perfecto y una amplia zona de protección. Incluye un par. No dejes pasar esta fantástica oportunidad",
            "precio": 2900,
            "img": "img/hoSoccerNegra.jpg",
            "cantidad":1
        },
    
        {
            "id": 5,
            "nombre": "Codera Hummel larga blanca",
            "desc": "El hummel® PROTECTION CODO MANGA LARGA está diseñado para ayudar a un rendimiento óptimo. Esta manga asegura la máxima compresión en el codo para aumentar el flujo sanguíneo mientras apoya su rango completo de movimiento articular. Cuenta con un patrón de espuma diseñado anatómicamente con alta resistencia al impacto desde cualquier ángulo de articulación para una máxima protección.",
            "precio": 2200,
            "img": "img/hummelLargaBlanca.jpg",
            "cantidad":1
        },
    
        {
            "id": 6,
            "nombre": "Codera Hummel larga negra",
            "desc": "El hummel® PROTECTION CODO MANGA LARGA está diseñado para ayudar a un rendimiento óptimo. Esta manga asegura la máxima compresión en el codo para aumentar el flujo sanguíneo mientras apoya su rango completo de movimiento articular. Cuenta con un patrón de espuma diseñado anatómicamente con alta resistencia al impacto desde cualquier ángulo de articulación para una máxima protección.",
            "precio": 2200,
            "img": "img/hummelLargaNegra.jpg",
            "cantidad":1
        }
    ];

    const carrito = [];

function renderizarItems(){

    const tienda = document.getElementById('tienda');


    PROTECCIONES.forEach((p)=>{
    
        let productoHTML = `

        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 22rem;">
            <img class="card-img-top" src="${p.img}" alt="imagen del producto">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p class="card-text">${p.desc}</p>
                <p>${p.precio} pesos</p>
                <button class="btn btn-dark" onclick="añadirItemAlCarrito(${p.id})">Comprar</button>
            </div>
        </div>
        </div>
        `

        tienda.innerHTML += productoHTML;

    });

    
}

renderizarItems();

function añadirItemAlCarrito(id){


    let producto = PROTECCIONES.find(producto => producto.id === id);

    let productoEnCarrito = carrito.find(producto => producto.id === id);

    if(productoEnCarrito){
        
        productoEnCarrito.cantidad++;

        console.log(carrito);

    }else {
        
        producto.cantidad = 1;
        carrito.push(producto);

        console.log(carrito);
    }
 

    simularCarrito();
    calcularTotal();

}

function simularCarrito(){


    let carritoHTML = document.querySelector('#carrito');

    console.log(carritoHTML);

    let htmlCarrito = '';

    carrito.forEach((p, id)=>{
        
        htmlCarrito += `
        
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${p.img}" alt="imagen del producto">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p>${p.precio}€</p>
                <p>Cantidad: ${p.cantidad}</p>
                <button class="btn btn-warning" onclick="eliminarProductoDelCarrito(${id})">Eliminar del carrito</button>
            </div>
        </div>
        </div>
        `

    })
    
    carritoHTML.innerHTML = htmlCarrito;
}

function eliminarProductoDelCarrito(id) {

    carrito[id].cantidad--;

    if(carrito[id].cantidad === 0) {

        carrito.splice(id, 1);
    }

    simularCarrito();
}

function calcularTotal(){

    let total = 0;

    carrito.forEach((p)=>{
        
        total += p.precio * p.cantidad;
    });

    console.log(total);

    const t = document.getElementById('total');

    t.innerHTML = `<h5>$${total}</h5>`;

}
