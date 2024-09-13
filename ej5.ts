let professors:string[] = ["Miguel", "Jose","Avelardo", "Sofia"];
let students: string[] = ["Christian", "Fernanda", "Rodrigo"];

function gretting(name:string):string{
    

    for (let i = 0; i < professors.length; i++) {
        if (name == professors[i]) {
            
            return `Hola ing. ${professors[i]}`
        }
    }
    for (let i = 0; i < students.length; i++) {
        if (name == students[i]) {
            
            return `Hola estudiante. ${students[i]}`
        }
    }
    return `Nombre no encontrado`
}

function user(name: string){
    for (let i = 0; i < professors.length; i++) {
        if (name == professors[i]) {
            
            return `CAT${professors[i]}`
        }
    }
    for (let i = 0; i < students.length; i++) {
        if (name == students[i]) {
            
            return `EST${students[i]}`
        }
    }
    return `Nombre no encontrado`
}


console.log(gretting("Miguel"))
console.log(user("Miguel"))
console.log(gretting("Fernanda"))
console.log(user("Fernanda"))

