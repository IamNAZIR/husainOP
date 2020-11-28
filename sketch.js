const Engine = Matter.Engine;//universe
const World = Matter.World;//world
const Bodies = Matter.Bodies;//objects

var ground, ball;

var engine,world,cola;
function setup() {
  createCanvas(1000,1000);
  
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic:true

  }
  ground = Bodies.rectangle(200,390,200,20,options);
  var balloptions = {
   
     restitution : 1.0
     
  }
  ball = Bodies.circle(200, 100, 20, balloptions)
  World.add(world,ground);
  World.add(world, ball)
  
}

function draw() {
  background(0);  

    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20, 20)


}