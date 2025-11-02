const productos = [
    { imagen: "./img/pulover-gris.jpg", alt: "pulover gris", nombre: "Pulóver gris", precio: 1400 },
    { imagen: "./img/campera-rosa.jpg", alt: "campera rosa", nombre: "Campera rosa", precio: 800 },
    { imagen: "./img/pulover-blanco.jpg", alt: "pulover blanco", nombre: "Pulóver blanco", precio: 2200 },
    { imagen: "./img/cardigan-naranja.jpg", alt: "cardigan naranja", nombre: "Cárdigan naranja", precio: 790 },
    { imagen: "./img/sueter-azul.jpg", alt: "sueter azul", nombre: "Suéter azul", precio: 1850 },
    { imagen: "./img/sueter-verde.jpg", alt: "sueter verde", nombre: "Suéter verde", precio: 2000 },
];

let divTarjetas = document.querySelector(".contenedor-tarjetas");

productos.forEach((producto) => {
    let tarjetaProducto = document.createElement("article");
    tarjetaProducto.classList.add("tarjeta-producto");

    let imgProducto = document.createElement("img");
    imgProducto.src = producto.imagen;
    imgProducto.alt = producto.alt;
    
    let tituloProducto = document.createElement("h3");
    tituloProducto.textContent = producto.nombre;

    let precioProducto = document.createElement("p");
    precioProducto.textContent = `$${producto.precio}`;

    tarjetaProducto.appendChild(imgProducto);
    tarjetaProducto.appendChild(tituloProducto);
    tarjetaProducto.appendChild(precioProducto);

    divTarjetas.appendChild(tarjetaProducto);
});
