//Modo relajado
nombre = "N1";
console.log(nombre);
//nombre no está declarado como variable

//modo estricto
"use strict"//Aplicado a ámbito global provoca errores
x=1;//Esto en modo estricto provoca error
function prueba() {
    //nombre = "N1"; //En modo estricto provoca error
    let nombre = "N1";
    console.log(nombre);

}

prueba (); 