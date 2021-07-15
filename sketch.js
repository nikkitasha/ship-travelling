
var seaImg,sea
var shipImage1,ship


function preload(){
seaImg = loadImage("sea.png");
shipImage1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-2.png","ship-3.png","ship-4.png")


}
 function setup(){
  createCanvas(600,600);
  sea = createSprite(300,300);
  sea.addImage(seaImg);
  sea.scale=0.5
  sea.velocityX= -3
  ship = createSprite(100,350);
  ship.addAnimation("shipsailing",shipImage1)
  ship.scale=0.3
}
function draw(){
background ("blue");
drawSprites();
if(sea.x < 0){
  sea.x = sea.width/8;
}
}