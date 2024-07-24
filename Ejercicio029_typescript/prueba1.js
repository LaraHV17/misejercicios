var edad = 40;
//escribiendo en el terminal desde el typescript tsc prueba1.ts se nos compila un javascript
//con info del ts
//no se guarda el tipo de la variables que definimos en ts
console.log(typeof edad); //en js nos da undefined
var nombre = "Fernando";
function sumar(n1, n2) {
    return n1 + n2;
}
var Factura = /** @class */ (function () {
    function Factura(numero) {
        this.numero = numero;
    }
    return Factura;
}());
var f1 = new Factura(1000);
