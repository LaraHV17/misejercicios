function crearFila(imagen, nombre, tipo, direccion, precio) {

    //div clase restaurante
    let divRestaurante = document.createElement("div");
    divRestaurante.classList.add("restaurante");
    document.querySelector("#restaurantes").appendChild(divRestaurante);

    //div imagen
    let divImagen = document.createElement("div");
    divImagen.classList.add("imagen");
    divRestaurante.appendChild(divImagen);
    //img src
    let imgRestaurante = document.createElement("img");
    imgRestaurante.src = imagen;
    divImagen.appendChild(imgRestaurante);

    //div descripción
    let divDescripcion = document.createElement("div");
    divDescripcion.classList.add("descripcion");
    divRestaurante.appendChild(divDescripcion);
    //div nombre
    let divNombre = document.createElement("div");
    divNombre.classList.add("nombre");
    divNombre.appendChild(document.createTextNode(nombre));
    divDescripcion.appendChild(divNombre);
    //div tipo
    let divTipo = document.createElement("div");
    divTipo.classList.add("tipo");
    divTipo.appendChild(document.createTextNode(tipo));
    divDescripcion.appendChild(divTipo);
    //div dirección
    let divDireccion = document.createElement("div");
    divDireccion.classList.add("direccion");
    divDireccion.appendChild(document.createTextNode(direccion));
    divDescripcion.appendChild(divDireccion);
    //div precio por persona
    let divPrecio = document.createElement("div");
    divPrecio.classList.add("precio");
    divPrecio.appendChild(document.createTextNode(precio));
    divDescripcion.appendChild(divPrecio);

    document.querySelector("#restaurantes").appendChild(document.createElement("hr"));
}

//crearFila("./images/hakuna_matata_veggie.jpg", "Hakuna Matata", "Mediterránea", "Precio por persona 20 - 30 €")