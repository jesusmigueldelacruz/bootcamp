let num = 3
let num2 = "6"

console.log(num * num2)
console.log(num2 * num)

//cuál es el resultado del console?
var profesor = "Jhoswe";
let teacher = "Jose";
if (true) {
  var profesor = "The Flash";
  let teacher = "Reverse Flash";
  console.log(profesor); //The Flash
  console.log(teacher); //Reverse Flash
}
console.log(profesor); //The Flash (se sobrescribe)
console.log(teacher);  //Jose

//Cuál es el resultado de: 

console.log(6 / "3")
console.log("2" * "3")

//no mezclar string con number
console.log(4 + 5 + "px") 

let number = 4 + 5;
let text = "px";
console.log()



console.log("4" - 2)
console.log("4px" - 2)
console.log(7 / 0)
console.log({}[0])
console.log(parseInt("09"))
console.log(5 && 2)
console.log(2 && 5 )
console.log(5 || 0)
console.log(0 || 5)
console.log([3] + [3] - [10])
console.log(3 > 2 > 1 )
console.log([] == ![])
console.log([] === ![])
