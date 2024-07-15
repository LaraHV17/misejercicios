let frutasVerano = new Set("Melón","Sandía","Higo","Nectarina","Naranja");
let frutasInvierno = new Set("Fresa", "Mandarina", "Limón", "Naranja");
//let frutasAnuales =frutasInvierno.intersection(frutasVerano);//No funciona en node
for (fruta of frutasVerano){
    console.log(fruta);
}