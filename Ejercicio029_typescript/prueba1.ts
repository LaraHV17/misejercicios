let edad: number = 40;
//escribiendo en el terminal desde el typescript tsc prueba1.ts se nos compila un javascript
//con info del ts
//no se guarda el tipo de la variables que definimos en ts
console.log(typeof edad); //en js nos da undefined
let nombre: string = "Fernando";
function sumar(n1: number, n2: number): number {
    return n1 + n2;
}

class Factura {
    numero: number;
    constructor(numero: number) {
        this.numero = numero;
    }
}
let f1 = new Factura(1000);