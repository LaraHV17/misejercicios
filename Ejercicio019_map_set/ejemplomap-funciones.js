let facturar = () => {
    console.log("Facturando...");
}
let reclamar = () => {
    console.log("Reclamando...");
}
let archivar = () => {
    console.log("Archivando...")
}

let flujoTrabajo = new Map ([
    ["Facturar", facturar],
    ["Reclamar", reclamar],
    ["Archivar", archivar]
]);

flujoTrabajo.get("Facturar")();
flujoTrabajo.get("Reclamar")();
flujoTrabajo.get("Archivar")();
