function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) { //las variables dentro de funciones solo existen si las pasas como parámetros, excepto en JS porque es muy permisivo. Ser estricto en este caso es bueno. 
  let resultado = ""
  if (jugada == 1) {
    resultado = "Piedra 🪨"
  } else if (jugada == 2) {
    resultado = "Papel 🧻"
  } else if (jugada == 3) {
    resultado = "Tijera ✂️"
  } else {
    resultado = "NULO"
  }
  return resultado
}

//1 para piedra, 2 para papel y 3 para tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1, 3)
  jugador = prompt("Elige: 1 para piedara, 2 para papel y 3 para tijera")

  alert("PC elige: " + eleccion(pc)) //Invoco a la función elección 
  alert("Jugador elige: " + eleccion(jugador))

  //Combate
  if (pc == jugador) {
    alert("Empate")
  } else if (jugador == 1 && pc == 3) {
    alert("GANASTE")
    triunfos = triunfos + 1 //con esto rompo el ciclo, sino sería un ciclo infinito
  } else if (jugador == 2 && pc == 1) {
    alert("GANASTE")
    triunfos = triunfos + 1
  } else if (jugador == 3 && pc == 2) {
    alert("GANASTE")
    triunfos = triunfos + 1
  } else {
    alert("PERDISTE")
    perdidas = perdidas + 1
  }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")

    //ctrl + D: para seleccionar todo un término
    //Ambos if se reducen en la función seleccion
/* if (jugador == 1) {
    alert("Elegiste 🪨")
  } else if (jugador == 2) {
    alert("Elegiste 🧻")
  } else if(jugador == 3){
    alert("Elegiste ✂️")
  } else {
    alert("Elegiste perder")
  } */

/* if (pc == 1) {
    alert("PC elige 🪨")
  } else if (pc == 2) {
    alert("PC elige 🧻")
  } else if (pc == 3) {
    alert("PC elige ✂️")
  } */

    // Lo anterior puede reducirse y seguir entendiéndose en:
/* if(pc == jugador){
  alert("EMPATE")
} else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
  alert("GANASTE")
} else{
  alert("PERDISTE")
} */