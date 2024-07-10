//Creaciñón de una clase
class Vehiculo {
    constructor(nombre, precio, consumo) {
        //Inicialización de los atributos. Lo que aparece en constructor entre () es distinto
        //de .nombre, .precio y .consumo de this.
        this.nombre = nombre;
        this.precio = precio;
        this.consumo = consumo;
    }
}

let jcCar = new Vehiculo("Seat Ibiza", 10_000, 5.3);
//console.log(jcCar.precio);
let fpCar = new Vehiculo("Kia Ceed", 9_500, 6.4);
let vehiculos = [];
vehiculos.push(jcCar);
vehiculos.push(fpCar);
console.log(vehiculos);
//con push también podemos incluir varios objetos a la vez, separados con ,
let laraCar = new Vehiculo("Mercedes", 35_000, 8.5);

vehiculos.push(laraCar);

//Sort - comparar

vehiculos.sort((v1, v2) => v1.precio-v2.precio);
console.log(vehiculos);

//Para cambiar el orden se puede utilizar el método reverse
vehiculos.sort((v1, v2) => v1.precio-v2.precio).reverse();
console.log(vehiculos);

vehiculos.sort((v1, v2) => v1.consumo-v2.consumo);
console.log(vehiculos);

//También se puede invertir el orden haciendo v2 - v1 en lugar de v1 - v2

let sCar = new Vehiculo("Dacia", 11_500, 6.4);
vehiculos.push(sCar);

