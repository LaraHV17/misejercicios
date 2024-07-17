function getVideojuegos(url, port, recurso) {
    const client = new XMLHttpRequest();

    client.addEventListener("readystatechange", () => {
        const isDone = client.readyState === 4;//Ha terminado
        const isOk = client.status === 200;//OK
        console.error(client.status);

        if (isDone && isOk) {
            mostrarDatos(client.responseText);
        } else if (isDone && !isOk) {
            mostrarPaginaError(client.status);
        }
    });
    client.open("GET", `${url}:${port}/${recurso}`);
    client.send();
}  

function mostrarDatos(datos)
{
    let juegos = JSON.parse(datos);
    juegos.forEach(juego => {
        let ficha = `<div class="juego">
            <div class="titulo">${juego.titulo}</div>
            <div class="plataforma">${juego.plataforma}</div>
            <div class="imagen">
                <img src="${juego.caratula}">
            </div>
        </div>`;
    document.querySelector("#juegos").innerHTML+=ficha; 
    });   
}

function mostrarPaginaError(codigo){
    document.querySelector("#juegos").innerHTML=`<h1>Ha ocurrido un error:${codigo}</h1>`;   
}

getVideojuegos("http://localhost",5501,"datos.json");