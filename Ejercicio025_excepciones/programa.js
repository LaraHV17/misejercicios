function sumar(s1, s2) {
    //1. Validación 1: que recibamos 2 argumentos
    if (s1 === undefined || s2 === undefined) {
        //lanzamos la excepción
        throw new Error("Los dos sumandos son obligatorios");
    }
    //2. Validación 2: que los dos sean números
    if (!(typeof s1 === "number") || !(typeof s2 === "number")) {
        throw new Error("Los dos sumandos deben ser números");
    }
    return s1 + s2;
}

try {
    console.log("Paso 1");
    let resultado = sumar(2, 5);
    console.log("Paso 2");//Va al catch a ejecutar el código que haya ahí
    console.log(resultado);
    console.log("Paso 3");
} catch (e) {
    console.error(e.message);
} finally {
    console.log("Hemos terminado el proceso");//Siempre se ejecuta
}