//Función sin argumentos ni retorno
function saludar() {
    console.log("Hola");
}
saludar();

//Función con argumentos y retorno
function sumar(n1, n2) {
    return n1 + n2;
}
const resultado = sumar(3, 4);
console.log(resultado);

function elevar(base, exponente) {
    return base ** exponente;
}
console.log(elevar(3, 2));

//Si elevar(base, exponente = 2) y llamamos a elevar como elevar(3), nos da 3^2=9.
//En este caso, el parámetro exponente es opcional.
//Sin embargo, si elevar (base = 2, exponente) y llamamos a elevar como elevar(4), nos dará
//NaN (not a number) porque toma 4 como base y nada como exponente. Lee de izquierda a derecha.
//podriamos llamar a elevar como elevar(undefined, 3), y tomaría base=2 y exponente=3.

//Función con argumentos por defecto
function elevar1(base = 4, exponente = 2) {
    return base ** exponente;
}
console.log(elevar1());

//Asignación de funciones a variables
let miFuncion = function () {
    console.log("Hola, soy una función asignada a una variable");
}

//Uso de la partícula this
function pruebaThis(nombre) {
    this.nombre = nombre;
    console.log(this.nombre);
}
pruebaThis("Almudena");

//Uso de la partícula this (construcción de clases a través de funciones)
//(Nosotros utilizaremos class)
function Alumno(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saluda = () => {
        console.log("Hola, soy " + this.nombre);
    }
}
const alumno1 = new Alumno("Antonio", 19);
alumno1.saluda();

//Variable arguments -> Array con todos los argumentos que llegan
function hazAlgo(a1, a2, a3) {
    console.log(arguments.length);
    console.log(arguments[0]);
}
hazAlgo(1, 2, 3);//arguments.length nos da el número de argumentos de la función
//Nos sirve para saber si a la función que hemos creados nos llegan los argumentos necesarios

hazAlgo("Uno", 2);

//Parámetro rest
function sumar2(...sumando) {
    sumando.forEach(numero => console.log(numero));
}
//"..." significa que sumar2 va a recibir un número indeterminado de argumentos.
//No sabemos cuántos argumentos va a recibir
sumar2(1);
sumar2(3, 4);
sumar2(3, 8, 10, 5, 4);
//Podemos añadir argumentos antes de "...", pero nunca después.

function sumar3(...sumando) {
    //versión ochentera
    //let total=0;
    //sumando.forEach(numero => {
    //total += numero});
    //return total;
    //Versión actual
    return sumando.reduce((x, y) => x + y);
}
console.log(sumar3(1));
console.log(sumar3(3, 4));
console.log(sumar3(3, 8, 10, 5, 4));