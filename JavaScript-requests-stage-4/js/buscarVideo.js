// Importa las funciones de conectaAPI y construyeCard
import { conectaAPI } from "./conectaAPI.js";
import construyeCard from "./mostrarVideos.js";

// Función asincrónica para buscar videos
async function buscarVideo(evento) {
  // Evita que el formulario se envíe de forma predeterminada
  evento.preventDefault();

  // Obtiene los valores de los campos de búsqueda
  const datosDeBusqueda = document.querySelector("[data-busqueda]").value;

  // Llama a la función buscarVideo de conectaAPI para buscar videos
  const buscar = await conectaAPI.buscarVideo(datosDeBusqueda);

  // Selecciona el contenedor de la lista de búsqueda
  const listaDeBusqueda = document.querySelector("[data-lista]");

  // Limpia la lista de búsqueda
  listaDeBusqueda.replaceChildren();

  // Itera sobre los resultados de la búsqueda y construye una tarjeta para cada video
  buscar.forEach((elemento) =>
    listaDeBusqueda.appendChild(
      construyeCard(
        elemento.titulo,
        elemento.descripcion,
        elemento.url,
        elemento.imagen
      )
    )
  );

  // Si no se encontraron resultados, muestra un mensaje
  if (buscar.length == 0) {
    listaDeBusqueda.innerHTML = `<h2 class="mensaje__titulo">No se encontraron resultados para ${datosDeBusqueda}<h2>`;
  }
}

// Selecciona el botón de búsqueda
const botonBusqueda = document.querySelector("[data-boton-busqueda]");

// Añade un event listener al botón de búsqueda para manejar el evento click
botonBusqueda.addEventListener("click", (evento) => buscarVideo(evento));

// Selecciona el campo de búsqueda
const campoBusqueda = document.querySelector("[data-busqueda]");

// Añade un event listener al campo de búsqueda para manejar el evento keypress
campoBusqueda.addEventListener("keypress", (evento) => {
  if (evento.key === "Enter") {
    buscarVideo(evento);
  }
});
