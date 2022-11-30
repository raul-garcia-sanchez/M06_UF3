var btnConstruir = document.getElementsByName("construir")[0];
btnConstruir.addEventListener("click", seguirProgresion);

var btnDestruir = document.getElementsByName("destruir")[0];
btnDestruir.addEventListener("click", eliminarElementoProgresion);

var btnDestruirPosicion = document.getElementsByName("btnDestruirPosicion")[0];
btnDestruirPosicion.addEventListener("click", function () {
  eliminarElementoProgresion(false);
});

//Evento click izquierdo
var listaUl = document.getElementsByTagName("ul")[0];
listaUl.addEventListener("mousedown", function (event) {
  if (event.button == 0) {
    seguirProgresion();
  }
});

console.log(listaUl[1]);

//Quito evento click derecho
document.addEventListener("contextmenu", (event) => event.preventDefault());

//Evento click derecho
for (let i = 0; i < listaUl.children.length; i++) {
  listaUl.children[i].addEventListener("mousedown", function (event) {
    if (event.button == 2) {
      console.log(listaUl.children[i]);
      eliminarElemento(listaUl.children[i]);
    }
  });
}

function seguirProgresion() {
  var liUltimo = listaUl.lastElementChild;
  if (liUltimo) {
    var ultimoValor = liUltimo.innerHTML;
  } else {
    var ultimoValor = 1;
  }
  //console.log(listaUl.children);
  insertarElemento("li", listaUl, liUltimo, null, ultimoValor * 2, false);
  var liDespuesDeAñadir = listaUl.lastElementChild;
  liDespuesDeAñadir.addEventListener("mousedown", function (event) {
    if (event.button == 2) {
        console.log(liDespuesDeAñadir);
      eliminarElemento(liDespuesDeAñadir);
    }
  });
}
function eliminarElementoProgresion(eliminarUltimo = true) {
  var posicionEliminar = document.getElementsByName("inpDestruirPosicion")[0]
    .value;
  var liEliminar = listaUl.children;

  if (eliminarUltimo) {
    eliminarElemento(liEliminar[liEliminar.length - 1]);
  } else {
    eliminarElemento(liEliminar[posicionEliminar - 1]);
  }
}
