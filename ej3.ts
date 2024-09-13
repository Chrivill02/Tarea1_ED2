//Christian Villegas - 1592623
function promedio(numeros:number[]): number{
    let suma: number = 0;
    let resultado: number = 0;
    for (const i in numeros) {
        suma = suma + numeros[i]
        
    }
    resultado = suma / numeros.length
    return resultado;
}

let numeros: number[] = [65, 70, 50, 78, 57, 70];
console.log(`El promedio es: ${promedio(numeros)}`)
if (promedio(numeros) >= 65){
    console.log("Ganó el semestre!!")
}else if(promedio(numeros) >= 35 && promedio(numeros) < 65){
    console.log("Tiene segunda oportunidad")
}else{
    console.log("Perdió el semestre :c")
}