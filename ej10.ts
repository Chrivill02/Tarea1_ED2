let carnetsInLine:string[] = []
function splitCarnet(user:string){
    let carnetInLine:string[]= user.split("EST");
    let createCarnet:string = "";
        
    for (let i = 0; i < carnetInLine.length; i++){
        
        createCarnet = createCarnet + carnetInLine[i];
    }
    return createCarnet
    
}
let userToSplit:string = "EST1592623";
console.log(`El carné es: ${splitCarnet(userToSplit)}`)