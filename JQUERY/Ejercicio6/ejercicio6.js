$(document).ready(function () {
  $("[name = 'creardorEnlace'").click(function () {
    $("p").first().after("<a href='http://nuevoenlace.com' class='myClass'>Nuevo Enlace</a>");
    $("a").first().after("<br>");
  });



});
