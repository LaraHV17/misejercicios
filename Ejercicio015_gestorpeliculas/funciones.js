let peliculas = new Array();
//let peliculas = [];//Construcción alternativa del Array

//Recuperar de localStorage los destinos almacenados
let peliculasAlmacenadas = localStorage.getItem("peliculas");//peliculas es como llamamos
//a lo que guardamos
if (peliculasAlmacenadas!=null)
{
    peliculas = JSON.parse(peliculasAlmacenadas);
    crearListadoPeliculas(peliculas);
}
//Fin de recuperar de localStorage

document.querySelector("#bAgregar").addEventListener("click", (event) => {
    let _titulo = document.querySelector("#iTitulo").value;
    let _genero = document.querySelector("#iGenero").value;
    let _puntuacion = document.querySelector("#iPuntuacion").value;
    let _foto = document.querySelector("#iFoto").value;
    let pelicula = {
        titulo : _titulo,
        genero : _genero,
        puntuacion : _puntuacion,
        foto : _foto
    }
    peliculas.push(pelicula);
    crearListadoPeliculas(peliculas);
});

function crearListadoPeliculas(peliculas) {
    let htmlPeliculas = "";
    peliculas.map((pelicula) => {
        //+= añade las peliculas una al lado de otra
        htmlPeliculas += `<div class="pelicula">
        <div class="titulo-peli">${pelicula.titulo}</div>
        <div class="genero-peli">${pelicula.genero}</div>
        <div class"puntuacion-peli">${pelicula.puntuacion}</div>
        <div class="div-foto">
            <img src="${pelicula.foto}">
        </div>
    </div>`;
    });

    document.querySelector("#peliculas").innerHTML=htmlPeliculas;

    document.querySelector("#iTitulo").value="";
    document.querySelector("#iGenero").value="";
    document.querySelector("#iPuntuacion").value="";
    document.querySelector("#iFoto").value="";
};

//Guardar las peliculas en localStorage
document.querySelector("#bGuardar").addEventListener("click", guardar);
function guardar() {
    let strPeliculas = JSON.stringify(peliculas);
    localStorage.setItem("peliculas", strPeliculas);//peliculas es al nombre que le damos a
    //ese almacenamiento<
}
//Fin de guardar las peliculas