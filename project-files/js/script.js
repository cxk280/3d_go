 console.log("Script connected!");

$( document ).ready(function() {
  // All my scripts here.

  // var playerColor = prompt("Please enter either white or black as your player color");

  // while ((playerColor !== "white") && (playerColor !== "black"))  {
  //   playerColor = prompt("You did not enter an appropriate color. Please try again. Enter either white or black");
  //   };

  // $('.square').on("click", function() {
  //   console.log("Click!");
  //   if (playerColor === "white")  {
  //     $(this).append($('<div>').addClass("white-piece"));
  //   };
  //   if (playerColor === "black")  {
  //     $(this).append($('<div>').addClass("black-piece"));
  //   };
  // })

  //My three.js objects started with the code in the tutorial at http://threejs.org/docs/#Manual/Introduction/Creating_a_scene. I then played with this code referring to the rest of the three.js documentation to create what I need.

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  var cameraControls;
  var clock = new THREE.Clock();

  var renderer = new THREE.WebGLRenderer({alpha:true});
  //For help designing clear renderer, referred to http://stackoverflow.com/questions/20495302/transparent-background-with-three-js
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0xffffff, 0 );
  document.body.appendChild( renderer.domElement );

  var geometry1 = new THREE.SphereGeometry( 5, 32, 32 );
  var material1 = new THREE.MeshBasicMaterial( { color: 0x000000 } );
  var sphere1 = new THREE.Mesh( geometry1, material1 );
  //This helped me figure out how to set the position of the objects: http://stackoverflow.com/questions/14223249/how-can-i-set-the-position-of-a-mesh-before-i-add-it-to-the-scene-in-three-js
  sphere1.position.set(10,10,0);
  scene.add( sphere1 );

  var geometry2 = new THREE.SphereGeometry( 5, 32, 32 );
  var material2 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
  var sphere2 = new THREE.Mesh( geometry2, material2 );
  sphere1.position.set(-10,-5,0);
  scene.add( sphere2 );

  var geometry3 = new THREE.PlaneGeometry( 72, 72, 32 );
  var material3 = new THREE.MeshBasicMaterial( {color: 0xdeb887, side: THREE.DoubleSide} );
  var plane1 = new THREE.Mesh( geometry3, material3 );
  scene.add( plane1 );

  camera.position.z = 30;
  cameraControls = new THREE.TrackballControls(camera, renderer.domElement);
  cameraControls.target.set(0,0,0);
  //I learned how to control the camera with the mouse here: http://benchung.com/trackball-controls-three-js. See also the notes in the trackball-controls.js file./


  function render() {
    var delta = clock.getDelta();
    requestAnimationFrame( render );
    cameraControls.update(delta);
    renderer.render( scene, camera );
    sphere1.rotation.x += 0.03;
    sphere1.rotation.y += 0.03;
    // plane1.rotation.x += 0.005;
    // plane1.rotation.y += 0.005;
    plane1.center;
    plane1.rotation.x = 15;
    // sphere2.rotation.x += 0.03;
    // sphere2.rotation.y += 0.03;
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
