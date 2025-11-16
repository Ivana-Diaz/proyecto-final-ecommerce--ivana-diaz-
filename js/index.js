import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarProductos = () => {
    const contenedor = document.getElementById("contenedor-tarjetas");

    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    fetch("./data/productos.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error (`Error HTTP status: ${res.status}`);
            }

            return res.json();
        })
        .then((data) => {
            data.forEach((producto) => {
                const tarjetaProducto = document.createElement("article");
                tarjetaProducto.classList.add("tarjeta-producto");

                const imgProducto = document.createElement("img");
                imgProducto.src = `./${producto.imagen}`;
                imgProducto.alt = producto.nombre;

                const tituloProducto = document.createElement("h3");
                tituloProducto.textContent = producto.nombre;

                const precioProducto = document.createElement("p");
                precioProducto.textContent = `$${producto.precio}`;

                const botonProducto = document.createElement("button");
                botonProducto.classList.add("btn");
                botonProducto.textContent = "Agregar al carrito";

                botonProducto.addEventListener("click", () => {
                    agregarAlCarrito(producto);
                });

                tarjetaProducto.appendChild(imgProducto);
                tarjetaProducto.appendChild(tituloProducto);
                tarjetaProducto.appendChild(precioProducto);
                tarjetaProducto.appendChild(botonProducto);

                contenedor.appendChild(tarjetaProducto);
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

document.addEventListener("DOMContentLoaded", renderizarProductos);