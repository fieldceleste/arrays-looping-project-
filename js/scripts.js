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
var bopGame = function (userInput) {
  var result = [];
  for (var n = 0; n <= userInput; n++) {
      if (n % 1 === 0 && n % 3 !== 0) {
          result.push("Beep");
      } else if (n % 2 === 0 && n % 3 !== 0) {
          result.push("Bop");
      } else if (n % 3 === 0) {
          result.push("Wont you be my neighbor?");
      } else {
          result.push(n);
      }
  }
  return result;

}