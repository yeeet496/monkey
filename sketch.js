
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  obstaclesGroup=newGroup
 
}



function setup() {
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
}


function draw() {
if(keyDown(space)){
  velocityY= 3
}
  
  switch(score){

case 10: player.scale=0.12
      break;
case 20: player.scale=0.14
      break;
case 30: player.scale=0.16
      break;
case 40: player.scale=0.18
      break;
      default:break
 }
  if (obstaclesGrup.isTouching(player)){
    player.scale=0.2
  }
  
  
  
  
  var surrvivalTime=0;
 stroke("white") 
  textSize(20);
  fill("white")
  text("score"+score,500,50)
  
  stroke("black") 
  textSize(20);
  fill("black")
  surrvivalTime=Math.ceil(frameCount/frameRate())
  text("surrvivalTime: "+surrvivalTime,100,50)
  drawSprites()
}
if(keyDown("space")&& monkey.y >= 100) {
  monkey.velocityY = -12;
}
function bananas

if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,110));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    }

if (frameCount % 300 === 0) {
var obstacle =  createSprite(600,120,40,10);
    obstacle.y = Math.round(random(80,120));
    obstacle.addImage(bananaImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    }

