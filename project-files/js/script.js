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
      sphere1.position.set(0,0,0);
      scene.add( sphere1 );

    // var geometry2 = new THREE.SphereGeometry( 5, 32, 32 );
    // var material2 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    // var sphere2 = new THREE.Mesh( geometry2, material2 );
    // sphere2.position.set(0,0,0);
    // scene.add( sphere2 );

    var geometry3 = new THREE.PlaneGeometry( 144, 144 );
      var material3 = new THREE.MeshBasicMaterial( {color: 0xdeb887, side: THREE.DoubleSide} );
      var plane1 = new THREE.Mesh( geometry3, material3 );
      scene.add( plane1 );

    var material4 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry4 = new THREE.Geometry();
      geometry4.vertices.push(
        new THREE.Vector3( -71, 8, 1 ),
        new THREE.Vector3( 0, 8, 1 ),
        new THREE.Vector3( 71, 8, 1 )
      );

      var line1 = new THREE.Line( geometry4, material4 );
      scene.add( line1 );

    var material5 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry5 = new THREE.Geometry();
      geometry5.vertices.push(
        new THREE.Vector3( -71, 24, 1 ),
        new THREE.Vector3( 0, 24, 1 ),
        new THREE.Vector3( 71, 24, 1 )
      );

      var line2 = new THREE.Line( geometry5, material5 );
      scene.add( line2 );

    var material6 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry6 = new THREE.Geometry();
      geometry6.vertices.push(
        new THREE.Vector3( -71, 40, 1 ),
        new THREE.Vector3( 0, 40, 1 ),
        new THREE.Vector3( 71, 40, 1 )
      );

      var line3 = new THREE.Line( geometry6, material6 );
      scene.add( line3 );

    var material7 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry7 = new THREE.Geometry();
      geometry7.vertices.push(
        new THREE.Vector3( -71, 56, 1 ),
        new THREE.Vector3( 0, 56, 1 ),
        new THREE.Vector3( 71, 56, 1 )
      );

      var line4 = new THREE.Line( geometry7, material7 );
      scene.add( line4 );

    var material8 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry8 = new THREE.Geometry();
      geometry8.vertices.push(
        new THREE.Vector3( -71, 71, 1 ),
        new THREE.Vector3( 0, 71, 1 ),
        new THREE.Vector3( 71, 71, 1 )
      );

      var line5 = new THREE.Line( geometry8, material8 );
      scene.add( line5 );

    var material9 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry9 = new THREE.Geometry();
      geometry9.vertices.push(
        new THREE.Vector3( -71, -8, 1 ),
        new THREE.Vector3( 0, -8, 1 ),
        new THREE.Vector3( 71, -8, 1 )
      );

      var line6 = new THREE.Line( geometry9, material9 );
      scene.add( line6 );

    var material10 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry10 = new THREE.Geometry();
      geometry10.vertices.push(
        new THREE.Vector3( -71, -24, 1 ),
        new THREE.Vector3( 0, -24, 1 ),
        new THREE.Vector3( 71, -24, 1 )
      );

      var line7 = new THREE.Line( geometry10, material10 );
      scene.add( line7 );

    var material11 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry11 = new THREE.Geometry();
      geometry11.vertices.push(
        new THREE.Vector3( -71, -40, 1 ),
        new THREE.Vector3( 0, -40, 1 ),
        new THREE.Vector3( 71, -40, 1 )
      );

      var line8 = new THREE.Line( geometry11, material11 );
      scene.add( line8 );

    var material12 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry12 = new THREE.Geometry();
      geometry12.vertices.push(
        new THREE.Vector3( -71, -56, 1 ),
        new THREE.Vector3( 0, -56, 1 ),
        new THREE.Vector3( 71, -56, 1 )
      );

      var line9 = new THREE.Line( geometry12, material12 );
      scene.add( line9 );

    var material13 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry13 = new THREE.Geometry();
      geometry13.vertices.push(
        new THREE.Vector3( 71, -71, 1 ),
        new THREE.Vector3( 71, 0, 1 ),
        new THREE.Vector3( 71, 71, 1 )
      );

      var line10 = new THREE.Line( geometry13, material13 );
      scene.add( line10 );

    var material14 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry14 = new THREE.Geometry();
      geometry14.vertices.push(
        new THREE.Vector3( -8, -71, 1 ),
        new THREE.Vector3( -8, 0, 1 ),
        new THREE.Vector3( -8, 71, 1 )
      );

      var line11 = new THREE.Line( geometry14, material14 );
      scene.add( line11 );

    var material15 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry15 = new THREE.Geometry();
      geometry15.vertices.push(
        new THREE.Vector3( 24, -71, 1 ),
        new THREE.Vector3( 24, 0, 1 ),
        new THREE.Vector3( 24, 71, 1 )
      );

      var line12 = new THREE.Line( geometry15, material15 );
      scene.add( line12 );

    var material16 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry16 = new THREE.Geometry();
      geometry16.vertices.push(
        new THREE.Vector3( 40, -71, 1 ),
        new THREE.Vector3( 40, 0, 1 ),
        new THREE.Vector3( 40, 71, 1 )
      );

      var line13 = new THREE.Line( geometry16, material16 );
      scene.add( line13 );

    var material17 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry17 = new THREE.Geometry();
      geometry17.vertices.push(
        new THREE.Vector3( 56, -71, 1 ),
        new THREE.Vector3( 56, 0, 1 ),
        new THREE.Vector3( 56, 71, 1 )
      );

      var line14 = new THREE.Line( geometry17, material17 );
      scene.add( line14 );

    var material18 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry18 = new THREE.Geometry();
      geometry18.vertices.push(
        new THREE.Vector3( -24, -71, 1 ),
        new THREE.Vector3( -24, 0, 1 ),
        new THREE.Vector3( -24, 71, 1 )
      );

      var line15 = new THREE.Line( geometry18, material18 );
      scene.add( line15 );

    var material19 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry19 = new THREE.Geometry();
      geometry19.vertices.push(
        new THREE.Vector3( -40, -71, 1 ),
        new THREE.Vector3( -40, 0, 1 ),
        new THREE.Vector3( -40, 71, 1 )
      );

      var line16 = new THREE.Line( geometry19, material19 );
      scene.add( line16 );

    var material20 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry20 = new THREE.Geometry();
      geometry20.vertices.push(
        new THREE.Vector3( -56, -71, 1 ),
        new THREE.Vector3( -56, 0, 1 ),
        new THREE.Vector3( -56, 71, 1 )
      );

      var line17 = new THREE.Line( geometry20, material20 );
      scene.add( line17 );

    var material21 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry21 = new THREE.Geometry();
      geometry21.vertices.push(
        new THREE.Vector3( -71, -71, 1 ),
        new THREE.Vector3( -71, 0, 1 ),
        new THREE.Vector3( -71, 71, 1 )
      );

      var line18 = new THREE.Line( geometry21, material21 );
      scene.add( line18 );

    var material22 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry22 = new THREE.Geometry();
      geometry22.vertices.push(
        new THREE.Vector3( 8, -71, 1 ),
        new THREE.Vector3( 8, 0, 1 ),
        new THREE.Vector3( 8, 71, 1 )
      );

      var line19 = new THREE.Line( geometry22, material22 );
      scene.add( line19 );

    var material23 = new THREE.LineBasicMaterial({color: 0x0000ff});
      var geometry23 = new THREE.Geometry();
      geometry23.vertices.push(
        new THREE.Vector3( -71, -71, 1 ),
        new THREE.Vector3( 0, -71, 1 ),
        new THREE.Vector3( 71, -71, 1 )
      );

      var line20 = new THREE.Line( geometry23, material23 );
      scene.add( line20 );

    camera.position.z = 65;
    cameraControls = new THREE.TrackballControls(camera, renderer.domElement);
    cameraControls.target.set(0,0,0);
    //I learned how to control the camera with the mouse here: http://benchung.com/trackball-controls-three-js. See also the notes in the trackball-controls.js file./


    function render() {
      var delta = clock.getDelta();
      requestAnimationFrame( render );
      cameraControls.update(delta);
      renderer.render( scene, camera );
      // sphere1.rotation.x = 15;
      // sphere2.rotation.x = 15;
      // plane1.rotation.x += 0.005;
      // plane1.rotation.y += 0.005;
      // plane1.center;
      // plane1.rotation.x = 15;
      // sphere2.rotation.x += 0.03;
      // sphere2.rotation.y += 0.03;
    }
    render();
});

/*Pseudocode
1. Create a 9x9 game board (the smallest standard Go board) using the tic tac toe board from our classwork for reference. Create with HTML and CSS. DONE
1.2 Create a 9x9 game board with three js?
2. Create a white circle and black circle (game pieces) in CSS. DONE
3. Add event listeners to each square to place a piece inside.
4. Add a randomizer function to choose random moves by the computer.
5. Add a "pass turn" button.
6. Add a counter for captured pieces. Include a bonus for the player going second.
*/
