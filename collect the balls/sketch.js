
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rimg;
var cart,cartimg;
var ballimg
var ballc;
var balls = 0
var score = 0
function preload (){

rimg = loadImage("road.png");
cartimg = loadImage("cart.png")
ballimg = loadImage("ball.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  ballc = new Group();
  engine = Engine.create();
  world = engine.world;
  ground = createSprite(650,610,1500,10)

  cart = createSprite(650,538);
  cart.addImage("cart",cartimg)
  cart.scale = 0.5;
 
  
  
}


function draw() 
{
  background(51);
  image (rimg,0,0,width,height)
  Engine.update(engine);
  drawSprites()
  fill("black")
  textSize(20)
  text("BALLS = "+balls,1250,50)
  text("SCORE =  "+score,10,50)
  cart.x = mouseX;
  
  ballloop()  

  if(ballc.isTouching(cart)){
    ballc.destroyEach();
    balls += 1
  }
  if(ballc.isTouching(ground)){
    ballc.destroyEach();
    score -= 1
  }
  if (balls === 5){
    balls = 0
    score += 1
  }
  if (score<0){
    console.log ("gameover")
  
  }

}
function ballloop(){
  if(frameCount %100 === 0){
    var ball = createSprite(100,100);
    ball.addImage("ball",ballimg)
    ball.scale = 0.2
    ball.velocityY = 5
    ball.x = Math.round(random(10,1000))
    ballc.add(ball)
    //imposible to complete 11 level
    //no one in the histry done that
    if(score === 1){
      ball.velocityY = 6
    }
    if(score === 2){
      ball.velocityY = 7
    }
    if(score === 3){
      ball.velocityY = 8
    }
    if(score === 4){
      ball.velocityY = 9
    }
    if(score === 5){
      ball.velocityY = 10
    }
    if(score === 6){
      ball.velocityY = 11
    }
    if(score === 7){
      ball.velocityY = 12
    }
    if(score === 8){
      ball.velocityY = 13
    }
    if(score === 9){
      ball.velocityY = 14
    }
    if(score === 10){
      ball.velocityY = 100
    }
    if(score === 11){
      ball.velocityY = 1000
    }
  }
  
 
}
function collide(){

}