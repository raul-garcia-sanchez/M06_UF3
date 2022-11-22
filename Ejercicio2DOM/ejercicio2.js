var link = document.getElementsByTagName('a')[0];
var listdivs = document.getElementsByTagName('div');
link.addEventListener('click', changeDivVisibility);

function changeDivVisibility(){
    if(isTextVisible()){
        ocultText();
    }
    else{
        showText();
    }
}

function isTextVisible(){
    return link.innerHTML == "ocultar texto";
}

function ocultText(){
    for(let i = 0; i < listdivs.length; i++){
        listdivs[i].style.display = "none";
    }
    changeTextLInk("mostrar texto");
}

function changeTextLInk(textLink){
    link.innerHTML = textLink;
}

function showText(){
    for(let i = 0; i < listdivs.length; i++){
        listdivs[i].style.display = "block";
    }
    changeTextLInk("ocultar texto");
}