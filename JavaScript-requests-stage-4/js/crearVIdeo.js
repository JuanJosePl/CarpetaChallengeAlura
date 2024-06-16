// Importa las funciones de conectaAPI
import { conectaAPI } from "./conectaAPI.js";

// Selecciona el formulario
const formulario = document.querySelector("[data-formulario]");

// Función asincrónica para crear un video al enviar el formulario
async function crearVideo(evento) {
    // Evita que el formulario se envíe de forma predeterminada
    evento.preventDefault();

    // Obtiene los valores de los campos del formulario
    const imagen = document.querySelector("[data-imagen]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descripcion = Math.floor(Math.random() * 10).toString();

    try {
        // Llama a la función crearVideo de conectaAPI para crear un nuevo video
        await conectaAPI.crearVideo(titulo, descripcion, url, imagen);

        // Redirige al usuario a una página de confirmación
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        // Muestra un mensaje de alerta en caso de error
        alert(e);
    }
}

// Añade un event listener al formulario para manejar el evento submit
formulario.addEventListener("submit", (evento) => crearVideo(evento));
