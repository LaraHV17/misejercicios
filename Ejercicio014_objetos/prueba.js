let cliente1 = {
    nombre : "Nombre del cliente",
    direccion : "Calle Melancolía",
    telefono : "63018383"
}

console.log(cliente1);
console.log(typeof cliente1);

let factura1 = new Object();
factura1.numero = 1;
factura1.emisor = "Empresa emisora";
factura1.cliente = cliente1;
factura1.importe = 300;

console.log(factura1);
console.log(typeof factura1);