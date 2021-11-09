const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var boite2;
var boite1;
var ground;
var engine, world;
var bgimg;
var lancepierre1;
var lancepierre2;

function preload() {
  bgimg = loadImage("sprites/bg.png");
  lancepierre1 = loadImage("sprites/sling1.png");
  lancepierre2 = loadImage("sprites/sling2.png");
}

function setup() {
  var canvas = createCanvas(1400, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Sol(600, 390, width, 50);
  boite1 = new Boites(470, 350, 70, 70);
  boite2 = new Boites(250, 350, 70, 70);
  planche1 = new Planches(360, 100, 290, 20, 0);
  cochon1 = new Cochons(350, 350, 60, 60);
  oiseau1 = new Oiseaux(1111, 205, 60, 60);
  boite3 = new Boites(470, 200, 70, 70);
  boite4 = new Boites(250, 200, 70, 70);
  planche2 = new Planches(360, 200, 290, 20, 0);
  cochon2 = new Cochons(360, 160, 60, 60);
  planche3 = new Planches(360, 0, 150, 20, 45);
  boite5 = new Boites(360, 90, 70, 70);
  planche4 = new Planches(330, 0, 150, 20, -45);
  sol1 = new Sol(1105, 295, 190, 140);
  lancepierre = new Lancepierre(oiseau1.body, { x: 1095, y: 150 });
}

function draw() {
  background(bgimg);
  sol1.display();
  ground.display();
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  angleMode(DEGREES);

  oiseau1.display();
  boite1.display();
  boite2.display();
  planche1.display();
  cochon1.display();
  boite3.display();
  boite4.display();
  planche2.display();
  cochon2.display();
  planche3.display();
  boite5.display();
  planche4.display();
  lancepierre.display();
  image(lancepierre1, 1105, 138, 30, 90);
  image(lancepierre2, 1088, 138, 30, 50);
}

function mouseDragged() {
  oiseau1.body.position.x = mouseX;
  oiseau1.body.position.y = mouseY;
}

function mouseReleased() {
  lancepierre.lancer();
}
