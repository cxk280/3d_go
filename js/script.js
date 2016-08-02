 console.log("Script connected!");

$( document ).ready(function() {
  // All my scripts here.

    var whichTurn = 0;
    var centerPoints = [[-63.5, -63.5, 1], [-47.5, -63.5, 1], [-31.5, -63.5, 1], [-15.5, -63.5, 1], [0.5, -63.5, 1], [16.5, -63.5, 1], [32.5, -63.5, 1], [48.5, -63.5, 1], [64.5, -63.5, 1], [-63.5, -47.5, 1], [-47.5, -47.5, 1], [-31.5, -47.5, 1], [-15.5, -47.5, 1], [0.5, -47.5, 1], [16.5, -47.5, 1], [32.5, -47.5, 1], [48.5, -47.5, 1], [64.5, -47.5, 1], [-63.5, -31.5, 1], [-47.5, -31.5, 1], [-31.5, -31.5, 1], [-15.5, -31.5, 1], [0.5, -31.5, 1], [16.5, -31.5, 1], [32.5, -31.5, 1], [48.5, -31.5, 1], [64.5, -31.5, 1], [-63.5, -15.5, 1], [-47.5, -15.5, 1], [-31.5, -15.5, 1], [-15.5, -15.5, 1], [0.5, -15.5, 1], [16.5, -15.5, 1], [32.5, -15.5, 1], [48.5, -15.5, 1], [64.5, -15.5, 1], [-63.5, 0.5, 1], [-47.5, 0.5, 1], [-31.5, 0.5, 1], [-15.5, 0.5, 1], [0.5, 0.5, 1], [16.5, 0.5, 1], [32.5, 0.5, 1], [48.5, 0.5, 1], [64.5, 0.5, 1], [-63.5, 16.5, 1], [-47.5, 16.5, 1], [-31.5, 16.5, 1], [-15.5, 16.5, 1], [0.5, 16.5, 1], [16.5, 16.5, 1], [32.5, 16.5, 1], [48.5, 16.5, 1], [64.5, 16.5, 1], [-63.5, 32.5, 1], [-47.5, 32.5, 1], [-31.5, 32.5, 1], [-15.5, 32.5, 1], [0.5, 32.5, 1], [16.5, 32.5, 1], [32.5, 32.5, 1], [48.5, 32.5, 1], [64.5, 32.5, 1], [-63.5, 48.5, 1], [-47.5, 48.5, 1], [-31.5, 48.5, 1], [-15.5, 48.5, 1], [0.5, 48.5, 1], [16.5, 48.5, 1], [32.5, 48.5, 1], [48.5, 48.5, 1], [64.5, 48.5, 1], [-63.5, 64.5, 1], [-47.5, 64.5, 1], [-31.5, 64.5, 1], [-15.5, 64.5, 1], [0.5, 64.5, 1], [16.5, 64.5, 1], [32.5, 64.5, 1], [48.5, 64.5, 1], [64.5, 64.5, 1]];

    var allNeighbors = [];


    (function fillAllNeighbors ()  {
      //bottom-left corner:
      for (i=0; i<1; i++) {
        allNeighbors.push([centerPoints[i+1], centerPoints[i+9]]);
      };
      //bottom row interior:
      for (i=1; i<8; i++)  {
        allNeighbors.push([centerPoints[i-1], centerPoints[i+1], centerPoints[i+9]]);
      };
      //bottom-right corner:
      for (i=8; i<9; i++)  {
        allNeighbors.push([centerPoints[i-1], centerPoints[i+9]]);
      };
      //row 2 left:
      for (i=9; i<10; i++) {
        allNeighbors.push([centerPoints[i+1], centerPoints[i-9], centerPoints[i+9]]);
      };
      //row 2 interior:
      for (i=10; i<17; i++) {
        allNeighbors.push([centerPoints[i-9], centerPoints[i+9], centerPoints[i+1], centerPoints[i-1]]);
      };
      //row 2 right:
      for (i=17; i<18; i++) {
        allNeighbors.push([centerPoints[i-1], centerPoints[i+9], centerPoints[i-9]]);
      };
      //row 3 left:
      for (i=18; i<19; i++) {
        allNeighbors.push([centerPoints[i+1], centerPoints[i-9], centerPoints[i+9]]);
      };
      //row 3 interior:
      for (i=19; i<26; i++) {
        allNeighbors.push([centerPoints[i-9], centerPoints[i+9], centerPoints[i+1], centerPoints[i-1]]);
      };
      //row 3 right:
      for (i=26; i<27; i++) {
        allNeighbors.push([centerPoints[i-1], centerPoints[i+9], centerPoints[i-9]]);
      };
      //row 4 left:
      for (i=27; i<28; i++) {
        allNeighbors.push([centerPoints[i+1], centerPoints[i-9], centerPoints[i+9]]);
      };
      //row 4 interior:
      for (i=28; i<35; i++) {
      allNeighbors.push([centerPoints[i-9], centerPoints[i+9], centerPoints[i+1], centerPoints[i-1]]);
      };
      //row 4 right:
      for (i=35; i<36; i++) {
        allNeighbors.push([centerPoints[i-1], centerPoints[i+9], centerPoints[i-9]]);
      };
      //row 5 left:
      for (i=36; i<37; i++) {
        allNeighbors.push([centerPoints[i+1], centerPoints[i-9], centerPoints[i+9]]);
      };
      //row 5 interior:
      for (i=37; i<44; i++) {
        allNeighbors.push([centerPoints[i-9], centerPoints[i+9], centerPoints[i+1], centerPoints[i-1]]);
      };
      //row 5 right:
      for (i=44; i<45; i++) {
        allNeighbors.push([centerPoints[i-1], centerPoints[i+9], centerPoints[i-9]]);
      };
      //row 6 left:
      for (i=45; i<46; i++) {
        allNeighbors.push([centerPoints[i+1], centerPoints[i-9], centerPoints[i+9]]);
      };
      //row 6 interior:
      for (i=46; i<53; i++) {
        allNeighbors.push([centerPoints[i-9], centerPoints[i+9], centerPoints[i+1], centerPoints[i-1]]);
      };
      //row 6 right:
      for (i=53; i<54; i++) {
        allNeighbors.push([centerPoints[i-1], centerPoints[i+9], centerPoints[i-9]]);
      };
      //row 7 left:
      for (i=54; i<55; i++) {
        allNeighbors.push([centerPoints[i+1], centerPoints[i-9], centerPoints[i+9]]);
      };
      //row 7 interior:
      for (i=55; i<62; i++) {
        allNeighbors.push([centerPoints[i-9], centerPoints[i+9], centerPoints[i+1], centerPoints[i-1]]);
      };
      //row 7 right:
      for (i=62; i<63; i++) {
        allNeighbors.push([centerPoints[i-1], centerPoints[i+9], centerPoints[i-9]]);
      };
      //row 8 left:
      for (i=63; i<64; i++) {
        allNeighbors.push([centerPoints[i+1], centerPoints[i-9], centerPoints[i+9]]);
      };
      //row 8 interior:
      for (i=64; i<71; i++) {
        allNeighbors.push([centerPoints[i-9], centerPoints[i+9], centerPoints[i+1], centerPoints[i-1]]);
      };
      //row 8 right:
      for (i=71; i<72; i++) {
        allNeighbors.push([centerPoints[i-1], centerPoints[i+9], centerPoints[i-9]]);
      };
      //top-left corner:
      for (i=72; i<73; i++) {
        allNeighbors.push([centerPoints[i+1], centerPoints[i-9]]);
      };
      //top row interior:
      for (i=73; i<80; i++) {
        allNeighbors.push([centerPoints[i-1], centerPoints[i+1], centerPoints[i-9]]);
      };
      //top-right corner:
      for (i=80; i<81; i++) {
        allNeighbors.push([centerPoints[i-1], centerPoints[i-9]]);
      };
    })();

    var randomizer;
    var intersects;

    var playerOccupied = [];
    var computerOccupied = [];

    var playerScore = 0;
    var computerScore = 0;

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
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.setClearColor( 0xffffff, 0 );
      document.body.appendChild( renderer.domElement );

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
    var raycaster = new THREE.Raycaster();
    var mouseVector = new THREE.Vector3();

//Below are my failed attempts to make functions that removed surrounded game pieces and incremented the opponent's score.

var allSquares = {};

for (let i = 0; i < centerPoints.length; i++) {
  allSquares["square" + (i + 1)] = {neighbors : allNeighbors[i]};
};

function playerAllNeighborsCheck()  {
  for (let i = 0; i < playerOccupied.length; i++) {
    //see if playerOccupied contains every element of allSquares["square" + (i + 1)].neighbors
    if () {

    };
  };
};

// var tempNeighborsArray = [];
// var otherTempArr = [];
// var centerPointsIndices = [];

//     function playerAllNeighborsCheck()  {
//       var centerPointsIndex;
//       var spliceHere;
//       for (let i=0; i < computerOccupied.length; i++) {
//         for (let j=0; j < centerPoints.length; j++) {
//           if (centerPoints[j].toString() === computerOccupied[i].toString())  {
//             centerPointsIndices.push(j);
//             spliceHere = i;
//           };
//         };
//         console.log(centerPointsIndices);
//         for (let n=0; n < centerPointsIndices.length; n++)  {
//           for (let k=0; k < allNeighbors[n].length; k++)  {
//             tempNeighborsArray.push(allNeighbors[n][k]);
//           };
//         };
//         console.log("tempneighbors array: " + tempNeighborsArray);
//         console.log("playerOccupied array: " + playerOccupied);
//         for (let m = 0; m < playerOccupied.length; m++) {
//           for (let l=0; l < tempNeighborsArray.length; l++) {
//             otherTempArr.push(playerOccupied[m].toString() === tempNeighborsArray[l].toString());
//           };
//         };
//         console.log("othertemp array: " + otherTempArr);
//         if (otherTempArr.includes(false) == false)  {
//           scene.remove(centerPoints[centerPointsIndex]);
//           computerOccupied.splice(spliceHere, 1);
//           playerScore += 1;
//         };
//       tempNeighborsArray = [];
//       otherTempArr = [];
//       };
//     console.log(" ");
//     };

//     function computerAllNeighborsCheck()  {
//       for (let i=0; i < playerOccupied.length; i++) {
//         var centerPointsIndex = centerPoints.indexOf(playerOccupied[i]);
//         if (computerOccupied.includes(allNeighbors[centerPointsIndex]) == true)  {
//           scene.remove(centerPoints[centerPointsIndex]);
//           playerOccupied.splice(i, 1);
//           computerScore += 1;
//         };
//       };
//     };


    function addPlayerBlack(x,y,z)  {
            var geometry55 = new THREE.SphereGeometry( 5, 32, 32 );
            var material55 = new THREE.MeshBasicMaterial( { color: 0x000000 } );
            var sphere55 = new THREE.Mesh( geometry55, material55 );
            var myArray = [];
            for (let i = 0; i < centerPoints.length; i++ )  {
              thisVector = new THREE.Vector3;
              thisVector.x = x;
              thisVector.y = y;
              thisVector.z = z;
              centerPointsVector = new THREE.Vector3;
              centerPointsVector.x = centerPoints[i][0];
              centerPointsVector.y = centerPoints[i][1];
              centerPointsVector.z = centerPoints[i][2];
              vectorDistance = thisVector.distanceTo(centerPointsVector);
              myArray.push(vectorDistance);
            };
            var addPieceHere = myArray.indexOf(Math.min.apply(null, myArray));
            sphere55.position.set(centerPoints[addPieceHere][0],centerPoints[addPieceHere][1],centerPoints[addPieceHere][2]);
            scene.add( sphere55 );
            thisSphere = [];
            thisSphere.push(sphere55.position.x);
            thisSphere.push(sphere55.position.y);
            thisSphere.push(sphere55.position.z);
            playerOccupied.push(thisSphere);
            // playerAllNeighborsCheck();
            whichTurn += 1;
            console.log("Turn number " + whichTurn + " completed");
            console.log("Player score: " + playerScore + "; Computer score: " + computerScore);
            console.log(" ");
        };

    function addPlayerWhite(x,y,z)  {
            var geometry55 = new THREE.SphereGeometry( 5, 32, 32 );
            var material55 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
            var sphere55 = new THREE.Mesh( geometry55, material55 );
            var myArray = [];
            for (let i = 0; i < centerPoints.length; i++ )  {
              thisVector = new THREE.Vector3;
              thisVector.x = x;
              thisVector.y = y;
              thisVector.z = z;
              centerPointsVector = new THREE.Vector3;
              centerPointsVector.x = centerPoints[i][0];
              centerPointsVector.y = centerPoints[i][1];
              centerPointsVector.z = centerPoints[i][2];
              vectorDistance = thisVector.distanceTo(centerPointsVector);
              myArray.push(vectorDistance);
            };
            var addPieceHere = myArray.indexOf(Math.min.apply(null, myArray));
            sphere55.position.set(centerPoints[addPieceHere][0],centerPoints[addPieceHere][1],centerPoints[addPieceHere][2]);
            scene.add( sphere55 );
            thisSphere = [];
            thisSphere.push(sphere55.position.x);
            thisSphere.push(sphere55.position.y);
            thisSphere.push(sphere55.position.z);
            playerOccupied.push(thisSphere);
            // playerAllNeighborsCheck();
            whichTurn += 1;
            console.log("Turn number " + whichTurn + " completed");
            console.log("Player score: " + playerScore + "; Computer score: " + computerScore);
            console.log(" ");
          };

    function addComputerBlack(x,y,z)  {
        console.log("Computer thinking...");
        randomizer = Math.floor(2000 + (Math.random() * 8000));
        setTimeout (function()  {
            console.log("The computer decided its move!");
            geometry55 = new THREE.SphereGeometry( 5, 32, 32 );
            material55 = new THREE.MeshBasicMaterial( { color: 0x000000 } );
            sphere55 = new THREE.Mesh( geometry55, material55 );
            sphere55.position.set(x,y,z);
            scene.add( sphere55 );
            computerOccupied.push([sphere55.position.x,sphere55.position.y,sphere55.position.z])
            // computerAllNeighborsCheck();
            whichTurn += 1;
            console.log("Turn number " + whichTurn + " completed");
            console.log("Player score: " + playerScore + "; Computer score: " + computerScore);
            console.log(" ");
            console.log("What is your next move?");
            console.log(" ");
          }, randomizer)
        };

    function addComputerWhite(x,y,z)  {
        console.log("Computer thinking...");
        randomizer = Math.floor(2000 + (Math.random() * 8000));
        setTimeout (function() {
              console.log("The computer decided its move!");
              geometry55 = new THREE.SphereGeometry( 5, 32, 32 );
              material55 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
              sphere55 = new THREE.Mesh( geometry55, material55 );
              sphere55.position.set(x,y,z);
              scene.add( sphere55 );
              computerOccupied.push([sphere55.position.x,sphere55.position.y,sphere55.position.z])
              // computerAllNeighborsCheck();
              whichTurn += 1;
              console.log("Turn number " + whichTurn + " completed");
              console.log("Player score: " + playerScore + "; Computer score: " + computerScore);
              console.log(" ");
              console.log("What is your next move?");
              console.log(" ");
          }, randomizer)
        };




    window.addEventListener('click', function (myClick) {
      mouseVector.x = 2 * (myClick.clientX / window.innerWidth) - 1;
      mouseVector.y = 1 - 2 * (myClick.clientY / window.innerHeight);
      mouseVector.z = 0;
      raycaster.setFromCamera(mouseVector, camera);
      intersects = raycaster.intersectObject(plane1);
        if (whichTurn % 2 === 0)  {
          if (playerColor === "black")  {
            addPlayerBlack(intersects[0].point.x,intersects[0].point.y,intersects[0].point.z);
          };
          if (playerColor === "white") {
            addPlayerWhite(intersects[0].point.x,intersects[0].point.y,intersects[0].point.z);
          };
        };
        if (whichTurn % 2 !== 0) {
          if (playerColor === "black")  {
            randomizer = Math.floor(Math.random() * centerPoints.length);
            addComputerWhite(centerPoints[randomizer][0],centerPoints[randomizer][1],centerPoints[randomizer][2]);
          };
          if (playerColor === "white") {
            randomizer = Math.floor(Math.random() * centerPoints.length);
            addComputerBlack(centerPoints[randomizer][0],centerPoints[randomizer][1],centerPoints[randomizer][2]);
          };
        };
    });


    //CAMERA, INCLUDING TRACKBALL CONTROLS
    camera.position.z = 120;
    cameraControls = new THREE.TrackballControls(camera, renderer.domElement);
    cameraControls.target.set(0,0,0);

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
3. Add event listeners to each square to place a piece inside. DONE
  Note: I learned about raycasting, related to event listening, here: https://soledadpenades.com/articles/three-js-tutorials/object-picking/
4. Add a randomizer function to choose random moves by the computer. Place these by making an array of points precisely in the center of the squares and selecting one randomly. Write a function for pushing all center points to the centerPoints array. DONE
5. Add functionality for removing a piece, adding its center point back to centerPoints, and incrementing the score counter by 1 when it has no freedoms.
  5.1 Create an empty array called playerOccupied and another empty array called computerOccupied. Add occupied center points to the appropriate array when they are played. DELETE THE REMOVAL OF ELEMENTS FROM CENTERPOINTS WITH EACH MOVE. THAT ARRAY MUST NOT BE CHANGED. INSTEAD RUN A FUNCTION TO CHECK IF playerOccupied or computerOccupied CONTAINS THE POINT. DONE
  5.2 Create a new empty array called allNeighbors, with each element to be an array with neighbors for each square. Since the elements of centerPoints are listed in order, the elements of allNeighbors can be added by writing a self-calling function to push to allNeighbors. Example: for non-border squares, the neighbors (I think) would be [centerPoints[i-9], centerPoints[i+9], centerPoints[i+1], centerPoints[i-1]]. The corners should be added individually. Bottom side: [centerPoints[i-1], centerPoints[i+1], centerPoints[i+9]]. Top side: [centerPoints[i-1], centerPoints[i+1], centerPoints[i-9]]. Left side: [centerPoints[i+1], centerPoints[i-9], centerPoints[i+9]]. Right side: [centerPoints[i-1], centerPoints[i+9], centerPoints[i-9]]. DONE
  5.3 After every turn, run a function iterating through playerOccupied and computerOccupied to see if all the elements of any array element of allNeighbors appears. If so, remove that center point from either playerOccupied or computerOccupied. Also remove the three.js object at that position (how?). If playerOccupied contains the point that is removed, increment computer point counter by 1. If computerOccupied contains the point that is removed, increment player point counter by 1. I FAILED TO COMPLETE THIS.
6. Add random time delay between 5-10 seconds for each computer move to be executed. DONE
7. Show the score in the console after each human move. IRRELEVANT BECAUSE OF 5.3.
*/
