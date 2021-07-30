var bath;
var drink;
var gym;
var eat;
var iss;
var move;
var sleep;
var brush ; 
var astronaut;

function preload(){
  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadImage("brush.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png",);
  iss = loadImage("iss.png");
  move = loadAnimation("move.png","mobe2.png");
  sleep = loadImage("sleep.png")
}

function setup() {
  createCanvas(800,400);

  astronaut = createSprite(400,250);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

  
}

function draw() {
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym);
  astronaut.changeAnimation("gyming");
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing", bath );
  astronaut.changeAnimation("bathing");
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}  
if(keyDown("m_key")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
  background(iss);  
  drawSprites();
}