let numero = 4;

if (numero <=5) console.log("es menor a cinco")

//operador ternario
console.log(numero <= 5 ? "es menor a 5" : "es mayor a 5");

//Condicional if múltiple


//ciclos
const b = [1, true, "hola", ["a", "b", "C"]];

for (const elem of b) {
  console.log(elem)
}


//for in: para objetos

const miguel = {
  nombre: "miguel",
  apellido: "de la cruz",
  edad: 22,
}

for (const elemento in miguel) {
  console.log(elemento);
  console.log(miguel[elemento]);
}


//for of 
let string = 'hola mundo'

for (const palabra of string) {
  console.log(palabra)
}