$(document).ready(function () {
  $("[name = 'creardorEnlace']").click(function () {
    $.fn.createLink("http://nuevoenlace.com", "myClass");
  });

  $("[name = 'clonadorEnlace'").click(function () {
    $.fn.cloneElement($("[class = 'myClass']"));
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
