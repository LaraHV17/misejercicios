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

