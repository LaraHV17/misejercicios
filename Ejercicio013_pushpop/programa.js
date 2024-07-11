const DELAY_CREACION = 3000;
const DELAY_CONSUMO = 5000;
setInterval(crearTarea, DELAY_CREACION);
setInterval(consumirTarea, DELAY_CONSUMO);
let cola = [];
let contador = 0;
//push crea tareas una tras otra 0, 1, 2, 3, ...
function crearTarea()
{
    console.log("Creando tarea ...");
    contador++;
    cola.push(`Tarea${contador}`);
    mostrarCola();
}

//unshift crea tareas una tras otra ..., 3, 2, 1, 0
//Agregamos al principio de la lista
//function crearTarea()
//{
    //console.log("Creando tarea ...");
    //cola.unshift("Tarea"+cola.length);
    //mostrarCola();
//}

//pop nos consume la tarea
function consumirTarea ()
{
    //let tarea = cola.pop();//Obtiene el último elemento de la lista y lo elimina
    let tarea = cola.shift();//Obtiene el primer elemento de la lista y lo elimina
    console.log(`Realizando la tarea ${tarea}`);
    mostrarCola();
}

function mostrarCola() {
    let textoHTML = "";
    cola.map(tarea => {
        textoHTML+=`<div class='tarea'>${tarea}</div>`;
    });
    document.querySelector("body").innerHTML=textoHTML;
}


