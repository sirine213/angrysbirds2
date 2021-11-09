class Planches {
  constructor(x, y, w, h,angle) {
    var options = {
      restitution: 0.8,
      density: 1,
      friction: 1.8,
    
    };
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h,options);
    this.image = loadImage("sprites/wood2.png");
    World.add(world, this.body);
    Matter.Body.setAngle(this.body,angle)
  }
  display() {
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
imageMode(CENTER);
image(this.image, 0, 0, this.w, this.h);
pop();
  }
}
