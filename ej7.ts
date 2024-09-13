function factorial(numberToCalculate:number):number{
    if (numberToCalculate == 0)
        return 1
    return factorial(numberToCalculate - 1) * numberToCalculate
}
let numberToFactorial: number = 6;
console.log(`El factorial de ${numberToFactorial} es: ${factorial(numberToFactorial)} `)
