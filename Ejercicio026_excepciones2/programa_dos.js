let paises = [];
paises.push("Kenia", "Australia", "Cuba", "Francia", "Bolivia");
const nMinViajeros = 1;
const nMaxViajeros = 4;
const nMinDias = 5;
const nMaxDias = 10;

/*Como no lo vamos a cambiar, podemos declarar el array con const:
const paises = ["Kenia", "Australia", "Cuba", "Francia", "Bolivia"];*/

function organizarViaje(pais, nViajeros, nDias) {
    let errores = [];
    if (!((paises.map(pais => pais.toUpperCase())).includes(pais.toUpperCase()))) {
        //throw new Error("El destino no existe en el catálogo.");
        //Para que nos salgan todos los errores si hay más de uno:
        errores.push("El destino no existe en el catálogo.");
    }
    /*Una forma menos confusa de hacerlo:
    const paisesMayus=paises.map(pais => pais.toUpperCase());
    const paisBuscadoMayus=pais.toUpperCase();
    if (!paisesMayus.includes(paisBuscadoMayus)){
        throw new Error("El destino no existe en el catálogo.");
    } */
    if (nViajeros < nMinViajeros || nViajeros > nMaxViajeros) {
        //throw new Error("El número de viajeros debe estar entre 1 y 4.");
        errores.push("El número de viajeros debe estar entre 1 y 4.");
    }
    if (nDias < nMinDias || nDias > nMaxDias) {
        //throw new Error("El número de días debe estar entre 5 y 10.");
        errores.push("El número de días debe estar entre 5 y 10.");
    }
    if (errores.length > 0) {
        throw new Error(errores.join("*"));
    }
    return `Se ha reservado un viaje a ${pais} de ${nDias} días para ${nViajeros} personas.`;
}

try {
    const resultado = organizarViaje("suiza", 6, 8);
    console.log(resultado);
} catch (e) {
    console.error(e.message);
} finally {
    console.log("Hemos terminado el proceso");
}