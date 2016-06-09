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

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer({alpha:true});
  //For help designing clear renderer, referred to http://stackoverflow.com/questions/20495302/transparent-background-with-three-js
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0xffffff, 0 );
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.SphereGeometry( 5, 32, 32 );
  var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
  var sphere = new THREE.Mesh( geometry, material );
  scene.add( sphere );

  camera.position.z = 30;

  function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
    sphere.rotation.x += 0.03;
    sphere.rotation.y += 0.03;
  }
  render();
});

/*Pseudocode
1. Create a 9x9 game board (the smallest standard Go board) using the tic tac toe board from our classwork for reference. Create with HTML and CSS. DONE
2. Create a white circle and black circle (game pieces) in CSS. DONE
3. Add event listeners to each square to place a piece inside. DONE
4. Add a randomizer function to choose random moves by the computer.
5. Add a "pass turn" button.
6. Add a counter for captured pieces. Include a bonus for the player going second.
*/
