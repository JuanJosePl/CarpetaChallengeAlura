export default function esUnCuil(campo) {
    const cuil = campo.value.replace(/[-\/]/g, "");
    const repetidos = tieneNumerosRepetidos(cuil);
    if(validarPrimerosDigitos(cuil) && validarDigitosVerificador(cuil)) {
        console.log("cuil valido");
    }
    else{
        console.log("cuil invalido");
    }

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

function validarDigitosVerificador(cuil){
    let acumulador = 0;
    const factores=[5,4,3,2,7,6,4,3,2];

    for (let i = 0; i < 10; i++) {
        acumulador += parseInt(cuil[i],10) * factores[i];
    }
    let validadorTeorico = 11 - (acumulador % 11);
    if (validadorTeorico === 11){
        validadorTeorico = 0;
    }
    else if(validadorTeorico === 10){
        validadorTeorico = 9;
    }
    const digitoVerifidor = parseInt(cuil[10],10);
    return digitoVerifidor === validadorTeorico;
}