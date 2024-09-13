//Christian Villegas - 1592623
let randomNumbers:number[] = [];
function randomGame(numerToGuess: number): boolean{
    
    let counter: number = 3;
    while (counter != 0){
        let random:number = Math.floor(Math.random() * 10) + 1
        randomNumbers.push(random);
        if (numerToGuess == random){
            console.log(`Ganaste el juego \nLos numeros que intentó el programa son: `);
            for (const key in randomNumbers) {
                console.log(randomNumbers[key])
            }
            return true;
        }else{
            console.log(`Te quedan ${counter} oportunidades`)
        }
        counter --;
    }

    console.log(`Perdiste el juego \n Los numeros que intentó el programa son:`)
    for (const key in randomNumbers) {
        console.log(randomNumbers[key])
    }
    return false
}



randomGame(5)
