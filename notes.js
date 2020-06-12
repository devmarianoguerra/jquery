$(document).ready(function () {
  $("h1").html("Etiqueta h1");
  //document.querySelector('h1').innerHTML = 'Etiqueta h1'. <- Vanilla JS
  $(".display-4").html("desde clase");
  $("#main_title").html("desde ID");

  // $(".container h1:first").html("cambio de texto");
  // $(".container h1:last").html("cambio de texto");

  $("#main_title").addClass("text-danger");
  $("#main_title").removeClass(".display-4");
  // $("#contenido").append("<h1>Elemento final</h1>");
  // $("#contenido").prepend("<h1>Elemento inicial</h1>");
  $("#color_azul").css("color", "blue");
  $("#color_azul").css({ color: "blue", background: "grey", padding: "20px" });
  // $("#color_azul").remove();
  // $("#color_azul").hide();
  $("img").attr(
    "src",
    "data:image/jpeg;base64,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"
  );
  $("img").attr("width", "50");
});
