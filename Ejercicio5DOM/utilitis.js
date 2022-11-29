function insertarElemento(tag,ElementoPadre,elementoPosterior = null,arrayPropiedades = null,texto = null,insertarElementoAntes = true){
    let nuevoElemento = document.createElement(tag);
    if (texto){
        let textoNodo = document.createTextNode(texto);
        nuevoElemento.appendChild(textoNodo);
    }
    if (arrayPropiedades){
        let claves = Object.keys(arrayPropiedades);
        for (let i = 0; i < claves.length; i++) {
            nuevoElemento.setAttribute(claves[i], arrayPropiedades[claves[i]]);    
        }
    }
    if (insertarElementoAntes){
        ElementoPadre.insertBefore(nuevoElemento,elementoPosterior);
    }
    else{
        ElementoPadre.appendChild(nuevoElemento);
    }
}
function eliminarElemento(elemento) {
    elemento.remove();
}