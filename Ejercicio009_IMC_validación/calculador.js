const LONGITUD_MINIMA_NOMRE = 3;
const EDAD_MINIMA = 18;
const ALTURA_MINIMA = 100;
const ALTURA_MAXIMA = 250;
const PESO_MINIMO = 40;
const PESO_MAXIMO = 200;
const NUMERO_DECIMALES = 2;

function comenzarCalculoIMC() {
    let hayError = validar();
    if (!hayError) {
        let altura = document.getElementById("iAltura").value;
        let peso = document.getElementById("iPeso").value;
        let imc = calcularIMC(peso, altura);
        escribirIMC(imc.toFixed(NUMERO_DECIMALES));
    }
}

function validar() {
    let hayError = true;
    let nombre = document.getElementById("iNombre").value;
    let edad = document.getElementById("edad").value;
    let altura = document.getElementById("iAltura").value;
    let peso = document.getElementById("iPeso").value;

    //Validación nombre
    if (!(nombre.trim().length > LONGITUD_MINIMA_NOMRE)) {
        escribirError("El nombre debe incluir 3 o más caracteres", "#error-nombre");
    }
    //trim() quita los espacios en blanco en los extremos de la cadena (string)
    //Validación edad

    else if (edad < EDAD_MINIMA) {
        escribirError("Debes ser mayor de edad", "#error-edad");
    }

    //Validación altura
    else if (altura < ALTURA_MINIMA || altura > ALTURA_MAXIMA) {
        escribirError("La altura debe estar en el rango de 100 - 250 cm", "#error-altura");
    }

    //Validación peso
    else if (peso < PESO_MINIMO || peso > PESO_MAXIMO) {
        escribirError("El peso debe estar en el rango de 40 - 200 kg", "#error-peso")
    }
    else {
        hayError = false;
        escribirError("", "#error");
    }
    return hayError;
}

function calcular() {
    let altura = document.getElementById("iAltura").value;
    let peso = document.getElementById("iPeso").value;
    let imc = calcularIMC(peso, altura);
    document.getElementById("resultado").innerHTML = imc;

    //Peso inferior al normal


    //Peso normal

    //Peso superior al normal
    //Obesidad
}

function escribirError(mensaje) {
    document.querySelector("#error").innerHTML = mensaje;
}

function escribirIMC(mensaje) {
    document.querySelector("#resultado").innerHTML = mensaje;
}