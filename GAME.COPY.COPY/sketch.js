var player, playerimg;
var bg;
var rect1,rect1img;
var rect2,rect2img;
var rect3,rect3img;
var rect4,rect4img;
var rect5,rect5img;
var rect6,rect6img;
var rect7,rect7img;
var rect8,rect8img;
var rect9,rect9img;


function setup() {
  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);


  bg=loadImage("./assets/download.jpg");

 
  //player
  playerimg=loadImage("./assets/clipart.png");
  player=createSprite(width-1111,height/2);
  player.addImage(playerimg)
  player.scale=0.2


  //***********rectangles and obstacles***********//
  
  //1st rect
  rect1img=loadImage("./assets/rect2.png");
  rect1=createSprite(width-1111,height-720);
  rect1.addImage(rect1img);
  rect1.scale=0.2

  //2nd rect
  rect2=createSprite(width-777,height-720);
  rect2img=loadImage("./assets/rect2.png");
  rect2.addImage(rect2img);
  rect2.scale=0.4

  //3rd rect
  rect3=createSprite(width-555,height-720);
  rect3img=loadImage("./assets/rectUPSIDEDOWN.png");
  rect3.addImage(rect2img);   
  rect3.scale=0.2

  //4th rect
  rect4=createSprite(width-333,height-720);
  rect4.addImage(rect2img);
  rect4.scale=0.3

  //5th rect
  rect5=createSprite(width-222,height-720);
  rect5.addImage(rect2img);
  rect5.scale=0.2 


  //6th rect
  rect6=createSprite(width-1020,height-9)
  rect6.addImage(rect3img);
  
  
  //7th rect
  rect7=createSprite(width-818,height-9);
  rect7.addImage(rect3img);
  rect7.scale=0.9;


  //8th rect
  rect8=createSprite(width-555,height-9);
  rect8.addImage(rect3img);
  rect8.scale=1.1;


  //9th rect
  rect9=createSprite(width-333,height-9);
  rect9.addImage(rect3img);
  rect9.scale=0.9


}

function draw() {
  background(255,199,0);  

  // moving the obstacles
  rect1.velocityX=-2
  if(rect1.x<0) {
    rect1.x=width-177
  }

  rect2.velocityX=-2
  if(rect2.x<0) {
    rect2.x=width-177
  }

  rect3.velocityX=-2
  if(rect3.x<0) {
    rect3.x=width-177
  }

  rect4.velocityX=-2
  if(rect4.x<0) {
    rect4.x=width-177
  }

  rect5.velocityX=-2
  if(rect5.x<0) {
    rect5.x=width-177
  }

  rect6.velocityX=-2
  if(rect6.x<0) {
    rect6.x=width-177
  }

  rect7.velocityX=-2
  if(rect7.x<0) {
    rect7.x=width-177
  }

  rect8.velocityX=-2
  if(rect8.x<0) {
    rect8.x=width-177
  }
  
  rect9.velocityX=-2
  if(rect9.x<0) {
    rect9.x=width-177
  }



  drawSprites();
}