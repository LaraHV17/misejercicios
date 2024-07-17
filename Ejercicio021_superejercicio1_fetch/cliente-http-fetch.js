function getVideojuegos(url, port, recurso) {
    const promise = fetch(`${url}:${port}/${recurso}`);
    promise.then(response => response.text())
        .then(data => {
            mostrarDatos(data)
        });
}

function mostrarDatos(datos) {
    let juegos = JSON.parse(datos);
    juegos.forEach(juego => {
        let ficha = `<div class="juego">
            <div class="titulo">${juego.titulo}</div>
            <div class="plataforma">${juego.plataforma}</div>
            <div class="imagen">
                <img src="${juego.caratula}">
            </div>
        </div>`;
        document.querySelector("#juegos").innerHTML += ficha;
    });
}

function mostrarPaginaError(codigo) {
    document.querySelector("#juegos").innerHTML = `<h1>Ha ocurrido un error:${codigo}</h1>`;
}

getVideojuegos("http://localhost", 5502, "datos.json");