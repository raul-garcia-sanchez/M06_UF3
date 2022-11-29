var btnConstruir = document.getElementsByName("construir")[0];
btnConstruir.addEventListener("click", seguirProgresion);

var btnDestruir = document.getElementsByName("destruir")[0];
btnDestruir.addEventListener("click", eliminarElementoProgresion);

var btnDestruirPosicion = document.getElementsByName("btnDestruirPosicion")[0];
btnDestruirPosicion.addEventListener("click", function () {
  eliminarElementoProgresion(false);
});

//Evento click izquierdo
var lista = document.getElementsByTagName("ul")[0];
lista.addEventListener("mousedown", function(event){
    if(event.button == 0){
        seguirProgresion();
    }
});

//Evento click derecho

for(let i = 0; i < lista.children.length; i++){
    lista.children[i].addEventListener("mouseDown", function(event){
        event.preventDefault();
        if(event.button == 2){
            console.log("ei");
        }
    })
}
console.log(lista.children);

function seguirProgresion() {
  var ulProgresion = document.getElementsByTagName("ul")[0];
  var liUltimo = ulProgresion.lastElementChild;
  if (liUltimo) {
    var ultimoValor = liUltimo.innerHTML;
  } else {
    var ultimoValor = 1;
  }

  insertarElemento("li", ulProgresion, liUltimo, null, ultimoValor * 2, false);
}
function eliminarElementoProgresion(eliminarUltimo = true) {
  var ulProgresion = document.getElementsByTagName("ul")[0];
  var posicionEliminar = document.getElementsByName("inpDestruirPosicion")[0]
    .value;
  var liEliminar = ulProgresion.children;

  if (eliminarUltimo) {
    eliminarElemento(liEliminar[liEliminar.length - 1]);
  } 
  else {
    eliminarElemento(liEliminar[posicionEliminar - 1]);
  }
}
