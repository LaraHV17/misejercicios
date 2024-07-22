function crearFila(nombre, itinerario, distancia, dificultad) {

    //div clase ruta
    let divRuta = document.createElement("div");
    divRuta.classList.add("ruta");
    document.querySelector("#rutas").appendChild(divRuta);

    //div descripción
    let divDescripcion = document.createElement("div");
    divDescripcion.classList.add("descripcion");
    divRuta.appendChild(divDescripcion);
    //div nombre
    let divNombre = document.createElement("div");
    divNombre.classList.add("nombre");
    divNombre.appendChild(document.createTextNode(nombre));
    divDescripcion.appendChild(divNombre);
    //div salida - itinerario
    let divItinerario = document.createElement("div");
    divItinerario.classList.add("itinerario");
    divItinerario.appendChild(document.createTextNode(itinerario));
    divDescripcion.appendChild(divItinerario);
    //div llegada - distancia
    let divDistancia = document.createElement("div");
    divDistancia.classList.add("distancia");
    divDistancia.appendChild(document.createTextNode(distancia));
    divDescripcion.appendChild(divDistancia);
    //div web - dificultad
    let divDificultad = document.createElement("div");
    divDificultad.classList.add("dificultad");
    divDificultad.appendChild(document.createTextNode(dificultad));
    divDescripcion.appendChild(divDificultad);

    document.querySelector("#rutas").appendChild(document.createElement("hr"));
}