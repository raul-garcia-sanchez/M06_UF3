var listLinks = document.getElementsByTagName('a')[0];
var listParagraph = document.getElementsByTagName('p')[0];
listLinks.onclick = function(){
    if(listLinks.innerHTML == "ocultar texto"){
        listParagraph.style.display = "none";
        listLinks.innerHTML = "mostrar texto";
    }
    else{
        listParagraph.style.display = "block";
        listLinks.innerHTML = "ocultar texto";
    }
    
}