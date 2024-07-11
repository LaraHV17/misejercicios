let estadosUnidos = {
    nombre : "Estados Unidos",
    continente : "América"
}

let harrisonFord = {
    nombre : "Harrison Ford",
    pais : estadosUnidos
}

let markHamill = {
    nombre : "Mark Hamill",
    pais : estadosUnidos
}

let starWarsEpisodioIV = {
    titulo : "Star Wars : Episodio IV",
    director : "George Lucas",
    actores : [harrisonFord, markHamill]
}

let starWarsEpisodioV = {
    titulo : "Star Wars : Episodio V",
    director : "George Lucas",
    actores : [harrisonFord, markHamill]
}

let starWarsEpisodioVI = {
    titulo : "Star Wars : Episodio VI",
    director : "George Lucas",
    actores : [harrisonFord, markHamill]
}

let sagaStarWars = [starWarsEpisodioIV, starWarsEpisodioV, starWarsEpisodioVI];
console.log (sagaStarWars);