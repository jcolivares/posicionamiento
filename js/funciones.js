//Ejemplo de javascript



function main(){
    //alert("Hola mundo!!!");
    
    var titulo = document.getElementById("titulo")
    titulo.addEventListener(presioname(), "click", false)
    
    
}

//window.addEventListener(main(), "load", false)

function presioname(){
    alert("entrando...")
    var sem = document.getElementById("semestre");
}

window.addEventListener("load", main)