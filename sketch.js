
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone1,boyImage,boy,tree1

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8; 

var ground1;

var sling1;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree1  = new tree(1000,280,20,20);

    stones=new Stone(100,460,23);

    attach=new Throw(stones.body,{x:100,y:465});

    mango1 = new mango(800,10,70);
    mango2 = new mango(900,10,70);
    mango3 = new mango(1000,10,70);
    mango4 = new mango(700,30,70);
    mango5 = new mango(700,-40,70);
    mango6 = new mango(800,-50,70);
    mango7 = new mango(900,-50,70);
    mango8 = new mango(850,-100,70);

    ground1 = new ground(600,height,2000,20);

    boy = createSprite(200,430,20,20);
	  boy.addImage(boyImage);
    boy.scale = 0.2;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  tree1.display();


  stones.display();

  attach.display();
 

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  ground1.display();

  

  textSize(36);
  text("Press Space To Get second Chance!", 200, 50);
  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX , y:mouseY});
}
function mouseReleased(){
   attach.fly();
}

function detectCollision(lstone,lmango){
  mangoBodyPos = lmangoBodyPos;
  stoneBodyPos = lstoneBodyPos;

  var distance = dist(stoneBodyPos.x, stoneBodyPos.y,mangoBodyPos.x,stoneBodyPos.y);

  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango,false);
  }
}


function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}

