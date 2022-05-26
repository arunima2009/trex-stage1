var trex,trex_running,ground,groundImage;
var edges;
function preload(){
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);

  
  //adding scale and position to trex
  trex.scale = 0.5;
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);

  edges = createEdgeSprites();
}

function draw() {
  background(220);
  if (keyDown("space")){
trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(edges[3]);
  drawSprites();
}