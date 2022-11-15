var enlace = document.getElementsByTagName("a")[0];
var parrafo = document.getElementsByTagName("p")[0];
var count = 0;
enlace.addEventListener("click", aumentoCount);

function aumentoCount(){
    count = count + 1;
    if(count % 2 != 0){
        parrafo.style.display = "none";
        enlace.innerHTML = "mostrar texto";
    }
    else{
        parrafo.style.display = "block";
        enlace.innerHTML = "ocultar texto";
    }
}




