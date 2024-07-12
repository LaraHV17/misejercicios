/*
Atributos:
- sprite
- posición
- estado

Métodos;
- disparar
- explotar
- mover
*/

//Creación de un objeto 
let enemigo1 = {
    //atributos
    sprite : "imagen.jpg",
    x : 0,
    y : 0,
    estado : "formacion",
    //métodos o acciones del objeto
    saludar(nombre) {
        console.log("Hello" + nombre);
    }
};
console.log(typeof enemigo1);

//Creación de una clase con funciones
function Enemigo (sprite, x, y, formacion) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.formacion = formacion;
    //this es una forma de definir una clase sprite de un objeto concreto
    this.saludar= function(nombre) {
        console.log("Hi" + nombre);
    }
};

let enemigo2 = new Enemigo("imagen.jpg", 1, 0, "enformacion");
console.log(typeof enemigo2);

//Creación de una clase con class (forma correcta)
class Superenemigo {
    constructor(sprite, x, y, estado){
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.estado = "enformacion"; //todos los enemigos nacen en formación,
        saludar(nombre) {
            console.log("Hola" + nombre);
        }
        }
}

let enemigo3 = new Superenemigo("imagen.png", 1, 1);
console.log(typeof enemigo3);