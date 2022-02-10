const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var chao;
var fundo;
var tower;
var tower_img;

function preload() {
 fundo = loadImage("assets/background.gif");
 tower_img = loadImage("assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  chao = Bodies.rectangle(0,height - 1,width*2,1,options);
  World.add(world,chao);
 
  tower = Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);
}

function draw() {
  background(189);
 
  Engine.update(engine);

  rect(chao.position.x,chao.position.y,width*2,1);
  image(fundo,0,0,1200,600);

  push();
  imageMode(CENTER);
  image(tower_img,tower.position.x,tower.position.y,160,310);
  pop();
   
}
