let opciones = document.getElementsByName("cursos");
let elementosOcultos = document.querySelectorAll("[hidden='true']");

for(let i = 0; i < opciones.length; i++){
    opciones[i].addEventListener('click', cambiarVisualizacion);
}

function cambiarVisualizacion(event){
    console.log(event);
    for(let i = 0; i < elementosOcultos.length; i++){
        if(event.target.value == "otro"){
            elementosOcultos[i].hidden = false;
        }
        else{
            elementosOcultos[i].hidden = true;
        }
    }
}