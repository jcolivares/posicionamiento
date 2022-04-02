//Ejemplo de javascript

function generarAleatorio(min, max){
    let numero = Math.random()*max
    if(numero<min)
        numero+=min
    
    return Math.floor(numero);
}

function generarToken(){
    
    let limite = 12
    let token=""
    
    for(i=0; i<limite; i++){
        let numero = generarAleatorio(32,128)
        caracter = String.fromCharCode(numero)
        token+=caracter
    }
    
    return token;
}

function escribir(){
    nombre = document.getElementById("nombre")
    n = nombre.value
    //alert("Escribiendo: "+n)
    nombre.value=nombre.value.toUpperCase()
        
    sem = document.getElementById("sem")
    sem.innerHTML="<p>"+n+"</p>"
}

function main(){
    //alert("Hola mundo!!!");
    
    var titulo = document.getElementById("titulo")
    titulo.addEventListener("click", presioname)
    
    titulo.innerHTML+="<p>"+generarToken()+"</p>"
    
    var semestre = document.getElementById("semestre")
    semestre.addEventListener("change", function(){
        //let sem = semestre.value
        let s = this.value
        //alert('Cambiando...'+s)
        
        let sem = document.getElementById("sem")
        sem.innerHTML="<h1>"+s+"</h1>"
        
        s = parseInt(s)
        
        /*
        if(s%2==0){
            sem.style="background: red";
        }else{
            sem.style="background: yellow";
        }
        */
        
        if(s%2==0){
            sem.className="par";
        }else{
            sem.className="impar"
        }
    })
    
    let nombre = document.getElementById("nombre")
    nombre.addEventListener("keyup", escribir)
    
    
}

//window.addEventListener(main(), "load", false)

function presioname(){
    alert("entrando...")
    var sem = document.getElementById("semestre");
}

window.addEventListener("load", main)