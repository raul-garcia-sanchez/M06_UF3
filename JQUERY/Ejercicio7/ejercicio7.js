$(document).ready(function () {
    $("[name = 'creardorEnlace'").click(function () {
      $("p").first().append("<a href='http://nuevoenlace.com' class='myClass'>Nuevo Enlace</a><br>");
    });
  
    $("[name = 'clonadorEnlace'").click(function () {
      $("p").last().append($("[class = 'myClass'").first().clone());
      $("p").last().append("<br>");
    });

    $("[name = 'añadirAtributoEnlaceOriginal'").click(function () {
        $("a").first().attr("enlaceOriginal","true");
    })

    $("[name = 'buttonAtributoHref'").click(function () {
        $("a").first().attr("href",$("[name = 'atributoHref'").val())
    })
  
  });
  