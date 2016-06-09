 console.log("Script connected!");

$( document ).ready(function() {
  // All my scripts here.

  var playerColor = prompt("Please enter either white or black as your player color");

  while ((playerColor !== "white") && (playerColor !== "black"))  {
    playerColor = prompt("You did not enter an appropriate color. Please try again. Enter either white or black");
    };

  $('.square').on("click", function() {
    console.log("Click!");
    if (playerColor === "white")  {
      $(this).append($('<div>').addClass("white-piece"));
    };
    if (playerColor === "black")  {
      $(this).append($('<div>').addClass("black-piece"));
    };
  })

});

/*Pseudocode
1. Create a 9x9 game board (the smallest standard Go board) using the tic tac toe board from our classwork for reference. Create with HTML and CSS. DONE
2. Create a white circle and black circle (game pieces) in CSS. DONE
3. Add event listeners to each square to place a piece inside. DONE
4. Add a randomizer function to choose random moves by the computer.
5. Add a "pass turn" button.
6. Add a counter for captured pieces. Include a bonus for the player going second.
*/
