let opciones = document.getElementsByName("cursos");
let elementosOcultos = document.querySelectorAll("[hidden='true']");

for(let i = 0; i < opciones.length; i++){
    opciones[i].addEventListener('change', cambiarVisualizacion);
}

function cambiarVisualizacion(event){
    
    let elementoPadre = document.getElementsByTagName("form")[0];
    let elementoPosterior = document.querySelector("[type='submit']");

    if(event.target.value == "otro"){
        let atributos = new Map();
        atributos.set("class","removed");
        atributos.set("id","removed");
        insertarElemento("label", elementoPadre, elementoPosterior, "Especificar:", atributos)
        insertarElemento("input", elementoPadre, elementoPosterior, null, atributos);
    }
    else{
        eliminarElemento();
        
    }
}

//acabar ejercicio y funcion hecha añadiendo propiedades
function insertarElemento(tag, elementoPadre, elementoHermano=null, texto=null, diccionarioAtributos=null){
    
    let newElement = document.createElement(tag);
    if(texto){
        let textoNodo = document.createTextNode(texto);
        newElement.appendChild(textoNodo);
    }
    if(diccionarioAtributos){
        for(let key of diccionarioAtributos.keys()){
            if(key == "class"){
                newElement.classList.add(diccionarioAtributos.get(key));
            }
            else if(key == "id"){
                newElement.setAttribute(key, diccionarioAtributos.get(key));
            }
        }
    }
    elementoPadre.insertBefore(newElement,elementoHermano);
}

function eliminarElemento(){
    let elementosOcultos = document.querySelectorAll("[class='removed']");
    for(let i = 0; i < elementosOcultos.length; i++){
        elementosOcultos[i].remove();
    }

}