var bg;
var player;
var computer;

function preload(){
bg= loadImage("court.png");
}

function setup(){
  createCanvas(1000, 570)
  player = createSprite(300, 500, 100, 100)
  computer= createSprite(700, 500, 100, 100);

}

function draw(){
  background(bg);
  drawSprites()
}