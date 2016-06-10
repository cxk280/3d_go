 console.log("Script connected!");

$( document ).ready(function() {
  // All my scripts here.

  // Code for making the board in CSS.



  // $('.square').on("click", function() {
  //   console.log("Click!");
  //   if (playerColor === "white")  {
  //     $(this).append($('<div>').addClass("white-piece"));
  //   };
  //   if (playerColor === "black")  {
  //     $(this).append($('<div>').addClass("black-piece"));
  //   };
  // })

  //My three.js objects started with the code in the tutorial at http://threejs.org/docs/#Manual/Introduction/Creating_a_scene. I then played with this code referring to the rest of the three.js documentation as well as various posts on Stack Overflow and elsewhere (cited throughout this code) to create what I need.
    var whichTurn = 0;
    var centerPoints = [[-63.5, -63.5, 1], [-47.5, -63.5, 1], [-31.5, -63.5, 1], [-15.5, -63.5, 1], [0.5, -63.5, 1], [16.5, -63.5, 1], [32.5, -63.5, 1], [48.5, -63.5, 1], [64.5, -63.5, 1], [-63.5, -47.5, 1], [-47.5, -47.5, 1], [-31.5, -47.5, 1], [-15.5, -47.5, 1], [0.5, -47.5, 1], [16.5, -47.5, 1], [32.5, -47.5, 1], [48.5, -47.5, 1], [64.5, -47.5, 1], [-63.5, -31.5, 1], [-47.5, -31.5, 1], [-31.5, -31.5, 1], [-15.5, -31.5, 1], [0.5, -31.5, 1], [16.5, -31.5, 1], [32.5, -31.5, 1], [48.5, -31.5, 1], [64.5, -31.5, 1], [-63.5, -15.5, 1], [-47.5, -15.5, 1], [-31.5, -15.5, 1], [-15.5, -15.5, 1], [0.5, -15.5, 1], [16.5, -15.5, 1], [32.5, -15.5, 1], [48.5, -15.5, 1], [64.5, -15.5, 1], [-63.5, 0.5, 1], [-47.5, 0.5, 1], [-31.5, 0.5, 1], [-15.5, 0.5, 1], [0.5, 0.5, 1], [16.5, 0.5, 1], [32.5, 0.5, 1], [48.5, 0.5, 1], [64.5, 0.5, 1], [-63.5, 16.5, 1], [-47.5, 16.5, 1], [-31.5, 16.5, 1], [-15.5, 16.5, 1], [0.5, 16.5, 1], [16.5, 16.5, 1], [32.5, 16.5, 1], [48.5, 16.5, 1], [64.5, 16.5, 1], [-63.5, 32.5, 1], [-47.5, 32.5, 1], [-31.5, 32.5, 1], [-15.5, 32.5, 1], [0.5, 32.5, 1], [16.5, 32.5, 1], [32.5, 32.5, 1], [48.5, 32.5, 1], [64.5, 32.5, 1], [-63.5, 48.5, 1], [-47.5, 48.5, 1], [-31.5, 48.5, 1], [-15.5, 48.5, 1], [0.5, 48.5, 1], [16.5, 48.5, 1], [32.5, 48.5, 1], [48.5, 48.5, 1], [64.5, 48.5, 1], [-63.5, 64.5, 1], [-47.5, 64.5, 1], [-31.5, 64.5, 1], [-15.5, 64.5, 1], [0.5, 64.5, 1], [16.5, 64.5, 1], [32.5, 64.5, 1], [48.5, 64.5, 1], [64.5, 64.5, 1]];

    // var row2=[[-63.5, -47.5, 1],[-47.5, -47.5, 1],[-31.5, -47.5, 1],[-15.5, -47.5, 1],[0.5, -47.5, 1],[16.5, -47.5, 1],[32.5, -47.5, 1],[48.5, -47.5, 1],[64.5, -47.5, 1]];
    // var row3=[[-63.5, -31.5, 1],[-47.5, -31.5, 1],[-31.5, -31.5, 1],[-15.5, -31.5, 1],[0.5, -31.5, 1],[16.5, -31.5, 1],[32.5, -31.5, 1],[48.5, -31.5, 1],[64.5, -31.5, 1]];
    // var row4=[[-63.5, -15.5, 1],[-47.5, -15.5, 1],[-31.5, -15.5, 1],[-15.5, -15.5, 1],[0.5, -15.5, 1],[16.5, -15.5, 1],[32.5, -15.5, 1],[48.5, -15.5, 1],[64.5, -15.5, 1]];
    // var row5=[[-63.5, 0.5, 1],[-47.5, 0.5, 1],[-31.5, 0.5, 1],[-15.5, 0.5, 1],[0.5, 0.5, 1],[16.5, 0.5, 1],[32.5, 0.5, 1],[48.5, 0.5, 1],[64.5, 0.5, 1]];
    // var row6=[[-63.5, 16.5, 1],[-47.5, 16.5, 1],[-31.5, 16.5, 1],[-15.5, 16.5, 1],[0.5, 16.5, 1],[16.5, 16.5, 1],[32.5, 16.5, 1],[48.5, 16.5, 1],[64.5, 16.5, 1]];
    // var row7=[[-63.5, 32.5, 1],[-47.5, 32.5, 1],[-31.5, 32.5, 1],[-15.5, 32.5, 1],[0.5, 32.5, 1],[16.5, 32.5, 1],[32.5, 32.5, 1],[48.5, 32.5, 1],[64.5, 32.5, 1]];
    // var row8=[[-63.5, 48.5, 1],[-47.5, 48.5, 1],[-31.5, 48.5, 1],[-15.5, 48.5, 1],[0.5, 48.5, 1],[16.5, 48.5, 1],[32.5, 48.5, 1],[48.5, 48.5, 1],[64.5, 48.5, 1]];
    // var row9=[[-63.5, 64.5, 1],[-47.5, 64.5, 1],[-31.5, 64.5, 1],[-15.5, 64.5, 1],[0.5, 64.5, 1],[16.5, 64.5, 1],[32.5, 64.5, 1],[48.5, 64.5, 1],[64.5, 64.5, 1]];

    var randomizer;

    var playerColor = prompt("Please enter either white or black as your player color");
    while ((playerColor !== "white") && (playerColor !== "black"))  {
    playerColor = prompt("You did not enter an appropriate color. Please try again. Enter either white or black");
    };

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    var cameraControls;
    var clock = new THREE.Clock();


    //RENDERER VARIABLE AND PROPERTIES
    var renderer = new THREE.WebGLRenderer({alpha:true});
      //For help designing clear renderer, referred to http://stackoverflow.com/questions/20495302/transparent-background-with-three-js
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.setClearColor( 0xffffff, 0 );
      document.body.appendChild( renderer.domElement );

    //GAME PIECES
    // var geometry1 = new THREE.SphereGeometry( 5, 32, 32 );
    //   var material1 = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    //   var sphere1 = new THREE.Mesh( geometry1, material1 );
    //   //This helped me figure out how to set the position of the objects: http://stackoverflow.com/questions/14223249/how-can-i-set-the-position-of-a-mesh-before-i-add-it-to-the-scene-in-three-js
    //   sphere1.position.set(0,0,0);
    //   scene.add( sphere1 );

    // var geometry2 = new THREE.SphereGeometry( 5, 32, 32 );
    //   var material2 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    //   var sphere2 = new THREE.Mesh( geometry2, material2 );
    //   sphere2.position.set(0,-16,0);
    //   scene.add( sphere2 );

    //GAME BOARD (PLANE)
    var geometry1 = new THREE.PlaneGeometry( 144, 144 );
      var material1 = new THREE.MeshBasicMaterial( {color: 0xdeb887, side: THREE.DoubleSide} );
      var plane1 = new THREE.Mesh( geometry1, material1 );
      scene.add( plane1 );

    //GAME BOARD (LINES);

    //when y changes, it is horizontal. horLine1 is at bottom
    //when x changes, it is vertical. verLine 1 is at left

    var material6 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry6 = new THREE.Geometry();
      geometry6.vertices.push(
        new THREE.Vector3( -71, 71, 1 ),
        new THREE.Vector3( 0, 71, 1 ),
        new THREE.Vector3( 71, 71, 1 )
      );

      var horLine10 = new THREE.Line( geometry6, material6 );
      scene.add( horLine10 );

    var material5 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry5 = new THREE.Geometry();
      geometry5.vertices.push(
        new THREE.Vector3( -71, 56, 1 ),
        new THREE.Vector3( 0, 56, 1 ),
        new THREE.Vector3( 71, 56, 1 )
      );

      var horLine9 = new THREE.Line( geometry5, material5 );
      scene.add( horLine9 );

    var material4 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry4 = new THREE.Geometry();
      geometry4.vertices.push(
        new THREE.Vector3( -71, 40, 1 ),
        new THREE.Vector3( 0, 40, 1 ),
        new THREE.Vector3( 71, 40, 1 )
      );

      var horLine8 = new THREE.Line( geometry4, material4 );
      scene.add( horLine8 );

    var material3 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry3 = new THREE.Geometry();
      geometry3.vertices.push(
        new THREE.Vector3( -71, 24, 1 ),
        new THREE.Vector3( 0, 24, 1 ),
        new THREE.Vector3( 71, 24, 1 )
      );

      var horLine7 = new THREE.Line( geometry3, material3 );
      scene.add( horLine7 );

    var material2 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry2 = new THREE.Geometry();
      geometry2.vertices.push(
        new THREE.Vector3( -71, 8, 1 ),
        new THREE.Vector3( 0, 8, 1 ),
        new THREE.Vector3( 71, 8, 1 )
      );

      var horLine6 = new THREE.Line( geometry2, material2 );
      scene.add( horLine6 );

    var material7 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry7 = new THREE.Geometry();
      geometry7.vertices.push(
        new THREE.Vector3( -71, -8, 1 ),
        new THREE.Vector3( 0, -8, 1 ),
        new THREE.Vector3( 71, -8, 1 )
      );

      var horLine5 = new THREE.Line( geometry7, material7 );
      scene.add( horLine5 );

    var material8 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry8 = new THREE.Geometry();
      geometry8.vertices.push(
        new THREE.Vector3( -71, -24, 1 ),
        new THREE.Vector3( 0, -24, 1 ),
        new THREE.Vector3( 71, -24, 1 )
      );

      var horLine4 = new THREE.Line( geometry8, material8 );
      scene.add( horLine4 );

    var material9 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry9 = new THREE.Geometry();
      geometry9.vertices.push(
        new THREE.Vector3( -71, -40, 1 ),
        new THREE.Vector3( 0, -40, 1 ),
        new THREE.Vector3( 71, -40, 1 )
      );

      var horLine3 = new THREE.Line( geometry9, material9 );
      scene.add( horLine3 );

    var material10 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry10 = new THREE.Geometry();
      geometry10.vertices.push(
        new THREE.Vector3( -71, -56, 1 ),
        new THREE.Vector3( 0, -56, 1 ),
        new THREE.Vector3( 71, -56, 1 )
      );

      var horLine2 = new THREE.Line( geometry10, material10 );
      scene.add( horLine2 );

    var material11 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry11 = new THREE.Geometry();
      geometry11.vertices.push(
        new THREE.Vector3( -71, -71, 1 ),
        new THREE.Vector3( 0, -71, 1 ),
        new THREE.Vector3( 71, -71, 1 )
      );

      var horLine1 = new THREE.Line( geometry11, material11 );
      scene.add( horLine1 );

    var material12 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry12 = new THREE.Geometry();
      geometry12.vertices.push(
        new THREE.Vector3( 71, -71, 1 ),
        new THREE.Vector3( 71, 0, 1 ),
        new THREE.Vector3( 71, 71, 1 )
      );

      var verLine10 = new THREE.Line( geometry12, material12 );
      scene.add( verLine10 );

    var material16 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry16 = new THREE.Geometry();
      geometry16.vertices.push(
        new THREE.Vector3( 56, -71, 1 ),
        new THREE.Vector3( 56, 0, 1 ),
        new THREE.Vector3( 56, 71, 1 )
      );

      var verLine9 = new THREE.Line( geometry16, material16 );
      scene.add( verLine9 );

    var material15 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry15 = new THREE.Geometry();
      geometry15.vertices.push(
        new THREE.Vector3( 40, -71, 1 ),
        new THREE.Vector3( 40, 0, 1 ),
        new THREE.Vector3( 40, 71, 1 )
      );

      var verLine8 = new THREE.Line( geometry15, material15 );
      scene.add( verLine8 );

    var material14 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry14 = new THREE.Geometry();
      geometry14.vertices.push(
        new THREE.Vector3( 24, -71, 1 ),
        new THREE.Vector3( 24, 0, 1 ),
        new THREE.Vector3( 24, 71, 1 )
      );

      var verLine7 = new THREE.Line( geometry14, material14 );
      scene.add( verLine7 );

    var material21 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry21 = new THREE.Geometry();
      geometry21.vertices.push(
        new THREE.Vector3( 8, -71, 1 ),
        new THREE.Vector3( 8, 0, 1 ),
        new THREE.Vector3( 8, 71, 1 )
      );

      var verLine6 = new THREE.Line( geometry21, material21 );
      scene.add( verLine6 );

    var material13 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry13 = new THREE.Geometry();
      geometry13.vertices.push(
        new THREE.Vector3( -8, -71, 1 ),
        new THREE.Vector3( -8, 0, 1 ),
        new THREE.Vector3( -8, 71, 1 )
      );

      var verLine5 = new THREE.Line( geometry13, material13 );
      scene.add( verLine5 );

    var material17 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry17 = new THREE.Geometry();
      geometry17.vertices.push(
        new THREE.Vector3( -24, -71, 1 ),
        new THREE.Vector3( -24, 0, 1 ),
        new THREE.Vector3( -24, 71, 1 )
      );

      var verLine4 = new THREE.Line( geometry17, material17 );
      scene.add( verLine4 );

    var material18 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry18 = new THREE.Geometry();
      geometry18.vertices.push(
        new THREE.Vector3( -40, -71, 1 ),
        new THREE.Vector3( -40, 0, 1 ),
        new THREE.Vector3( -40, 71, 1 )
      );

      var verLine3 = new THREE.Line( geometry18, material18 );
      scene.add( verLine3 );

    var material19 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry19 = new THREE.Geometry();
      geometry19.vertices.push(
        new THREE.Vector3( -56, -71, 1 ),
        new THREE.Vector3( -56, 0, 1 ),
        new THREE.Vector3( -56, 71, 1 )
      );

      var verLine2 = new THREE.Line( geometry19, material19 );
      scene.add( verLine2 );

    var material20 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry20 = new THREE.Geometry();
      geometry20.vertices.push(
        new THREE.Vector3( -71, -71, 1 ),
        new THREE.Vector3( -71, 0, 1 ),
        new THREE.Vector3( -71, 71, 1 )
      );

      var verLine1 = new THREE.Line( geometry20, material20 );
      scene.add( verLine1 );

    //RAYCASTING (MAKING CLICKABLE AND RESPONSIVE)
    //Building off tutorial at https://soledadpenades.com/articles/three-js-tutorials/object-picking/
    //Since projector gave me an error, I found on this post that the newest version of three.js had removed it and how to fix it: http://stackoverflow.com/questions/29366109/three-js-three-projector-has-been-moved-to
    //This also helped figure out how to get past the removal of projector: https://github.com/mrdoob/three.js/issues/5587
    //Also referred here: http://barkofthebyte.azurewebsites.net/post/2014/05/05/three-js-projecting-mouse-clicks-to-a-3d-scene-how-to-do-it-and-how-it-works
    var raycaster = new THREE.Raycaster();
    var mouseVector = new THREE.Vector2();


    function addPlayerBlack(x,y,z)  {
            geometry55 = new THREE.SphereGeometry( 5, 32, 32 );
            material55 = new THREE.MeshBasicMaterial( { color: 0x000000 } );
            sphere55 = new THREE.Mesh( geometry55, material55 );
            for (let i = 0; i < centerPoints.length; i++ )  {
              //Create an empty array
              //Create new var thisVector = (x + ", " + y + ", " + z)
              //Create new var centerPointsVector = (centerPoints[i][0] + ", " + centerPoints[i][1] + ", " + centerPoints[i][2])
              //Create new var vectorDistance = (thisVector).distanceTo(centerPointsVector)
              //Push vectorDistance to new array
            };
            //Create new var addPieceHere = newArray.indexOf((Math.min(newArray));
            //set the sphere's position to centerPoints[addPieceHere]
            sphere55.position.set(x,y,z);
            scene.add( sphere55 );
            whichTurn += 1;
            console.log(whichTurn);
            //Maybe use .subVectors, iterate through the entire centerPoints array and then use Math.min() to see which is smallest, then choose that
          };

    function addPlayerWhite(x,y,z)  {
            geometry66 = new THREE.SphereGeometry( 5, 32, 32 );
            material66 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
            sphere66 = new THREE.Mesh( geometry66, material66 );
            sphere66.position.set(x,y,z);
            scene.add( sphere66 );
            whichTurn += 1;
            console.log(whichTurn);
            //Maybe use .subVectors, iterate through the entire centerPoints array and then use Math.min() to see which is smallest, then choose that
          };

    function addComputerBlack(x,y,z)  {
            geometry77 = new THREE.SphereGeometry( 5, 32, 32 );
            material77 = new THREE.MeshBasicMaterial( { color: 0x000000 } );
            sphere77 = new THREE.Mesh( geometry77, material77 );
            sphere77.position.set(x,y,z);
            scene.add( sphere77 );
            whichTurn += 1;
            console.log(whichTurn);
            centerPoints.splice(randomizer, 1);
            console.log("Number of center points: " + centerPoints.length);
            //Add timeout to set 10 second delay before moving
          };

    function addComputerWhite(x,y,z)  {
            geometry88 = new THREE.SphereGeometry( 5, 32, 32 );
            material88 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
            sphere88 = new THREE.Mesh( geometry88, material88 );
            sphere88.position.set(x,y,z);
            scene.add( sphere88 );
            whichTurn += 1;
            console.log(whichTurn);
            centerPoints.splice(randomizer, 1);
            console.log("Number of center points: " + centerPoints.length);
            //Add timeout to set 10 second delay before moving
          };

    window.addEventListener('click', function (myClick) {
      mouseVector.x = 2 * (myClick.clientX / window.innerWidth) - 1;
      mouseVector.y = 1 - 2 * (myClick.clientY / window.innerHeight);
      raycaster.setFromCamera(mouseVector, camera);
      var intersects = raycaster.intersectObject(plane1);
      if (whichTurn % 2 === 0)  {
        if (playerColor === "black")  {
          console.log("Add black piece");
          //function to add black piece
          addPlayerBlack(intersects[0].point.x,intersects[0].point.y,intersects[0].point.z);
        };
        if (playerColor === "white") {
          console.log("Add white piece");
          //function to add white piece
          addPlayerWhite(intersects[0].point.x,intersects[0].point.y,intersects[0].point.z);
        };
      } if (whichTurn % 2 !== 0) {
          if (playerColor === "black")  {
            console.log("Add white piece randomly");
            //function to add white piece randomly
            randomizer = Math.floor(Math.random() * centerPoints.length);
            addComputerWhite(centerPoints[randomizer][0],centerPoints[randomizer][1],centerPoints[randomizer][2]);
          };
          if (playerColor === "white") {
            console.log("Add black piece randomly");
            //function to add black piece randomly
            randomizer = Math.floor(Math.random() * centerPoints.length);
            addComputerBlack(centerPoints[randomizer][0],centerPoints[randomizer][1],centerPoints[randomizer][2]);
          };
        }
    });


    //CAMERA, INCLUDING TRACKBALL CONTROLS
    camera.position.z = 65;
    cameraControls = new THREE.TrackballControls(camera, renderer.domElement);
    cameraControls.target.set(0,0,0);
    //I learned how to control the camera with the mouse here: http://benchung.com/trackball-controls-three-js. See also the notes in the trackball-controls.js file./

    //RENDERER FUNCTION
    function render() {
      var delta = clock.getDelta();
      requestAnimationFrame( render );
      cameraControls.update(delta);
      renderer.render( scene, camera );
    }
    render();
});

/*Pseudocode
1. Create a 9x9 game board (the smallest standard Go board) using the tic tac toe board from our classwork for reference. Create with three.js. DONE
2. Create a white circle and black circle (game pieces) in three.js. DONE
3. Add event listeners to each square to place a piece inside.
  Note: I learned about raycasting, related to event listening, here: https://soledadpenades.com/articles/three-js-tutorials/object-picking/
4. Add a randomizer function to choose random moves by the computer. Place these by making an array of points precisely in the center of the squares and selecting one randomly. Write a function for pushing all center points to the centerPoints array.
5. Add a "pass turn" button.
6. Add a counter for captured pieces. Include a bonus for the player going second.
*/
