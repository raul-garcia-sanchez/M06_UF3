$(document).ready(function () {

    $("[name = 'creardorEnlace']").click(function () {
        $.fn.createLink("http://nuevoenlace.com", "myClass");
    });

    $("[name = 'clonadorEnlace'").click(function () {
        $.fn.cloneLink();
    });
});

$.fn.createLink = function (href = "", classLInk = null) {
    if (href != null && classLInk != null) {
        $("p").first().append("<a href='" + href + "' class='" + classLInk + "'>Nuevo Enlace</a><br>");
    }
    else {
        $("p").first().append("<a href='" + href + "'>Nuevo Enlace</a><br>");
    }

};

$.fn.cloneLink = function () {
    $("p").last().append($("[class = 'myClass']").first().clone());
    $("p").last().append("<br>");
}