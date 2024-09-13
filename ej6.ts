let numbers: number[] = [5, 1, 6, 3,2, 7, 3];
let sum:number = 0;

for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${i+1} \n${numbers[i]} `);
    sum = sum + numbers[i];
}

console.log(`La suma es: ${sum}`)
