const paises = ["Japón", "Chile", "Perú", "Francia", "Kenia"];
const MINIMO_VIAJEROS = 1;
const MAXIMO_VIAJEROS = 4;
const MINIMO_DIAS = 5;
const MAXIMO_DIAS = 10;
function organizarViaje(pais, pax, dias) {
    /*
    //En 1 paso
    if (!((paises.map(pais => pais.toUpperCase())).includes(pais.toUpperCase()))) {
        throw new Error("El destino no existe en el catálogo");
    }
    */
    //En varios pasos
    const paisesMayusculas = paises.map(pais => pais.toUpperCase());
    const paisBuscadoMayusculas = pais.toUpperCase();
    if (!paisesMayusculas.includes(paisBuscadoMayusculas)) {
        throw new Error("El destino no existe en el catálogo");
    }
    if (pax < MINIMO_VIAJEROS || pax > MAXIMO_VIAJEROS) {
        throw new Error("El número de viajeros no es correcto");
    }
    if ((dias < MINIMO_DIAS) || (dias > MAXIMO_DIAS)) {
        throw new Error("El número de días no es correcto");
    }
    return `Se ha reservado un viaje a ${pais} de ${dias} días para ${pax} personas`;
}

try {
    const resultado = organizarViaje("Francia", 2, 7);
    console.log(resultado);
} catch (e) {
    console.error(e.message);
}