//1
function saludar(nombre){
    console.log(`hola, ${nombre}`)
}

saludar("camilo")

//2
function convertirCelcius(fahrenheit){
    return (fahrenheit - 32) / 1.8
}

function mostrarConversion(fahrenheit){
    let conversion = convertirCelcius(fahrenheit)
    return conversion;
}

console.log(mostrarConversion(32))

//3
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

//4

let cubo = (a) => a**3
console.log("el cubo es: " + cubo(5))