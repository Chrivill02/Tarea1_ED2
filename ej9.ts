import { Persona } from "./ej8";
let persona1:Persona = new Persona()
let persona2:Persona = new Persona()
let persona3:Persona = new Persona()
persona1.setName("Christian")
persona2.setName("Miguel")
persona3.setName("Fernanda")

persona1.setAge(21)
persona2.setCity("Quetgo")
persona3.setCity("Xela")

console.log(`Persona 1: ${persona1.getName()}\nEdad: ${persona1.getAge()}`)

console.log(`Persona 2: ${persona2.getName()}\nCiudad: ${persona2.getCity()}`)

console.log(`Persona 3: ${persona3.getName()}\nCiudad: ${persona3.getCity()}`)


