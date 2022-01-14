
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload(){
	
}

function setup() {
	createCanvas(1800, 800);


	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
	rectMode(RADIUS);

	var ball_options ={
		restitution:0.5,
		friction:0,
		density:1.2

	}

	ball = Bodies.circle(100, 100, 30, ball_options);
	World.add(world, ball);

	ground = new Ground(width/2, 750, width, 20);

	leftWall = new Ground(1250, 670, 20, 140);

	rightWall = new Ground(1450, 670, 20, 140);

	Engine.run(engine);
  
}

function draw() {
 
  background("#141D2D");
  Engine.update(engine);
  
  fill("#FFFAF0");
  ellipse(ball.position.x, ball.position.y, 50);

  ground.display();

  leftWall.display();
  rightWall.display();

  upArrow();

  drawSprites();
 
  console.log(mouseY);

}

function upArrow(){
   if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x: 10, y:5});

   }	

}