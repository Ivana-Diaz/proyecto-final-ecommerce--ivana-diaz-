import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");

    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";

    if (!carrito.length) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "No hay productos en el carrito";
        contenedor.appendChild(mensaje);
        return;
    }

    carrito.forEach((producto, indice) => {
        const tarjetaProducto = document.createElement("article");
        tarjetaProducto.classList.add("tarjeta-producto");

        const imgProducto = document.createElement("img");
        imgProducto.src = `../${producto.imagen}`;
        imgProducto.alt = producto.nombre;

        const tituloProducto = document.createElement("h3");
        tituloProducto.textContent = producto.nombre;

        const precioProducto = document.createElement("p");
        precioProducto.classList.add("p-precio");
        precioProducto.textContent = `$${producto.precio}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn");
        botonEliminar.classList.add("btn-eliminar-carrito");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", () => {
            eliminarProducto(indice);
            renderizarCarrito();
        });

        tarjetaProducto.appendChild(imgProducto);
        tarjetaProducto.appendChild(tituloProducto);
        tarjetaProducto.appendChild(precioProducto);
        tarjetaProducto.appendChild(botonEliminar);

        contenedor.appendChild(tarjetaProducto);
    });

    const botonVaciar = document.createElement("button");
    botonVaciar.classList.add("btn");
    botonVaciar.classList.add("btn-vaciar-carrito");
    botonVaciar.textContent = "Vaciar carrito";

    botonVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();
    });

    divAcciones.appendChild(botonVaciar);
};

document.addEventListener("DOMContentLoaded", renderizarCarrito);