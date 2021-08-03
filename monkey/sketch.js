
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var survivalTime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 survivalTime=0;
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  
  obstacleGroup=new Group();
  bananaGroup=new Group();
  
}


function draw() {
  background(255);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  
  text("survivalTime:"+survivalTime,100,50);
  survivalTime+=Math.round(setFrameRate()/60)
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  if (obstacleGroup.isTouching(monkey)){
    monkey.velocityX=0;
    bananaGroup.velocityX=0;
    obstacleGroup.velocityX=0;
  }
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  
  
  
   monkey.collide(ground);
  food();
  obstacles();
                  
  
  
  score=0;
  drawSprites();
}


function food(){
  if(frameCount%80===0){
    var banana=createSprite(350,400);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.lifetime=250;
    banana.scale=0.1;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    var obstacle=createSprite(400,300);
    obstacle.scale=0.7;
    obstacle.velocityX=-6;
    var rand=Math.round(random(1,6));
    obstacle.addImage(obstacleImage);
      
        
  
    obstacleGroup.add(obstacle);
}

}