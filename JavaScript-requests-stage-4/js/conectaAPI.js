// Función asincrónica para listar videos
async function listaVideos() {
    // Realiza una solicitud GET a la API para obtener los videos
    const conexion = await fetch("http://localhost:3002/videos", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });

    // Convierte la respuesta en un objeto JSON
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

// Función asincrónica para crear un nuevo video
async function crearVideo(titulo, descripcion, url, imagen) {
    // Realiza una solicitud POST a la API para crear un video
    const conexion = await fetch("http://localhost:3002/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
    });

    // Convierte la respuesta en un objeto JSON
    const conexionConvertida = await conexion.json();

    // Si la respuesta no es exitosa, lanza un error
    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    return conexionConvertida;
}

// Función asincrónica para buscar videos
async function buscarVideo(referencia) {
    // Realiza una solicitud GET a la API con un parámetro de búsqueda
    const conexion = await fetch(`http://localhost:3002/videos?q=${referencia}`);
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

// Exporta las funciones para que puedan ser utilizadas en otros módulos
export const conectaAPI = {
    listaVideos,
    crearVideo,
    buscarVideo
};
