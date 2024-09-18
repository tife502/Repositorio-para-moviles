//1
let direccion = {
    calle: 20,
    ciudad: "dosquebradas",
    pais: "colombia",
}

let persona = {
    nombre: "camilo",
    edad: 20,
    ocupacion: "estudiante",
    ciudad: "pereira",
    presentacion: function (){
        return `hola, mi nombre es ${nombre}, tengo ${persona.edad} años y soy ${ocupacion}`
    },
    direccion: direccion,
};

let nombre = persona.nombre
let ocupacion = persona.ocupacion

console.log(nombre)
console.log(ocupacion)

persona.edad = 21;
console.log(persona.edad)

console.log(persona.presentacion())

console.log(persona.direccion.ciudad)