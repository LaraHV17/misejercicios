let peliculas = new Array();

//Recuperar de localStorage los destinos almacenados

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

//Fin de guardar las peliculas