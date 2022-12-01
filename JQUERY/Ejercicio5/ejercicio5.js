$(document).ready(function () {
  $("[name = 'construir'").click(function () {
    $("li")
      .last()
      .after("<li>" + $("li").last().text() * 2 + "</li>");
  });

  $("[name = 'borrarFirst']").click(function () {
    $("li").first().remove();
  });

  $("[name = 'borraSeleccion']").click(function () {
    $("li")
      .eq($("[name = 'elementToDelete']").val() - 1)
      .remove();
  });
});
