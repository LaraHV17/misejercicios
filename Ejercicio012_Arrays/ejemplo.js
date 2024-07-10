console.log("Hola");
let nombre="Lara";
console.log(`Me llamo ${nombre}`);

let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
console.log(dias[0]);
console.log(dias.length);
console.log(dias[dias.length-1]);
console.log(dias[7]);
dias[6]="sunday";
console.log(dias[dias.lenght-1]);
dias[7]="otro";
console.log(dias[7]);
dias[20]="veinte";
console.log(dias[20]);
console.log(dias[19]);
console.log(dias.length);
//Con esto recorremos un array con un bucle for "tradicional"
for (let i=0; i<dias.length;i++) {
    console.log(`DIA:${dias[i]}`);
}
//Con esto recorremos el array con un foreach - función "mostrar"
dias.forEach(mostrar);
function mostrar(d)
{
    console.log(d.toUpperCase());
}

let nombres = Array("Pedro", "Ana", "Arturo", "Sandra");
nombres[nombres.length]="Víctor";
//Esto añade "Victor" al final del Array, el final lo obtenemos con .length
nombres.push("Nía");
nombres.forEach(convertirMayusculas);
function convertirMayusculas(nombre) {
    console.log(nombre.toUpperCase());
}
nombres.forEach(function convertir(nombre){console.log(nombre.toUpperCase())});

//Con esto recorremos el array con un foreach - función anónima - es la forma más adecuada
nombres.forEach((nombre) => console.log(nombre.toUpperCase()));
//Metodo filter
let nombresMasDeCuatro = nombres.filter((nombre) => nombre.length>4);
console.log(nombresMasDeCuatro);

let nMasCuatroConA = nombres.filter((nombre) => nombre.length>4 && nombre.toUpperCase().includes('A'));
console.log(nMasCuatroConA);


//Método map - nos da un array transformado a mayúsculas
let nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresMayusculas);

let transformado = nombres.map((nombre) => nombre.replaceAll('a','@'));
console.log(transformado);

//Única línea - cambiar "n" por "N" y obtener un array con nombres de menos de 5 caracteres
let resultado = nombres.map((nombre) => nombre.replaceAll('n','N')).filter((nombre) => nombre.length<5);
console.log(resultado);

//Find - devuelve el primer elemento que cumple la condición
let find1=nombres.find((nombre) => nombre.length<4);
console.log(find1);

//Some - indica si hay elementos que cumplen la condición
let nombresLargos = nombres.some(nombre =>  nombre.length>10);
console.log(nombresLargos);

//Sort - ordena
let numeros = [3, 4, 7, -1, 6, 8];
let numerosOrdenados=numeros.sort();
console.log(numerosOrdenados);
//en valor absoluto
let nOrdenados2=numeros.sort(compararNumeros);
console.log(nOrdenados2);
function compararNumeros(n1, n2)
{
    return Math.abs(n2)-Math.abs(n1);
}


//Concat
//Includes
//Join