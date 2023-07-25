let palabra_usuario = prompt("Ingrese una palabra")

let conjunto_de_chequeo=["á", "é", "í", "ó", "ú"]

let chequeo=palabra_usuario.split("")
let newpalabra_usuario = []
let spanish_word = false


for(let i=0;i<chequeo.length;i++){
    newpalabra_usuario.push(chequeo[i].toLowerCase())
}



for(let i=0;i<newpalabra_usuario.length;i++){
    for(let j =0;j<conjunto_de_chequeo.length;j++){
        if (newpalabra_usuario[i]===conjunto_de_chequeo[j]){
            spanish_word=true
        }


    }
}


if(spanish_word===true){
    console.log("es una palabra en español.")
}else{
    console.log("es una palabra en ingles.")
}