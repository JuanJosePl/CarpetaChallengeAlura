import esMayorDeEdad from "./validar-edad.js";
import esUnCuil from "./validarCuil.js";

const camposDeFormulario = document.querySelectorAll("[required]");

camposDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault())
});

function verificarCampo(campo) {
    if (campo.name == "cuil" && campo.value.length >= 11) {
        const esRepetido = esUnCuil(campo);
        if (esRepetido) {
            campo.setCustomValidity("El CUIL no debe consistir en números repetidos.");
        } else {
            campo.setCustomValidity("");
        }
        campo.reportValidity();
    }
    if(campo.name == "fecha_nacimiento" && campo.value != ""){
        esMayorDeEdad(campo);
    }
}