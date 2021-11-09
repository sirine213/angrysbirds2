class Cochons {
  constructor(x, y, w, h) {
    var options = {
      restitution: 0.8,
      density: 1,
      friction: 1,
    };
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.image = loadImage("sprites/enemy.png");
    World.add(world, this.body);
    this.transparence=255
  
  }
  display() {
    if (this.body.speed<3) {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.w, this.h);
      pop();
    }
    else{
    World.remove(world,this.body)
    push()
    this.transparence-=5
    tint(255,this.transparence)
    image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    
  pop()}
  }
}
