// <!--Front End-user Logic-->

$(document).ready(function() {
  $(".bopForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input-number").val());
    var output = bopGame(userInput);
    $("#list").text(output);

    // $("#reload").click(function () {
    //   location.reload();
    // });
  });
});

// <!--Business Logic--->

function bopGame(input) {
  var numberInput = [];
  var outputWord = [];
  $("ul#list").text("");
  for (var index = 0; index <= input; index++) {
    var numberInput = index.toString();
   numberInput.push(stringInput)
  };

  numberInput.forEach(function(stringSentence) {
    if ((stringSentence.includes("3"))) {
      outputWord.push("Wont you be my neighbor?");
    } else if ((stringSentence.includes("2"))) {
      outputWord.push("boop");
    } else if ((stringSentence.includes("1"))) {
      outputWord.push("beep");
    } else {
      outputWord.push(stringSentence);
    }
  })
  return outputWord.join(", ")
};