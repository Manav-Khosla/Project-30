
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600, 650, 1400, 20);
  ground2 = new Ground(600, 400, 400, 20);
  ground3 = new Ground(950, 300, 20, 500);
  ground4 = new Ground(600, 75, 1000, 20);
  ground5 = new Ground(350, 230, 20, 300);

  box5 = new Box(400, 350, 50, 50);
  box6 = new Box(450, 350, 50, 50)
  box7 = new Box(500, 350, 50, 50);
  box8 = new Box(550, 350, 50, 50);
  box9 = new Box(600, 350, 50, 50);
  box10 = new Box(650, 350, 50, 50);
  box11 = new Box(700, 350, 50, 50);
  box12 = new Box(750, 350, 50, 50);
  box13 = new Box(800, 350, 50, 50);
  box14 = new Box(850, 350, 50 ,50);

  box15 = new Box(450, 300, 50, 50);
  box16 = new Box(500, 300, 50, 50);
  box17 = new Box(550, 300, 50, 50);
  box18 = new Box(600, 300, 50, 50);
  box19 = new Box(650, 300, 50, 50);
  box20 = new Box(700, 300, 50, 50);
  box21 = new Box(750, 300, 50, 50);

  box23 = new Box(500, 260, 50, 50);
  box24 = new Box(550, 260, 50, 50);
  box25 = new Box(600, 260, 50, 50);
  box26 = new Box(650, 260, 50, 50);
  box27 = new Box(700, 260, 50, 50);
  box22 = new Box(800, 260, 50, 50);

  polygon = new Polygon( 100, 200, 30);

  slingshot = new SlingShot(polygon.body, {x: 200, y:300});

	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background(255);

  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  polygon.display();

  slingshot.display();

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon.body);
  }
}
