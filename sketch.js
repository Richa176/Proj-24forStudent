
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxl, boxm, boxr;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,690,1600,70);
	paper = new Paper(200,200,40);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();    
  paper.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-100});   
	 }
   }


