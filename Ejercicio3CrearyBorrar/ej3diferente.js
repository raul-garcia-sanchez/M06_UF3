let opciones = document.getElementsByName("cursos");
let elementosOcultos = document.querySelectorAll("[hidden='true']");

for(let i = 0; i < opciones.length; i++){
    opciones[i].addEventListener('change', cambiarVisualizacion);
}

function cambiarVisualizacion(event){
    
    let elementoPadre = document.getElementsByTagName("form")[0];
    let elementoPosterior = document.querySelector("[type='submit']");

    if(event.target.value == "otro"){
        insertarElemento("label", elementoPadre, elementoPosterior, "Especificar:")
        insertarElemento("input", elementoPadre, elementoPosterior);
    }
    else{
        eliminarElemento();
        
    }
    
}

//acabar ejercicio y funcion hecha añadiendo propiedades
function insertarElemento(tag, elementoPadre, elementoHermano=null, texto=null){
    let newElement = document.createElement(tag);
    if(texto){
        let textoNodo = document.createTextNode(texto);
        newElement.appendChild(textoNodo);
    }

    elementoPadre.insertBefore(newElement,elementoHermano);
}