/*
 Project 2 - Array of Objects
 Name: Isabella Rodriguez
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
//var sprite1, sprite2;
var sprites = new Array(10); //defines array size of 10 slots

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas

  for(let i = 0; i< sprites.length; i++){
    sprites[i] = new Sprite(random(width), random(height));
    console.log(sprites[i]);
  }


}

function draw(){
  background(0); //black background
  for(let i = 0; i < sprites.length; i++){
    sprites[i].display(); //display sprite[i] on screen
    sprites[i].move(); //move sprite[i]
  }
}


function Sprite (tempX, tempY){
  this.x = tempX;
  this.y = tempY;
  this.xSpeed = random(-2,2);
  this.ySpeed = random(-2,2);
  
  this.move = function(){
      this.x += this.xSpeed;
      this.y += this.ySpeed;

      if(this.x > width || this.x < 0){
        this.xSpeed *= -1;
      }

      if(this.y > height || this.y < 0){
        this.ySpeed *= -1
      }
    }

  this.display = function(){
    push(); //create a new layer
    translate(this.x, this.y); //moves layer's origin point to 0,0
    
    fill(245, 236, 211) //pale yellow
    ellipse(-20, -60, 30, 100) //left ear
    ellipse(20, -60, 30, 100) //right ear
  
    fill(255, 176, 254) //pink
    ellipse(-20,-60, 20, 80) //left inside of ear
    ellipse(20, -60, 20, 80) //right inside of ear
  
    fill(245, 237, 211) //pale yellow
    ellipse(0, 0, 100, 100); // simple ellipse at the translated origin (0,0)
    fill(0) //black
    ellipse(-20, -10, 30) //left eye
    ellipse(20, -10, 30) //right eye
  
    fill(247, 45, 78) //red
    ellipse(-20, -10, 20) //left pupil
    ellipse(20, -10, 20) //right pupil
  
    fill(255, 176, 254) //pink
    ellipse(0, 0, 10) //nose
  
    fill(255) //white
    rect(-10, 10, 10, 14) //bunny teeth
    rect(0, 10, 10, 14)
    
    pop(); //dispose of the layer
  }
}
