const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var gameState = "onSling";

function preload() {
  
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(500,50,250);
  rope = new SlingShot(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

}

function draw() {
  background("gamingbackground1.jpg");
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  rope.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      
      Matter.Body.setPosition(hero.body,{x:500,y:50})
     slingshot.attach(hero.body);
  }
}