const VALOR_MINIMO = 10;

function comprobarSensores() {
    if (comprobarSensor1() & comprobarSensor2()) {
        alert("Todo ok");
    }
    else {
        alert("Hay error");
    }

}

function comprobarSensor1() {
    let valorSensor1 = document.getElementById("sensor1").value;
    //Opción 1: return!(valorSensor1<VALOR_MINIMO);
    //Si el valor del sensor1 es menor que 10 nos dirá que es falso
    //Opción 2: if (valorSensor1 < VALOR_MINIMO) {
        //return false;
    //}
    //return true;
    let sensorOk = true;
    if (valorSensor1<VALOR_MINIMO) {
        sensorOk = false;
        document.querySelector("#marcador1").classList.add("rojo");
    } else {
        sensorOk = true;
        document.querySelector("#marcador1").classList.add("verde");

    }
    return sensorOk;
    //Esta forma es más legible
}

function comprobarSensor2() {
    let valorSensor2 = document.getElementById("sensor2").value;
    //Podemos hacer lo mismo que en el sensor1, pero con expresiones ternarias
    let sensorOk = valorSensor2<VALOR_MINIMO ? false : true;
    // ? pregunta, false si la condición se cumple, true si no se cumple
    if (sensorOk) {
        
        document.querySelector("#marcador2").classList.add("verde");
    }
    else {
        document.querySelector("#marcador2").classList.add("rojo");
    }
    return sensorOk;
}

