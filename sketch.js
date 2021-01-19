
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinImage;
function preload()
{
	
}

var paper;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  paper = new Paper();
	  
	//Create a Ground
	ground = new Ground(width/2, 680, 800, 20);
	World.add(world, ground);

	dustbin1 = new Dustbin(600, 560, 20, 180);
	World.add(world, dustbin1);

	dustbin2 = new Dustbin(750, 560, 20, 180);
	World.add(world, dustbin2);


	dustbin3 = new Dustbin(675, 650, 180, 20);
	World.add(world, dustbin3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  fill("brown");
  ground.display();
  noFill();


  dustbin1.display();
  dustbin2.display();
 
  dustbin3.display();
  paper.display();
 



}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:800,y: -1000});
	
	
	  }
}
