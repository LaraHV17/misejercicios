class Engendro {
    //declaramos antes las variables:
    nombre: string;
    altura: number;
    peso: number;
    constructor(nombe: string);
    constructor(nombre: string, altura: number);
    constructor(nombre: string, altura: number, peso: number);
    constructor(nombre: string, altura?: number, peso?: number) {
        this.nombe = nombre;
        this.altura = altura;
        this.peso = peso;
    }
}
//hemos hecho 3 constructores distintos al que le podemos pasar parámetros distintos
new Engendro("antonia", 170, 56);