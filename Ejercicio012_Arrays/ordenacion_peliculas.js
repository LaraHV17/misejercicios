class Pelicula {
    constructor(titulo,duracion,genero,calificacion) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.genero = genero;
        this.calificacion = calificacion;
    }
}
let p1 = new Pelicula("Inside", 83, "Terror", 1.5);
let p2 = new Pelicula("Challengers", 132, "Drama", 4);
let p3 = new Pelicula("Run", 90, "Terror", 3);

let peliculas = [];
peliculas.push(p1, p2, p3);

let pelisTerror = peliculas
    .filter((pelicula)=>pelicula.genero==="Terror")
    .sort((p1, p2)=>p1.calificacion-p2.calificacion).reverse();
console.log(pelisTerror);

let p4 = new Pelicula ("Inside Out 2", 97, "Animación", 3);
let p5 = new Pelicula ("Civil War", 109, "Drama", 4);
let p6 = new Pelicula  ("Chinas", 119, "Drama", 4);

let peliculas2 = [p4, p5, p6];

//Concat - fusiona dos o más arrays
let peliculas3 = peliculas.concat(peliculas2);
console.log(peliculas3);

//Includes - te dice si el array contiene cierto valor, te devuelve true o false
console.log (peliculas3.includes(p1));
console.log (peliculas3.includes(peliculas3.genero==="Drama"));

//Reduce
let numeros = [2, 4, 6];
let ko = 7;
let resultado = numeros.reduce((n1, n2) => n1 + n2, ko);
console.log(resultado);