var cat, catImg, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;
var gardenImg;

function preload() {
    //load the images here

  gardenImg = loadImage("images/garden.png");
  catImg1 = loadImage("images/cat1.png");
  catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
  catImg3 = loadImage("images/cat4.png");
  
  mouseImg1 = loadImage("images/mouse1.png");
  mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
  mouseImg3 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(900,650, 10,10);
    tom.addImage("catResting", catImg1);
    tom.scale = 0.2;

    jerry = createSprite(50,670, 10,10);
    jerry.addImage("mouseWalking", mouseImg1);
    jerry.scale = 0.1;
    jerry.velocityX = 2;

}

function draw() {

    background(gardenImg);

    if(jerry.x > 150){

        jerry.velocityX = 0;

    }

    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x <(tom.width - jerry.width)/2){

      tom.velocityX = 0;
      tom.addAnimation("catSitting", catImg3);
      tom.changeAnimation("catSitting");

      jerry.addAnimation("mouseChecking", mouseImg3);
      jerry.changeAnimation("mouseChecking");

    }

    drawSprites();
}


function keyPressed(){

    if(keyCode ===  LEFT_ARROW){
        
        tom.velocityX = -5;
        tom.addAnimation("catRunning", catImg2);
        tom.changeAnimation("catRunning");

        jerry.addAnimation("mouseTeasing", mouseImg2);
        jerry.changeAnimation("mouseTeasing");

    }
}
