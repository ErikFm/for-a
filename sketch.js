
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var lixo;
var mort = 0;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);




	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
	lixo = new pape(200,200,70);
  
}


function draw() {
  rectMode(CENTER);
  background(230);




  groundObject.display();
  dustbinObj.display();
  lixo.display();

}

function keyPressed(){
	if (keyCode === 39){
		Matter.Body.applyForce(lixo.body,lixo.body.position,{x:118,y:-150});
	}
	if (keyCode === 37){
		Matter.Body.applyForce(lixo.body,lixo.body.position,{x:-118,y:-150});
	}

}