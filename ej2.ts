//Christian Villegas - 1592623
function suma(numero1:number, numero2: number): number{
    return numero1 + numero2
}

function resta(numero1: number, numero2: number):number{
    return numero1 - numero2
}

function multi(numero1: number, numero2: number):number{
    return numero1 * numero2
}

function div(numero1: number, numero2: number): number{
    return numero1 / numero2
}

function mod(numero1: number, numero2:number):number{
    return numero1 % numero2
}
let numero1: number = 10;
let numero2: number = 5;


console.log(`Suma: ${numero1} + ${numero2} = ${suma(numero1,numero2)}`)
console.log(`Resta: ${numero1} - ${numero2} = ${resta(numero1,numero2)}`)
console.log(`Multiplicación: ${numero1} * ${numero2} = ${multi(numero1,numero2)}`)
console.log(`División: ${numero1} / ${numero2} = ${div(numero1,numero2)}`)
console.log(`Módulo: ${numero1} % ${numero2} = ${mod(numero1,numero2)}`)


