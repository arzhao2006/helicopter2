var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redbox1, redbox2, redbox3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 redbox1 = createSprite(400, 660, 155, 20);
	 redbox1.shapeColor="red"
	 redbox2 = createSprite(320, 630, 20, 80);
	 redbox2.shapeColor="red"
	 redbox3 = createSprite(475, 630, 20, 80);
	 redbox3.shapeColor="red"
 
	 boxBottomBody=Bodies.rectangle(400,660,155,20,{isStatic:true});
	 World.add(world,boxBottomBody)
 
	 boxLeftBody=Bodies.rectangle(320,630,20,80,{isStatic:true});
	 World.add(world,boxLeftBody)
 
	 boxRightBody=Bodies.rectangle(475,630,20,80,{isStatic:true});
	 World.add(world,boxRightBody)

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody, false);
	     // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



