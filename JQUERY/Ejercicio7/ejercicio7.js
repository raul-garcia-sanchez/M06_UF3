$(document).ready(function () {
  $("[name = 'creardorEnlace']").click(function () {
    $.fn.createLink("http://nuevoenlace.com", "myClass");
  });

  $("[name = 'clonadorEnlace'").click(function () {
    $.fn.cloneElement($("[class = 'myClass']"));
  });

  $("[name = 'añadirAtributoEnlaceOriginal']").click(function () {
    $.fn.addAtributeDefault($("a").first(), "enlaceOriginal", "true");
  });

  $("[name = 'buttonAtributoHref']").click(function () {
    $.fn.changeAttribute(
      $("a").first(),
      "href",
      $("[name = 'atributoHref']").val()
    );
  });
});

$.fn.createLink = function (href = "", classLInk = null) {
  if (href != null && classLInk != null) {
    $("p")
      .first()
      .append(
        "<a href='" + href + "' class='" + classLInk + "'>Nuevo Enlace</a><br>"
      );
  } else {
    $("p")
      .first()
      .append("<a href='" + href + "'>Nuevo Enlace</a><br>");
  }
};

$.fn.cloneElement = function (element) {
  $("p").last().append(element.first().clone());
  $("p").last().append("<br>");
};

$.fn.addAtributeDefault = function (elemento, atributo, valor) {
  elemento.attr(atributo, valor);
};

$.fn.changeAttribute = function (elemento, atributo, valor) {
  elemento.attr(atributo, valor);
};
