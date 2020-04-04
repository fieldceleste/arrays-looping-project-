// <!--Front End-user Logic-->

$(document).ready(function() {
  $(".bopForm").submit(function(event) {
    event.preventDefault();
    $("ul#list").empty();
    var userInput = parseInt($("#input-number").val());
    var bopOutput = bopGame(userInput);
    $("ul#list").text(bopOutput);

    $("#reload").click(function () {
      location.reload();
    });
  });
});

// <!--Business Logic--->

function bopGame(input) {
  var numberInput = [];
  var outputWord = [];
  $("ul#list").text("");
  for (var index = 0; index <= input; index++) {
    var wordInput = index.toString();
   numberInput.push(wordInput)
  };

  numberInput.forEach(function(stringWord) {
    if ((stringWord.includes("3"))) {
      outputWord.push("Wont you be my neighbor?");
    } else if ((stringWord.includes("2"))) {
      outputWord.push("boop");
    } else if ((stringWord.includes("1"))) {
      outputWord.push("beep");
    } else {
      outputWord.push(stringWord);
    }
  })
  return outputWord.join(", ")
};