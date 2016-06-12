# wdipurplerain_project1  

**_Go_**  

**Epic user story:**  
As a user who understands the rules of Go, I want to be able to play a game in an interface that is enjoyable, non-monotonous and intuitive.    

**Smaller user stories:**  
1: As a user who does not know the rules of Go, I want to see a tutorial that teaches me the rules.  
2: As a user who understands the rules of Go, I want the ability to select at the beginning whether I am player black or white.  
3: As a user who understands the rules of Go, I want to place my stone at the board square on which I click.  
4: As a user who understands the rules of Go, I want to see a running tally of my score and my opponents.  
5: As a user who understands the rules of Go, I want the ability to pass my turn.  

Note: The game of Go ends when both players pass turns consecutively.  

**Stretch goals:**    
  
1: As a user who understand the rules of Go, I want the ability to play online with a human friend viewing their own interface on their own computer.  
2: As a user who understands the rules of Go, I want the the option to play Go in three dimensions (actual 3D gameplay, not just 3D graphics). This would require an abstraction of the traditional rules into a three dimensional space.


**Citations:**  

*Three.js in general:*
1. My three.js objects started with the code in the tutorial at http://threejs.org/docs/#Manual/Introduction/Creating_a_scene. I then played with this code referring to the rest of the three.js documentation as well as various posts on Stack Overflow and elsewhere (cited below) to create what I need.  

*Camera and trackball controls:*  
1. I learned how to control the camera with the mouse here: http://benchung.com/trackball-controls-three-js. See also the notes in the trackball-controls.js file.  
2. I did not create or edit the trackball-controls.js file. That file is a free-to-use example from the three.js website. It may be found here: https://github.com/mrdoob/three.js/blob/master/examples/js/controls/TrackballControls.js. All credit goes to the maintainers of three.js. I was pointed in this direction by this Stack Overflow post: http://stackoverflow.com/questions/8426822/rotate-camera-in-three-js-with-mouse. 

*Raycasting help:*  
1. Started off from tutorial at https://soledadpenades.com/articles/three-js-tutorials/object-picking/  
2. Since projector gave me an error, I found on this post that the newest version of three.js had removed it and how to fix it: http://stackoverflow.com/questions/29366109/three-js-three-projector-has-been-moved-to  
3. This also helped figure out how to get past the removal of projector: https://github.com/mrdoob/three.js/issues/5587  
4. Also referred here: http://barkofthebyte.azurewebsites.net/post/2014/05/05/three-js-projecting-mouse-clicks-to-a-3d-scene-how-to-do-it-and-how-it-works  

*Renderer help:*  
1. For help designing clear renderer, referred to http://stackoverflow.com/questions/20495302/transparent-background-with-three-js  

*Javascript in general:*  
1. Help finding the minimum number in an array from here: http://www.jstips.co/en/calculate-the-max-min-value-from-an-array/
