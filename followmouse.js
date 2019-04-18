(function(){
    // I load the easel.js library before this is called. 
    // https://code.createjs.com/easeljs-0.6.1.min.js
    // You don't see that in the codepen code though
 
   var myCanvas = document.createElement('canvas');
   var canvas = document.querySelector('body').appendChild(myCanvas);
   
   canvas.height=window.innerHeight;
   canvas.width = window.innerWidth;
   canvas.id = 'shipcanvas';
   
   var stage = new createjs.Stage(canvas);
   var centerX = canvas.width/2;
   var centerY = canvas.height/2;
   
   // Create the sprite with easel.js
   ss = new createjs.SpriteSheet({
   animations: {
     fly: [0, 14,"fly", 4]}, // identify the animation frames here
   images: ["https://img.icons8.com/wired/64/000000/rocket.png"],
   frames: {
     regX: 158, // registration point to make sure
     regY: 113, // it follows  the mouse from the center
     width: 316,
     height: 226
   }
 });
 
   var ship = new createjs.BitmapAnimation(ss);
     ship.gotoAndPlay("fly");
     stage.addChild(ship); 
     createjs.Ticker.setFPS(60);
     ship.x = centerX;
     ship.y = 65;
   ship.scaleX = .4;
   ship.scaleY = .4;
 
 
   createjs.Ticker.addListener(function() {
     var difX = stage.mouseX - ship.x;
     var difY = stage.mouseY - ship.y;
 
     ship.x += difX/100; //making these numbers (100) smaller makes it go faster
     ship.y += difY/100;
 
     stage.update();
   });
 })();