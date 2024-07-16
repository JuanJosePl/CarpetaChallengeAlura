export default function esUnCuil(campo) {
    const cuil = campo.value.replace(/[-\/]/g, "");
    const repetidos = tieneNumerosRepetidos(cuil);
    //console.log(cuil);
   // console.log(repetidos);
    validarPrimerosDigitos(cuil);
    console.log(validarPrimerosDigitos(cuil));
    return repetidos;
}

function tieneNumerosRepetidos(cuil) {
    let repetidos = true;
    for (let i = 1; i < 11; i++) {
        if (cuil.charAt(i) != cuil.charAt(0)) {
            repetidos = false;
            break;
        }
    }
    return repetidos;
}

function validarPrimerosDigitos(cuil){
    let primerosDigitos = cuil.substr(0,2);
    let digitosValidos = ['20','23','24','27','30','33','34'];
    return digitosValidos.includes(primerosDigitos);
}