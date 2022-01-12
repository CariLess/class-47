var a,b,c;
var pc;

var casita;
var mc;
var villianImg, villian;

var floorGroup,wallGroup;

var gameState= 0;

function preload(){
  casita = loadImage ("casita.png");
  mc = loadImage ("mc.png");
  villianImg = loadImage ("villianImg.png");

}

function setup(){
createCanvas (600,600);
floorGroup = new Group ();
wallGroup = new Group();


pc = createSprite(1200,255,10,10);
pc.addImage(mc);
pc.scale = 0.3;

villian = createSprite(550,550,10,10);
villian.addImage(villianImg);
villian.scale = 0.3;
floors(1000,325);
floors(1000,630);
floors(1000,935)

walls(940,160);
walls(520,470);
walls(940,470);
walls(1445,470);
walls(745,775);
walls(1445,775);
walls(13,470);
walls(13,775);
walls(1987,775);

}

function draw(){
background("lightblue");
image(casita,0,0,2000,1000);

if(keyDown(RIGHT_ARROW)){
  pc.x+=5;
}
if(keyDown(LEFT_ARROW)){
  pc.x-=5;
}
if(keyIsDown(UP_ARROW)){
  pc.y-=15;
  pc.velocityY = pc.velocityY+0.5;
}
if(keyDown(DOWN_ARROW)){
  pc.y+=5;
}
pc.collide(floorGroup);
pc.collide(wallGroup);


camera.position.x = pc.x;
camera.position.y = pc.y-100;
drawSprites();

}

function floors(x,y){
  var floor =createSprite(x,y,2000,25);
  floorGroup.add(floor);
}

function walls(x,y){
  var wall = createSprite(x,y,25,315);
  wallGroup.add(wall);
}