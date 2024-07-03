//Vamos a hacer una función que sea independiente del HTML.
function calcularIMC(peso, altura)
{
    let imc = (peso/((altura/100)**2));
    return imc;
}