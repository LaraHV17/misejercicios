const b = new Map( [
    ["Alberto", 38],
    ["Óscar", 40],
    ["Lara", 29]
]);
console.log(b.get("Óscar"));

//Definimos un Map que tenga por clave el título de la película
// y por valor un objeto con los atributos: director, género, año y duración
//El Map tendrá tres películas

let peli1 = {
    director : "Matthew Warchus",
    genero : "Drama",
    anyo : 2014,
    duracion : 120
};
let peli2 = {
    director : "Justin Triet",
    genero : "Thriller",
    anyo : 2023,
    duracion : 152
};
let peli3 = {
    director : "Emerald Fennell",
    genero : "Thriller",
    anyo : 2023,
    duracion : 131
};

const peliculas = new Map([
    ["Pride",peli1],
    ["Anatomy of a fall",peli2],
    ["Saltburn",peli3],
    ["Lalaland", {
        director : "Damian Chazelle",
        genero : "Musical",
        anyo : 2016,
        duracion : 128
    }]
]);


console.log(peliculas.get("Pride").director);
console.log(peliculas.get("Anatomy of a fall").genero);
console.log(peliculas.get("Lalaland").anyo);

for (const pelicula of peliculas) {
    console.log(typeof pelicula);
}