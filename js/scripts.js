//User Interface (Front End) Logic
$(document).ready(function () {
  $(".bopform").submit(function () {
      event.preventDefault();
      $("ul#list").empty();
      var userInput = parseInt($("#input-number").val());
      var output = bopGame(userInput);
      for (var n = 1; n <= userInput; n++) {
          $("#list").append("<li>" + output[n] + "</li>");
      }
      $("#reload").click(function () {
          location.reload();
      });
  });
});

// Business (Backend) Logic  
var pongGame = function (userInput) {
  var result = [];
  for (var n = 0; n <= userInput; n++) {
      if (n % 3 === 0 && n % 15 !== 0) {
          result.push("Ping");
      } else if (n % 5 === 0 && n % 15 !== 0) {
          result.push("Pong");
      } else if (n % 15 === 0) {
          result.push("Ping-Pong");
      } else {
          result.push(n);
      }
  }
  return result;

}